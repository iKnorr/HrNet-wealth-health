import React, { Dispatch, SetStateAction } from 'react';
import styles from './TableOptions.module.css';

interface TableOptionsProps {
  nrOfTableLines: string[];
  setTableLines: Dispatch<SetStateAction<string>>;
  search: string;
  handleSearch: (e: any) => void;
}

export const TableOptions = ({
  nrOfTableLines,
  setTableLines,
  search,
  handleSearch,
}: TableOptionsProps) => {
  return (
    <div className={styles.tablesOptions}>
      <div className={styles.numberSelect}>
        <span className={styles.spanStyle}>Show</span>
        <select onChange={e => setTableLines(e.target.value)}>
          {nrOfTableLines?.map((i, index) => (
            <option key={`${index}-${i}`}>{i}</option>
          ))}
        </select>
        <span className={styles.spanStyle}>entries</span>
      </div>
      <div>
        <span className={styles.spanStyle}>Search :&nbsp;</span>
        <input
          id="search"
          className={styles.searchInput}
          type="text"
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};
