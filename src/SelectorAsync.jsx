import React from 'react';
import { atom, selector, useRecoilStateLoadable, useRecoilValue } from 'recoil';

const todoAuthState = atom({
  key: 'todo-auth-state',
  default: true,
});
const todosState = atom({
  key: 'todos-state',
  default: null,
});

const getTodoState = selector({
  key: 'get-todo-state',
  get: async ({ get }) => {
    let authorized = get(todoAuthState);
    if (!authorized) return [];
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=20'
    );
    return await response.json();
  },
  /* 現時点では,setは非同期処理に対応してない */
  set: ({ get, set }, newTodos) => {
    console.log(get(todoAuthState));
    set(todosState, newTodos);
  },
});

export const SelectorAsync = () => {
  /* selectorのgetを非同期処理にしている場合はuseRecoilStateLoadableを使う */
  const [todos, setTodos] = useRecoilStateLoadable(getTodoState);
  const todoList = useRecoilValue(todosState);

  /* state（通信の状態）, contents（取得した中身）などがある */
  console.log(todos);

  return (
    <div>
      <h2>use selector with async</h2>
      <button onClick={() => setTodos(todos?.contents)}>set todo list</button>
      {todoList?.map((todo) => (
        <div key={todo.id}>
          <input type='checkbox' checked={todo.completed} onChange={() => {}} />
          {todo.title}
        </div>
      ))}
    </div>
  );
};
