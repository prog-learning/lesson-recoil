import { atom, selector } from 'recoil';
import { countState, userState } from './atom';

export const toUpperCaseUserName = selector({
  key: 'to-upper-user-name',
  /* useRecoilValueとして呼ばれる値 */
  get: ({ get }) => {
    /* このgetを使ってatomの値を取得できる */
    const user = get(userState);
    return user.name.toUpperCase();
  },
  /* useSetRecoilStateとして呼ばれる関数 */
  set: ({ set, get }, newValue) => {
    console.log(newValue); // useSetRecoilStateの入力値
    const user = get(userState);
    user.name = newValue.toLowerCase();
    /* setを使って他のatomの値を変更できる  */
    set(countState, countState.count + 1);
  },
});

/* 非同期処理 */

export const todoState = atom({
  key: 'count-state',
  default: null,
});
