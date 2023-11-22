import React, { Dispatch, SetStateAction } from 'react';

interface DatepickerProps {
  dateOfBirth: string;
  setDateOfBirth: Dispatch<SetStateAction<string>>;
  startDate: string;
  setStartDate: Dispatch<SetStateAction<string>>;
}

export const Datepicker = ({
  dateOfBirth,
  setDateOfBirth,
  startDate,
  setStartDate,
}: DatepickerProps) => {
  return (
    <>
      <div>
        <label htmlFor="date-of-birth">Date of Birth</label>
        <input
          id="date-of-birth"
          type="date"
          value={dateOfBirth}
          onChange={e => setDateOfBirth(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="start-date">Start Date</label>
        <input
          id="start-date"
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
      </div>
    </>
  );
};
