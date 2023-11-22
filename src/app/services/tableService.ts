import { SortFn } from '@table-library/react-table-library/types/sort';
import { Employee } from '../types/employeeType';

export const COLUMNS = [
  {
    label: 'First Name',
    renderCell: (item: Employee) => item.firstName,
    sort: { sortKey: 'FIRST_NAME' },
  },
  {
    label: 'Last Name',
    renderCell: (item: Employee) => item.lastName,
    sort: { sortKey: 'LAST_NAME' },
  },
  {
    label: 'Start Date',
    renderCell: (item: Employee) => item.startDate,
    sort: { sortKey: 'START_DATE' },
  },
  {
    label: 'Department',
    renderCell: (item: Employee) => item.department,
    sort: { sortKey: 'DEPARTMENT' },
  },
  {
    label: 'Date of Birth',
    renderCell: (item: Employee) => item.dateOfBirth,
    sort: { sortKey: 'DATE_OF_BIRTH' },
  },
  {
    label: 'Street',
    renderCell: (item: Employee) => item.street,
    sort: { sortKey: 'STREET' },
  },
  {
    label: 'City',
    renderCell: (item: Employee) => item.city,
    sort: { sortKey: 'CITY' },
  },
  {
    label: 'State',
    renderCell: (item: Employee) => item.state,
    sort: { sortKey: 'STATE' },
  },
  {
    label: 'Zip Code',
    renderCell: (item: Employee) => item.zipCode,
    sort: { sortKey: 'ZIP_CODE' },
  },
];

export const tableSearchOptions: Record<string, SortFn> = {
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
};
