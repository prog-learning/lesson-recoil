import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../recoil/atom';

export const ChangeUserButton = () => {
  const [inputForm, setInputForm] = useState({ name: '', age: '', hobby: '' });
  const setUser = useSetRecoilState(userState);

  return (
    <div>
      <input
        type='text'
        onChange={(e) => setInputForm({ ...inputForm, name: e.target.value })}
      />
      <button
        onClick={() => setUser((prev) => ({ ...prev, name: inputForm.name }))}
      >
        change name
      </button>
      <br />
      <input
        type='text'
        onChange={(e) => setInputForm({ ...inputForm, age: e.target.value })}
      />
      <button
        onClick={() => setUser((prev) => ({ ...prev, age: inputForm.age }))}
      >
        change age
      </button>
      <br />
      <input
        type='text'
        onChange={(e) => setInputForm({ ...inputForm, hobby: e.target.value })}
      />
      <button
        onClick={() =>
          setUser((prev) => ({
            ...prev,
            hobbies: [...prev.hobbies, inputForm.hobby],
          }))
        }
      >
        add hobby
      </button>
    </div>
  );
};
