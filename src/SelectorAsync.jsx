import React from 'react';
import { atom, selector, useRecoilValueLoadable } from 'recoil';

/* selectorで非同期処理を使う */
const todoStateSelector = selector({
  key: 'todo-state-selector',
  get: async ({ get }) => {
    // 今回 get は未使用

    /* 非同期処理 */
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    return await response.json();
  },
  /* 現時点では,setは非同期処理に対応してない */
  set: () => {},
});

/* atomの初期値に非同期処理で取得したデータを使用する */
const todoStateAtom = atom({
  key: 'todo-state-atom',

  /* ここでselectorを使用する組み合わせ技 */
  default: selector({
    key: 'todo-state-atom-default',
    get: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      return await response.json();
    },
  }),
});

export const SelectorAsync = () => {
  /* selectorのgetを非同期処理にしている場合はuseRecoilStateLoadableを使う */
  const todoSelector = useRecoilValueLoadable(todoStateSelector);
  const todoAtom = useRecoilValueLoadable(todoStateAtom);

  /* state（通信の状態）, contents（取得した中身）などがある */
  // console.log(todoSelector);
  console.log(todoAtom);
  // データを取得するまではstateプロパティはloading
  // 取得したらstateプロパティはhasValueになる

  return (
    <div>
      <h2>use selector with async</h2>
      <div>
        <h3>todoSelector.content</h3>
        {todoSelector.state === 'hasValue' ? (
          <pre>{JSON.stringify(todoSelector.contents, null, 2)}</pre>
        ) : (
          <p>loading...</p>
        )}
      </div>
      <div>
        <h3>todoAtom.content</h3>
        {todoAtom?.contents ? (
          <pre>{JSON.stringify(todoAtom.contents, null, 2)}</pre>
        ) : (
          <p>loading...</p>
        )}
      </div>
      {/* <button onClick={() => setTodos(todos?.contents)}>set todo list</button> */}
    </div>
  );
};
