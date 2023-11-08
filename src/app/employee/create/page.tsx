'use client';
import Link from 'next/link';
import './createEmployee.css';
import { useContext, useEffect, useState } from 'react';
import { Department, Employee } from '@/app/types/employeeType';
import { states } from '@/data/statesData';
import { EmployeeContext } from '@/context/EmployeeContext';
import { ConfirmationModal } from '@/app/components/ConfirmationModal/ConfirmationModal';

const CreateEmployee = () => {
  const { employeesData, setEmployeesData } = useContext(EmployeeContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [department, setDepartment] = useState<Department>(Department.SALES);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  const handleSaveEmployee = (e: any) => {
    e.preventDefault();
    const newEmployee: Employee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      department,
      street,
      city,
      state,
      zipCode,
    };
    setEmployeesData(previous => [...previous, newEmployee]);
    setShowConfirmationModal(true);
    setFirstName('');
    setLastName('');
    setDateOfBirth('');
    setStartDate('');
    setDepartment(Department.SALES);
    setStreet('');
    setCity('');
    setState('');
    setZipCode('');
  };
  console.log('HERE', employeesData);

  const departments = Object.values(Department);

  useEffect(() => {
    const handleEscapeKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseConfirmationModal();
      }
    };
    document.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="title">
          <h1>HRnet</h1>
        </div>
        <div className="container">
          <Link href="/employee/list">View Current Employees</Link>
          <h2>Create Employee</h2>
          <form action="#" id="create-employee">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={(e: any) => setFirstName(e.target.value)}
            />

            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e: any) => setLastName(e.target.value)}
            />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input
              id="date-of-birth"
              type="date"
              value={dateOfBirth}
              onChange={e => setDateOfBirth(e.target.value)}
            />

            <label htmlFor="start-date">Start Date</label>
            <input
              id="start-date"
              type="date"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
            />

            <fieldset className="address">
              <legend>Address</legend>

              <label htmlFor="street">Street</label>
              <input
                id="street"
                type="text"
                value={street}
                onChange={e => setStreet(e.target.value)}
              />

              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
              />

              <label htmlFor="state">State</label>
              <select
                name="state"
                id="state"
                value={state}
                onChange={e => setState(e.target.value)}
              >
                {states.map((state, index) => (
                  <option key={`${state}-${index}`}>{state.name}</option>
                ))}
              </select>

              <label htmlFor="zip-code">Zip Code</label>
              <input
                id="zip-code"
                type="number"
                value={zipCode}
                onChange={e => setZipCode(e.target.value)}
              />
            </fieldset>

            <label htmlFor="department">Department</label>
            <select
              name="department"
              id="department"
              value={department}
              onChange={e => setDepartment(e.target.value as Department)}
            >
              {departments.map((dep, index) => (
                <option key={`${dep}-${index}`}>{dep}</option>
              ))}
            </select>
          </form>
          <button onClick={handleSaveEmployee}>Save</button>
        </div>
        {showConfirmationModal && (
          <ConfirmationModal
            handleClickCloseButton={handleCloseConfirmationModal}
          />
        )}
      </div>
    </div>
  );
};

export default CreateEmployee;
