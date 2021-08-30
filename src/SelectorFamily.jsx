import { atom, atomFamily, selectorFamily, useRecoilState } from 'recoil';

const rightHand = atom({
  key: 'right-hand',
  default: 'pen',
});

const onHand = selectorFamily({
  key: 'on-hand',
  /* paramに引数が渡る */
  get:
    (param) =>
    ({ get }) => {
      const value = get(rightHand);
      return param + '-' + value;
    },
  set:
    (param) =>
    ({ get, set }, newValue) => {
      const value = get(leftHand('pineapple'));
      set(rightHand, newValue + '-' + param + '-' + value);
    },
});

/* 応用 */
const leftHand = atomFamily({
  key: 'pineapple-pen',
  /* 他のstateに基づくデフォルト値を返す */
  default: selectorFamily({
    get:
      (param) =>
      ({ get }) => {
        const value = get(rightHand);
        return param + '-' + value;
      },
  }),
});

export const SelectorFamily = () => {
  const [onHandValue, setOnHand] = useRecoilState(onHand('apple'));
  const [leftHandValue, setLeftHand] = useRecoilState(leftHand('pineapple'));

  return (
    <div>
      <h2>use selectorFamily</h2>
      <p>leftHandValue: {leftHandValue}</p>
      {/* ① */}
      <button onClick={() => setLeftHand('pen')}>remove pine</button>
      <p>onHandValue: {onHandValue}</p> {/* ※ */}
      {/* ② */}
      <button onClick={() => setOnHand('pineapple')}>setRawName</button>
      {/* ②を押したときと,①→②の順に押したときの※の値をそれぞれ求めよ */}
    </div>
  );
};
