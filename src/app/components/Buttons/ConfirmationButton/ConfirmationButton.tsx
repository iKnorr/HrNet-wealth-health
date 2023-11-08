'use client';
import React from 'react';
import styles from './ConfirmationButton.module.css';

interface ConfirmationButtonProps {
  handleSaveEmployee: (e: any) => void;
}

export const ConfirmationButton = ({
  handleSaveEmployee,
}: ConfirmationButtonProps) => {
  return (
    <button className={styles.confirmationButton} onClick={handleSaveEmployee}>
      Save
    </button>
  );
};
