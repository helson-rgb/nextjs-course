import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocaleProvider } from '@/lib/i18n/LocaleProvider';
import { ProgressProvider } from '@/lib/ProgressContext';

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  ),
  title: 'Next Academy',
  description: 'Master the Modern Web Stack',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg text-fg">
        <LocaleProvider>
          <ProgressProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ProgressProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
