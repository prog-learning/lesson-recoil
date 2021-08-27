import React from 'react';
import { UserView } from './UserView';
import { ChangeUserButton } from './ChangeUserButton';

export const User = () => {
  return (
    <div>
      <UserView />
      <ChangeUserButton />
    </div>
  );
};
