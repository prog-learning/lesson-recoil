import React from 'react';
import { atom, selector, useRecoilValue, useRecoilValueLoadable } from 'recoil';

const todoState = atom({
  key: 'todo-state',
  default: null,
});

const getTodoState = selector({
  key: 'get-todo-state',
  get: async ({ get }) => {
    let todos = get(todoState);
    if (todos) {
      return todos;
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    todos = await response.json();
    return todos;
  },
});

export const SelectorAsync = () => {
  const todos = useRecoilValueLoadable(getTodoState);
  console.log(todos);
  return (
    <div>
      <h2>use selector with async</h2>
    </div>
  );
};
