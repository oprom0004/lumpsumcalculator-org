import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "લમ્પસમ કેલ્ક્યુલેટર - રોકાણ વૃદ્ધિ કેલ્ક્યુલેટર | Lumpsum Calculator",
  description: "અમારા ચોક્કસ કમ્પાઉન્ડ વ્યાજ કેલ્ક્યુલેટર સાથે તમારા લમ્પસમ રોકાણ વળતરની ગણતરી કરો. ચોક્કસ મ્યુચ્યુઅલ ફંડ વૃદ્ધિ પ્રોજેક્શન સાથે તમારા નાણાકીય ભવિષ્યની યોજના બનાવો.",
  keywords: "લમ્પસમ કેલ્ક્યુલેટર, રોકાણ કેલ્ક્યુલેટર, કમ્પાઉન્ડ વ્યાજ કેલ્ક્યુલેટર, મ્યુચ્યુઅલ ફંડ કેલ્ક્યુલેટર, SIP કેલ્ક્યુલેટર, નાણાકીય આયોજન, રોકાણ વૃદ્ધિ",
  authors: [{ name: "લમ્પસમ કેલ્ક્યુલેટર" }],
  robots: "index, follow",
  openGraph: {
    title: "લમ્પસમ કેલ્ક્યુલેટર - રોકાણ વૃદ્ધિ કેલ્ક્યુલેટર",
    description: "ચોકસાઈ સાથે તમારા લમ્પસમ રોકાણ વળતરની ગણતરી કરો. નાણાકીય આયોજન માટે મફત ઓનલાઇન ટૂલ.",
    type: "website",
    url: "https://lumpsumcalculator.org/gu",
    siteName: "લમ્પસમ કેલ્ક્યુલેટર",
  },
  twitter: {
    card: "summary_large_image",
    title: "લમ્પસમ કેલ્ક્યુલેટર - રોકાણ વૃદ્ધિ કેલ્ક્યુલેટર",
    description: "ચોકસાઈ સાથે તમારા લમ્પસમ રોકાણ વળતરની ગણતરી કરો.",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
  },
  alternates: {
    canonical: "https://lumpsumcalculator.org/gu",
    languages: {
      'en': "https://lumpsumcalculator.org",
      'hi': "https://lumpsumcalculator.org/hi",
      'te': "https://lumpsumcalculator.org/te", 
      'ta': "https://lumpsumcalculator.org/ta",
      'gu': "https://lumpsumcalculator.org/gu",
    }
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function GujaratiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gu">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}