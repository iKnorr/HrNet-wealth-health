'use client';
import { EmployeeContext } from '@/app/context/EmployeeContext';
import React, { useContext, useState } from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import { useSort } from '@table-library/react-table-library/sort';
import { usePagination } from '@table-library/react-table-library/pagination';
import styles from './employeesList.module.css';
import { COLUMNS, tableSearchOptions } from '@/app/services/tableService';
import Link from 'next/link';
import { TableOptions } from '@/app/components/TableOptions/TableOptions';
import { TablePagination } from '@/app/components/TablePagination/TablePagination';
import { nrOfTableLines } from '@/app/services/employeeListService';

const EmployeeList = () => {
  const { employeesData } = useContext(EmployeeContext);
  const theme = useTheme(getTheme());
  const [tableLines, setTableLines] = useState(nrOfTableLines[0]);
  const [search, setSearch] = useState('');

  let data: any = { nodes: employeesData };

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortFns: tableSearchOptions,
    }
  );

  function onSortChange(action: any, state: any) {
    console.log(action, state);
  }

  const pagination = usePagination(data, {
    state: {
      page: 0,
      // size: tableLines,
      size: 1, // keep for development to see pagination easier
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

  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <div className={styles.tableWrapper}>
          <h1>Current Employees</h1>
          <TableOptions
            search={search}
            handleSearch={handleSearch}
            nrOfTableLines={nrOfTableLines}
            setTableLines={setTableLines}
          />
          <CompactTable
            columns={COLUMNS}
            data={data}
            theme={theme}
            pagination={pagination}
            sort={sort}
          />
        </div>
        <TablePagination data={data} pagination={pagination} search={search} />
        <Link href="/" className={styles.link}>
          <h2>Home</h2>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeList;
