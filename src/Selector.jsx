import React, { useState } from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const usersState = atom({
  key: 'users-state-atom',
  default: [
    { id: 1, name: 'Johnson', country: 'アメリカ' },
    { id: 2, name: 'Smith', country: 'カナダ' },
  ],
});

const locationState = atom({
  key: 'local-state-atom',
  default: '日本',
});

const toUpperUserNames = selector({
  key: 'to-upper-user-name',

  /* useRecoilValueとして呼ばれる値 */
  get: ({ get }) => {
    /* このgetを使ってatomの値を取得できる */
    const users = get(usersState); // userNameStateの値を取得
    const upperUserNames = users.map((user) => user.name.toUpperCase());
    return upperUserNames; // 取得した値を大文字に変換して返す
  },

  /* useSetRecoilStateとして呼ばれるset関数 */
  set: ({ set, get, reset }, name) => {
    console.log(name); // useSetRecoilStateの入力値...（＊）

    const users = get(usersState); // さっきのgetと同じ
    const country = get(locationState);

    /* 今あるidの中で最も大きいnumberを取得 */
    const ids = users.map((user) => user.id);
    const maxId = Math.max(...ids);

    const newUser = {
      id: maxId + 1, // 今あるidの中で最も大きいnumberを取得して+1したものをidにする
      name,
      country,
    };

    /* setを使って他のatomの値を変更できる  */
    set(usersState, [...users, newUser]);

    /* resetを使用することで指定したatomの値を初期値に戻すことができる */
    if (users.length > 4) {
      /* usersが5つ以上であればリセット */
      reset(usersState);
    }
    // return はない
  },
});

export const Selector = () => {
  const [inputName, setInputName] = useState('');
  const users = useRecoilValue(usersState);
  const currentLocation = useRecoilValue(locationState);
  const [upperNames, setUpperName] = useRecoilState(toUpperUserNames);

  return (
    <div>
      <h2>use selector</h2>
      <p>現在の場所: {currentLocation}</p>
      <div>
        <h3>users</h3>
        <p>usersState(atom)の状態</p>
        <pre>{JSON.stringify(users, null, 4)}</pre>
      </div>
      <div>
        <h3>upperNames</h3>
        <p>selector内で大文字に変換された名前の配列</p>
        <pre>{JSON.stringify(upperNames, null, 4)}</pre>
      </div>
      <div>
        <h3>add user</h3>
        <p>
          入力された文字列をselectorのset関数内で加工してusersStateにオブジェクトとして追加する
        </p>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button onClick={() => setUpperName(inputName /* 入力値...（＊） */)}>
          setUpperName
        </button>
      </div>
    </div>
  );
};
