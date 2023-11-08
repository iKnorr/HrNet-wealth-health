'use client';
import { Employee } from '@/app/types/employeeType';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

interface EmployeeContextType {
  employeesData: Employee[];
  setEmployeesData: Dispatch<SetStateAction<Employee[]>>;
}

export const EmployeeContext = createContext<EmployeeContextType>({
  employeesData: [],
  setEmployeesData: () => {},
});

const EmployeeContextProvider = ({ children }: { children: JSX.Element }) => {
  const [employeesData, setEmployeesData] = useState<Employee[]>([]);
  console.log('DATA', employeesData);
  return (
    <EmployeeContext.Provider value={{ employeesData, setEmployeesData }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
