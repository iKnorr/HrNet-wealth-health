import React, { useContext } from 'react';
import styles from './TablePagination.module.css';
import { EmployeeContext } from '@/app/context/EmployeeContext';
import { Pagination } from '@table-library/react-table-library/types/pagination';
import { TableNode } from '@table-library/react-table-library/types/table';
import { TableFilterInfo } from '../TableFilterInfo/TableFilterInfo';

interface TablePaginationProps {
  data: any;
  search: string;
  pagination: Pagination<TableNode>;
}

export const TablePagination = ({
  data,
  search,
  pagination,
}: TablePaginationProps) => {
  const { employeesData } = useContext(EmployeeContext);

  return (
    <div className={styles.paginationWrapper}>
      <TableFilterInfo data={data} search={search} />
      {pagination.state.getTotalPages(data.nodes) !== 0 && (
        <div className={styles.pagination}>
          <button
            className={styles.prvNext}
            type="button"
            disabled={pagination.state.page === 0}
            onClick={() => pagination.fns.onSetPage(pagination.state.page - 1)}
          >
            Previous
          </button>
          <div>
            <span>
              {pagination.state
                .getPages(data.nodes)
                .map((_: any, index: number) => {
                  return (
                    <button
                      className={styles.paginationButton}
                      key={index}
                      type="button"
                      style={{
                        color:
                          pagination.state.page === index ? 'black' : 'grey',
                        fontWeight:
                          pagination.state.page === index ? 'bold' : 'normal',
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
            onClick={() => pagination.fns.onSetPage(pagination.state.page + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
