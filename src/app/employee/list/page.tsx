'use client';
import { EmployeeContext } from '@/app/context/EmployeeContext';
import React, { useContext, useState } from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import { useSort } from '@table-library/react-table-library/sort';
import { usePagination } from '@table-library/react-table-library/pagination';
import styles from './employeesList.module.css';
import { COLUMNS } from '@/app/services/tableService';
import { Select } from '@/app/components/Select/Select';
import { nrOfTableLines } from '@/app/types/listTypes';

const EmployeeList = () => {
  const { employeesData } = useContext(EmployeeContext);
  const theme = useTheme(getTheme());
  const [tableLines, setTableLines] = useState(nrOfTableLines[0]);
  const [search, setSearch] = useState('');

  let data = { nodes: employeesData };

  const pagination = usePagination(data, {
    state: {
      page: 0,
      // size: tableLines,
      size: 2,
    },
    onChange: onPaginationChange,
  });

  function onPaginationChange(action: any, state: any) {
    console.log(action, state);
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  data = {
    nodes: data.nodes.filter(item =>
      item.firstName.toLowerCase().includes(search.toLowerCase())
    ),
  };

  console.log(employeesData);

  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <div className={styles.tableWrapper}>
          <h1>Current Employees</h1>
          <div className={styles.tablesOptions}>
            <div className={styles.numberSelect}>
              <span>Show</span>
              <select onChange={e => setTableLines(e.target.value)}>
                {nrOfTableLines?.map((i, index) => (
                  <option key={`${index}-${i}`}>{i}</option>
                ))}
              </select>
              <span>entries</span>
            </div>
            <label htmlFor="search">
              Search :&nbsp;
              <input
                id="search"
                type="text"
                value={search}
                onChange={handleSearch}
              />
            </label>
          </div>
          <CompactTable
            columns={COLUMNS}
            data={data}
            theme={theme}
            pagination={pagination}
          />
        </div>
        <div className={styles.paginationWrapper}>
          <span>Total Pages: {pagination.state.getTotalPages(data.nodes)}</span>
          <span>
            {pagination.state
              .getPages(data.nodes)
              .map((_: any, index: number) => (
                <button
                  className={styles.paginationButton}
                  key={index}
                  type="button"
                  style={{
                    fontWeight:
                      pagination.state.page === index ? 'bold' : 'normal',
                  }}
                  onClick={() => pagination.fns.onSetPage(index)}
                >
                  {index + 1}
                </button>
              ))}
          </span>
        </div>
        <a href="/" className={styles.link}>
          <h2>Home</h2>
        </a>
      </div>
    </div>
  );
};

export default EmployeeList;
