import { atom } from 'recoil';

export const helloState = atom({
  key: 'hello-state',
  default: 'hello recoil',
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
  key: 'todo-state',
  default: null,
});
