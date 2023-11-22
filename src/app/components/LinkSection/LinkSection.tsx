import Link from 'next/link';
import React from 'react';
import styles from './LinkSection.module.css';

export const LinkSection = () => {
  return (
    <div className={styles.linkWrapper}>
      <Link href="/employee/list">
        <h3>Home</h3>
      </Link>
      <Link href="/employee/list">
        <h3>View Current Employees</h3>
      </Link>
    </div>
  );
};
