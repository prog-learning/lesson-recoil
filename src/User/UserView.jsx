import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../recoil/atom';

export const UserView = () => {
  const user = useRecoilValue(userState);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Hobbies: {user.hobbies.join(', ')}</p>
    </div>
  );
};
