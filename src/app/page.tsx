'use client';
import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        src="/wealth-health.jpeg"
        alt="wealth-health-logo"
        width={300}
        height={276}
        priority={true}
      />
      <div className={styles.linkWrapper}>
        <Link href="/employee/create">Create Employee</Link>
        <Link href="/employee/list">Employee List</Link>
      </div>
    </div>
  );
}
