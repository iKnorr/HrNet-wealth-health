import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './globals.css';
import EmployeeContextProvider from '@/app/context/EmployeeContext';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'HRnet Wealth Health',
  description: 'Wealth Health Human Resources Net',
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <EmployeeContextProvider>{children}</EmployeeContextProvider>
      </body>
    </html>
  );
}
