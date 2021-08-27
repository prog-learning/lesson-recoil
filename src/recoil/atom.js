import { atom } from 'recoil';

export const countState = atom({
  key: 'count-state',
  default: 0,
});

export const userState = atom({
  key: 'user-state',
  default: {
    name: 'johnson',
    age: '82',
    hobbies: ['coding', 'running'],
  },
});

export const todoState = atom({
  key: 'count-state',
  default: null,
});
