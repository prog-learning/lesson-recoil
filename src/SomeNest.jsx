import React from 'react';
import { useRecoilValue } from 'recoil';
import { helloState } from './recoil/atom';

export const SomeNest = (props) => {
  return (
    <div>
      <Nest1 hello={props.hello} />
    </div>
  );
};

const Nest1 = (props) => {
  return (
    <div>
      <Nest2 hello={props.hello} />
    </div>
  );
};

const Nest2 = (props) => {
  const hello = useRecoilValue(helloState);

  return (
    <div>
      <div>{props.hello}</div>
      <div>{hello}</div>
    </div>
  );
};
