import React from 'react';
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
// import { countState } from './recoil/atom';

/* atom （本来なら別ファイルに書くと良い） */
const countState = atom({
  key: 'count-state-test-atom', // uniqueである必要がある
  default: 0, // 初期値を設定
  // ここに保存したものをどのComponentでも呼び出せるようにする想定
});

export const Atom = () => {
  /* Component内でatomから値を呼び出す */
  const [count, setCount] = useRecoilState(countState); // recoil の useRecoilStateを使う
  // [値とする名前, set関数とする名前]

  /* それぞれ個別に呼び出すことも可能 */
  const countValue = useRecoilValue(countState); // useRecoilValueを使う
  const setCountState = useSetRecoilState(countState); // useSetRecoilStateを使う

  return (
    <div>
      <h2>use atom</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>count up</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
};
