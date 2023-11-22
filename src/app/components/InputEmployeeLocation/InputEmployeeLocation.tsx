import { Select } from 'ik-select-wealth-health';
import React, { Dispatch, SetStateAction } from 'react';
import styles from '../../employee/create/createEmployee.module.css';

interface InputUserLocationProps {
  street: string;
  setStreet: Dispatch<SetStateAction<string>>;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  zipCode: string;
  setZipCode: Dispatch<SetStateAction<string>>;
  statesOption: string[];
}

export const InputUserLocation = ({
  street,
  setStreet,
  city,
  setCity,
  state,
  setState,
  zipCode,
  setZipCode,
  statesOption,
}: InputUserLocationProps) => {
  return (
    <fieldset className={styles.address}>
      <legend>Address</legend>
      <div className={styles.inputSection}>
        <div>
          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            value={street}
            onChange={e => setStreet(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.inputSection}>
        <div>
          <label>State</label>
          <Select
            options={statesOption}
            selectedOption={state}
            setState={setState}
          />
        </div>
        <div>
          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="number"
            value={zipCode}
            onChange={e => setZipCode(e.target.value)}
          />
        </div>
      </div>
    </fieldset>
  );
};
