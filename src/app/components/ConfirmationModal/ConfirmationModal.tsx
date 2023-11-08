import React from 'react';
import styles from './ConfirmationModal.module.css';
import { CloseIcon } from '../icons/CloseIcon';
import { CheckIcon } from '../icons/CheckIcon';

interface ConfirmationModalProps {
  handleClickCloseButton: () => void;
}

export const ConfirmationModal = ({
  handleClickCloseButton,
}: ConfirmationModalProps) => {
  return (
    <>
      <div className={styles.container} onClick={handleClickCloseButton} />
      <div className={styles.textBox}>
        <div className={styles.closeButton} onClick={handleClickCloseButton}>
          <CloseIcon />
        </div>
        <CheckIcon />
        <p>Employee Created!</p>
      </div>
    </>
  );
};
