export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  department: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export enum Department {
  SALES = 'Sales',
  MARKETING = 'Marketing',
  ENGINEERING = 'Engineering',
  HUMAN_RESOURCES = 'Human Resources',
  LEGAL = 'Legal',
}

export interface State {
  name: string;
  abbreviation: string;
}
