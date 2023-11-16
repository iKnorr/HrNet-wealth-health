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
import { nrOfTableLines } from '@/app/types/listTypes';
import Link from 'next/link';

const EmployeeList = () => {
  const { employeesData } = useContext(EmployeeContext);
  const theme = useTheme(getTheme());
  const [tableLines, setTableLines] = useState(nrOfTableLines[0]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState<number>();

  let data: any = { nodes: employeesData };

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortFns: {
        FIRST_NAME: array =>
          array.sort((a, b) => a.firstName.localeCompare(b.firstName)),
        LAST_NAME: array =>
          array.sort((a, b) => a.lastName.localeCompare(b.lastName)),
        START_DATE: array => array.sort((a, b) => a.startDate - b.startDate),
        DEPARTMENT: array =>
          array.sort((a, b) => a.department.localeCompare(b.department)),
        DATE_OF_BIRTH: array => array.sort((a, b) => a.startDate - b.deadline),
        STREET: array => array.sort((a, b) => a.street.localeCompare(b.street)),
        CITY: array => array.sort((a, b) => a.city.localeCompare(b.city)),
        STATE: array => array.sort((a, b) => a.state.localeCompare(b.state)),
        ZIP_CODE: array => array.sort((a, b) => a.zipCode - b.zipCode),
      },
    }
  );

  function onSortChange(action: any, state: any) {
    console.log(action, state);
  }

  const pagination = usePagination(data, {
    state: {
      page: 0,
      // size: tableLines,
      size: 1,
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
    nodes: data.nodes.filter((person: any) => {
      for (const key in person) {
        if (
          typeof person[key] === 'string' &&
          person[key].toLowerCase().includes(search.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    }),
  };

  console.log(
    pagination.state,
    pagination.state.getTotalPages(data.nodes) - 1 === pagination.state.page
  );

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
            sort={sort}
          />
        </div>
        <div className={styles.paginationWrapper}>
          <div>
            <span className={styles.spanStyle}>
              {`Showing ${!data?.nodes.length ? '0' : '1'} to ${
                data?.nodes.length
              } of ${data?.nodes.length} entries`}{' '}
              {search
                ? `(filtered from ${employeesData?.length} total entries)`
                : ''}
            </span>
          </div>
          {pagination.state.getTotalPages(data.nodes) !== 0 && (
            <div className={styles.pagination}>
              <button
                className={styles.prvNext}
                type="button"
                disabled={pagination.state.page === 0}
                onClick={() =>
                  pagination.fns.onSetPage(pagination.state.page - 1)
                }
              >
                Previous
              </button>
              <div>
                <span>
                  {pagination.state
                    .getPages(data.nodes)
                    .map((_: any, index: number) => {
                      if (pagination.state.page) console.log(index);
                      return (
                        <button
                          className={styles.paginationButton}
                          key={index}
                          type="button"
                          style={{
                            fontWeight:
                              pagination.state.page === index
                                ? 'bold'
                                : 'normal',
                          }}
                          onClick={() => pagination.fns.onSetPage(index)}
                        >
                          {index + 1}
                        </button>
                      );
                    })}
                </span>
              </div>
              <button
                className={styles.prvNext}
                type="button"
                disabled={
                  pagination.state.getTotalPages(data.nodes) <= 1 ||
                  pagination.state.getTotalPages(data.nodes) - 1 ===
                    pagination.state.page
                }
                onClick={() =>
                  pagination.fns.onSetPage(pagination.state.page + 1)
                }
              >
                Next
              </button>
            </div>
          )}
        </div>
        <Link href="/" className={styles.link}>
          <h2>Home</h2>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeList;
