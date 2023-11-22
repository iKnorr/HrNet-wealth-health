import React, { useContext } from 'react';
import styles from '../../employee/list/employeesList.module.css';
import { EmployeeContext } from '@/app/context/EmployeeContext';

interface TableFilterInfoProps {
  data: any;
  search: string;
}

export const TableFilterInfo = ({ data, search }: TableFilterInfoProps) => {
  const { employeesData } = useContext(EmployeeContext);
  return (
    <div>
      <span className={styles.spanStyle}>
        {`Showing ${!data?.nodes.length ? '0' : '1'} to ${
          data?.nodes.length
        } of ${data?.nodes.length} entries`}{' '}
        {search ? `(filtered from ${employeesData?.length} total entries)` : ''}
      </span>
    </div>
  );
};
