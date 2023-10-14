import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

export const metadata = {
  title: 'Cagfile',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
