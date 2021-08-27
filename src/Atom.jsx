import React from 'react';
import { atom } from 'recoil';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

/* atom 本来なら別ファイルに書く */
const countState = atom({
  key: 'count-state', // uniqueである必要がある
  default: 0, // 初期値を設定
  // ここに保存したものはどのComponentでも呼び出せる
});

export const Atom = () => {
  /* atomから呼び出す */
  const [count, setCount] = useRecoilState(countState);

  /* 分けて呼び出すことも可能 */
  // const count = useRecoilValue(countState);
  // const setCount = useSetRecoilState(countState);
  // ※名前が重複するのでコメントアウト

  return (
    <div>
      <h2>use atom</h2>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>count up</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
};
