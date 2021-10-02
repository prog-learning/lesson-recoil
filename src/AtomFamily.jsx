import { useState } from 'react';
import { atomFamily, useRecoilState, useRecoilValue } from 'recoil';

/* atom Family （atomのクラスのようなもの） */
const userState = atomFamily({
  key: 'user-state-atom-family',
  default: (param) => ({
    name: param, // 受け取った値を初期値にできる
    country: 'Japan',
  }),
});

/* 使い回すテンプレートの例 */
const NamePlate = ({ value }) => {
  const [input, setInput] = useState('');
  const [user, setUser] = useRecoilState(userState(value));
  // userState(value) は value をuniqueとしたIDでatomを生成する
  // また, value は上記のparamに渡る

  return (
    <div>
      <p>{user.name}さん</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setUser((prev) => ({ ...prev, name: input }))}>
        変更
      </button>
    </div>
  );
};

export const AtomFamily = () => {
  const [key1, key2] = ['もも', 'nene']; // 日本語でもよさそう
  const name1 = useRecoilValue(userState(key1));
  const name2 = useRecoilValue(userState(key2));

  return (
    <div>
      <h2>use atomFamily</h2>

      <NamePlate value={key1} />
      <NamePlate value={key2} />

      <pre>{JSON.stringify(name1, null, 4)}</pre>
      <pre>{JSON.stringify(name2, null, 4)}</pre>
    </div>
  );
};
