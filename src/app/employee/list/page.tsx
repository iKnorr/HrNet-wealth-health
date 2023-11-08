'use client';
import { EmployeeContext } from '@/context/EmployeeContext';
import React, { useContext } from 'react';

const EmployeeList = () => {
  const { employeesData } = useContext(EmployeeContext);
  console.log(employeesData);
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display"></table>
      <a href="/">Home</a>
    </div>
  );
};

export default EmployeeList;
