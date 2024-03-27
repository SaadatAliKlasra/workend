import type, { Metadata } from "next";
import { ToastContainer } from 'react-toastify';

import { Poppins } from "next/font/google";

import { Providers } from "./providers";

import 'react-toastify/dist/ReactToastify.css'

import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600", "700", "800"] });


export const metadata: Metadata = {
  title: "Workend - AI Generated Business Ideas",
  description: "Need a new business idea? workend.co uses AI to help you think outside the box. Find great ideas, solve problems, and build a successful business.",
  applicationName: "Workend",
  authors: [{ name: 'Saadat Ali', url: 'https://saadatali.dev' }],
  generator: "Next.js",
  keywords: "business ideas, startup ideas, ai generated ideas, business idea generator, startup idea generator, business idea, startup idea, business, startup, idea, generator, ai, artificial intelligence, machine learning, workend, workend.co, aiideas, aiideas.com",
  creator: "Saadat Ali",
  publisher: "Saadat Ali",
  robots: "index, follow",
  twitter: {
    card: 'summary_large_image',
    site: '@Workend',
    creator: '@saadat_ali',
    images: 'https://workend.co/images/og.png',
  },
  verification: {
    google: 'fXfvfQQWir7GPVRi0N5Gbfz-7qg7ZFDtGTvQaIO_f8I',
  },
  archives: "https://workend.co/ideas",
  assets: "https://workend.co/images",
  category: "Business",
  classification: "Business Ideas",
  openGraph: {
    title: 'Workend - AI Generated Business Ideas',
    description: 'Need a new business idea? workend.co uses AI to help you think outside the box. Find great ideas, solve problems, and build a successful business.',
    url: 'https://workend.co',
    siteName: 'Workend',
    images: [
      {
        url: 'https://workend.co/images/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'Workend - AI Generated Business Ideas',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`chestnut text-foreground bg-background ${poppins.className}`}>
        <Providers>
          {children}
          <ToastContainer position="bottom-right" hideProgressBar />
        </Providers>
      </body>
    </html>
  );
}
