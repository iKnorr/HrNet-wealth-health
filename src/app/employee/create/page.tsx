'use client';
import Link from 'next/link';
import './createEmployee.css';
import { useContext, useEffect, useState } from 'react';
import { Department, Employee } from '@/app/types/employeeType';
import { departments, states } from '@/data/statesData';
import { EmployeeContext } from '@/context/EmployeeContext';
import { ConfirmationModal } from '@/app/components/ConfirmationModal/ConfirmationModal';
import { ConfirmationButton } from '@/app/components/Buttons/ConfirmationButton/ConfirmationButton';
import { Select } from '@/app/components/Select/Select';

const CreateEmployee = () => {
  const { employeesData, setEmployeesData } = useContext(EmployeeContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [department, setDepartment] = useState(departments[0]);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState(states[0].name);
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
    setState(states[0].name);
    setZipCode('');
  };
  console.log('HERE', employeesData);

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

  const statesOption = states.map(item => item.name);

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="title">
          <h1>HRnet</h1>
        </div>
        <div className="container">
          <Link href="/employee/list">View Current Employees</Link>
          <h2>Create Employee</h2>
          <div className="form-section">
            <section className="input-section">
              <div>
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  value={firstName}
                  onChange={(e: any) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  value={lastName}
                  onChange={(e: any) => setLastName(e.target.value)}
                />
              </div>
            </section>
            <section className="input-section">
              <div>
                <label htmlFor="date-of-birth">Date of Birth</label>
                <input
                  id="date-of-birth"
                  type="date"
                  value={dateOfBirth}
                  onChange={e => setDateOfBirth(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="start-date">Start Date</label>
                <input
                  id="start-date"
                  type="date"
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                />
              </div>
            </section>
            <fieldset className="address">
              <legend>Address</legend>
              <div className="input-section">
                <div>
                  <label htmlFor="street">Street</label>
                  <input
                    id="street"
                    type="text"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                  />
                </div>
              </div>
              <label htmlFor="state">State</label>
              <Select
                options={statesOption}
                // handleOptionClick={e => setState(e.target)}
                selectedOption={state}
                setState={setState}
              />
              <label htmlFor="zip-code">Zip Code</label>
              <input
                id="zip-code"
                type="number"
                value={zipCode}
                onChange={e => setZipCode(e.target.value)}
              />
            </fieldset>
            <label htmlFor="department">Department</label>
            <Select
              options={departments}
              selectedOption={department}
              setState={setDepartment}
            />
          </div>
          <ConfirmationButton handleSaveEmployee={handleSaveEmployee} />
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
