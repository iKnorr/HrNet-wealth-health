'use client';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { Department, Employee } from '@/app/types/employeeType';
import { EmployeeContext } from '@/app/context/EmployeeContext';
import { ConfirmationModal } from '@/app/components/ConfirmationModal/ConfirmationModal';
import { ConfirmationButton } from '@/app/components/Buttons/ConfirmationButton/ConfirmationButton';
import styles from './createEmployee.module.css';
import { departments, states } from '@/app/data/statesData';
import { v4 as uuidv4 } from 'uuid';
import { Select } from 'ik-select-wealth-health';
import { Datepicker } from '@/app/components/Datepicker/Datepicker';

const CreateEmployee = () => {
  const { employeesData, setEmployeesData } = useContext(EmployeeContext);
  const employeeId = uuidv4();
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
      id: employeeId,
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
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.linkWrapper}>
          <Link href="/employee/list">
            <h3>Home</h3>
          </Link>
          <Link href="/employee/list">
            <h3>View Current Employees</h3>
          </Link>
        </div>
        <div className={styles.title}>
          <h1>HRnet</h1>
        </div>
        <div className={styles.container}>
          <h2>Create Employee</h2>
          <div className={styles.formSection}>
            <section className={styles.inputSection}>
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
            <section className={styles.inputSection}>
              <Datepicker
                startDate={startDate}
                setStartDate={setStartDate}
                dateOfBirth={dateOfBirth}
                setDateOfBirth={setDateOfBirth}
              />
            </section>
            <fieldset className={styles.address}>
              <legend>Address</legend>
              <div className={styles.inputSection}>
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
              <div className={styles.inputSection}>
                <div>
                  <label>State</label>
                  <Select
                    options={statesOption}
                    selectedOption={state}
                    setState={setState}
                  />
                </div>
                <div>
                  <label htmlFor="zip-code">Zip Code</label>
                  <input
                    id="zip-code"
                    type="number"
                    value={zipCode}
                    onChange={e => setZipCode(e.target.value)}
                  />
                </div>
              </div>
            </fieldset>
            <label>Department</label>
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
