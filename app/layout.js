import '../styles/globals.css';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400'],
  styles: ['normal'],
  display: 'swap'
});

export const metadata = {
  title: 'kristech.io',
  description: 'Kristopher Ali is a software engineer who specializes in creating websites, games, and desktop + mobile apps.' 
};

export const viewport = {
  width: 'device-width',
  initialScale: '1'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="background">
          <span className="background_dot"></span>
        </div>
        {children}
      </body>
    </html>
  );
}

