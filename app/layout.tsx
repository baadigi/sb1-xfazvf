import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'BaaDigi - Digital Marketing Agency in Huntington Beach',
    template: '%s | BaaDigi'
  },
  description: 'Transform your business with BaaDigi\'s comprehensive digital marketing services. SEO, PPC, Social Media Management, and Web Development solutions in Huntington Beach, CA.',
  keywords: ['digital marketing agency', 'SEO services', 'PPC management', 'social media marketing', 'web development', 'Huntington Beach', 'Orange County'],
  authors: [{ name: 'BaaDigi' }],
  creator: 'BaaDigi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://baadigi.com',
    title: 'BaaDigi - Digital Marketing Agency',
    description: 'Transform your business with BaaDigi\'s comprehensive digital marketing services.',
    siteName: 'BaaDigi'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}