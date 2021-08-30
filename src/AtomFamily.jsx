import React from 'react';
import { atomFamily } from 'recoil';
import { useRecoilState } from 'recoil';

/* atom Family atomのインスタンスのようなもの */
const userState = atomFamily({
  key: 'user-state',
  default: (param) => param, // 受け取った値を使用できる
});

/* 使い回すテンプレートの例 */
const UserName = ({ name, value }) => {
  const [userName, setUserName] = useRecoilState(userState(name));
  // userState(name) は name というuniqueなIDのついたatomを生成して返す
  // また, nameは上記のparamに渡る
  return (
    <div>
      <p>{name}</p>
      <p>{userName}</p>
      <button onClick={() => setUserName(value)}>set name</button>
    </div>
  );
};

export const AtomFamily = () => {
  return (
    <div>
      <h2>use atomFamily</h2>
      <UserName name='kaname' value='まどか' />
      <UserName name='akemi' value='ほむら' />
    </div>
  );
};
