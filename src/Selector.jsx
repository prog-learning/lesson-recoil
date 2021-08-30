import React, { useState } from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const userNameState = atom({
  key: 'user-name',
  default: 'johnson',
});

const upperCountState = atom({
  key: 'upper-count',
  default: 0,
});

const toUpperCaseUserName = selector({
  key: 'to-upper-user-name',
  /* useRecoilValueとして呼ばれる値 */
  get: ({ get }) => {
    /* このgetを使ってatomの値を取得できる */
    const userName = get(userNameState);
    return userName.toUpperCase();
  },
  /* useSetRecoilStateとして呼ばれるset関数 */
  set: ({ set, get }, newValue) => {
    console.log(newValue); // useSetRecoilStateの入力値
    get(userNameState);
    /* setを使って他のatomの値を変更できる  */
    set(userNameState, newValue.toUpperCase());
    set(upperCountState, (prev) => prev + newValue.length);
    // return は不要
  },
});

export const Selector = () => {
  const [inputName, setInputName] = useState('');
  const [rawName, setRawName] = useRecoilState(userNameState);
  const [upperName, setUpperName] = useRecoilState(toUpperCaseUserName);
  const upperCount = useRecoilValue(upperCountState);

  return (
    <div>
      <h2>use selector</h2>
      <p>rawName: {rawName}</p>
      <p>upperName: {upperName}</p>
      <input
        type='text'
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <button onClick={() => setRawName(inputName)}>setRawName</button>
      <button onClick={() => setUpperName(inputName)}>setUpperName</button>
      <p>upperCount: {upperCount}</p>
    </div>
  );
};
