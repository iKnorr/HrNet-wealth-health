'use client';
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
import { InputUserName } from '@/app/components/InputUserName/InputUserName';
import { InputUserLocation } from '@/app/components/InputEmployeeLocation/InputEmployeeLocation';
import { LinkSection } from '@/app/components/LinkSection/LinkSection';

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
        <LinkSection />
        <div className={styles.title}>
          <h1>HRnet</h1>
        </div>
        <div className={styles.container}>
          <h2>Create Employee</h2>
          <div className={styles.formSection}>
            <section className={styles.inputSection}>
              <InputUserName
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
              />
            </section>
            <section className={styles.inputSection}>
              <Datepicker
                startDate={startDate}
                setStartDate={setStartDate}
                dateOfBirth={dateOfBirth}
                setDateOfBirth={setDateOfBirth}
              />
            </section>
            <InputUserLocation
              street={street}
              setStreet={setStreet}
              city={city}
              setCity={setCity}
              state={state}
              setState={setState}
              zipCode={zipCode}
              setZipCode={setZipCode}
              statesOption={statesOption}
            />
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
