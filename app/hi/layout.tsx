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
  title: "लम्प सम कैलकुलेटर - निवेश वृद्धि कैलकुलेटर | Lumpsum Calculator",
  description: "हमारे सटीक चक्रवृद्धि ब्याज कैलकुलेटर के साथ अपने लम्प सम निवेश रिटर्न की गणना करें। सटीक म्यूचुअल फंड वृद्धि अनुमानों के साथ अपने वित्तीय भविष्य की योजना बनाएं।",
  keywords: "लम्प सम कैलकुलेटर, निवेश कैलकुलेटर, चक्रवृद्धि ब्याज कैलकुलेटर, म्यूचुअल फंड कैलकुलेटर, SIP कैलकुलेटर, वित्तीय योजना, निवेश वृद्धि",
  authors: [{ name: "लम्प सम कैलकुलेटर" }],
  robots: "index, follow",
  openGraph: {
    title: "लम्प सम कैलकुलेटर - निवेश वृद्धि कैलकुलेटर",
    description: "सटीकता के साथ अपने लम्प सम निवेश रिटर्न की गणना करें। वित्तीय योजना के लिए मुफ्त ऑनलाइन टूल।",
    type: "website",
    url: "https://lumpsumcalculator.org/hi",
    siteName: "लम्प सम कैलकुलेटर",
  },
  twitter: {
    card: "summary_large_image",
    title: "लम्प सम कैलकुलेटर - निवेश वृद्धि कैलकुलेटर",
    description: "सटीकता के साथ अपने लम्प सम निवेश रिटर्न की गणना करें।",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
  },
  alternates: {
    canonical: "https://lumpsumcalculator.org/hi",
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

export default function HindiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}