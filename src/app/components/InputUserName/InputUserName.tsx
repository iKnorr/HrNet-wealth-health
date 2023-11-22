import React, { Dispatch, SetStateAction } from 'react';

interface InputUserNameProps {
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
}

export const InputUserName = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
}: InputUserNameProps) => {
  return (
    <>
      <div>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(e: any) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(e: any) => setLastName(e.target.value)}
        />
      </div>
    </>
  );
};
