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
