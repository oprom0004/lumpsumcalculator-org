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
  title: "లంప్ సమ్ కాలిక్యులేటర్ - ఇన్వెస్ట్‌మెంట్ గ్రోత్ కాలిక్యులేటర్ | ఉచిత ఆన్‌లైన్ టూల్",
  description: "మా ఖచ్చితమైన కాంపౌండ్ ఇంటరెస్ట్ కాలిక్యులేటర్‌తో మీ లంప్ సమ్ ఇన్వెస్ట్‌మెంట్ రిటర్న్‌లను లెక్కించండి। ఖచ్చితమైన మ్యూచ్యువల్ ఫండ్ గ్రోత్ ప్రొజెక్షన్‌లతో మీ ఆర్థిక భవిష్యత్తును ప్లాన్ చేయండి।",
  keywords: "లంప్ సమ్ కాలిక్యులేటర్, ఇన్వెస్ట్‌మెంట్ కాలిక్యులేటర్, కాంపౌండ్ ఇంటరెస్ట్ కాలిక్యులేటర్, మ్యూచ్యువల్ ఫండ్ కాలిక్యులేటర్, SIP కాలిక్యులేటర్, ఆర్థిక ప్లానింగ్, ఇన్వెస్ట్‌మెంట్ గ్రోత్",
  authors: [{ name: "లంప్ సమ్ కాలిక్యులేటర్" }],
  robots: "index, follow",
  openGraph: {
    title: "లంప్ సమ్ కాలిక్యులేటర్ - ఇన్వెస్ట్‌మెంట్ గ్రోత్ కాలిక్యులేటర్",
    description: "ఖచ్చితత్వంతో మీ లంప్ సమ్ ఇన్వెస్ట్‌మెంట్ రిటర్న్‌లను లెక్కించండి। ఆర్థిక ప్లానింగ్ కోసం ఉచిత ఆన్‌లైన్ టూల్।",
    type: "website",
    url: "https://lumpsumcalculator.org/te",
    siteName: "లంప్ సమ్ కాలిక్యులేటర్",
  },
  twitter: {
    card: "summary_large_image",
    title: "లంప్ సమ్ కాలిక్యులేటర్ - ఇన్వెస్ట్‌మెంట్ గ్రోత్ కాలిక్యులేటర్",
    description: "ఖచ్చితత్వంతో మీ లంప్ సమ్ ఇన్వెస్ట్‌మెంట్ రిటర్న్‌లను లెక్కించండి।",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
  },
  alternates: {
    canonical: "https://lumpsumcalculator.org/te",
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

export default function TeluguLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="te">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {/* Page Content */}
        <main>
          {children}
        </main>
        
        {/* Telugu Footer */}
        <footer className="bg-gray-800 text-white p-6 text-center">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">లంప్ సమ్ కాలిక్యులేటర్</h3>
                <p className="text-gray-300 text-sm">
                  మీ ఆర్థిక ప్లానింగ్ కోసం అత్యంత ఖచ్చితమైన మరియు విశ్వసనీయమైన ఇన్వెస్ట్‌మెంట్ కాలిక్యులేటర్।
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">త్వరిత లింక్‌లు</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li><a href="/te#calculator" className="hover:text-white">కాలిక్యులేటర్</a></li>
                  <li><a href="/te#verification" className="hover:text-white">ధృవీకరణ</a></li>
                  <li><a href="/te#advantages" className="hover:text-white">మాను ఎందుకు ఎంచుకోవాలి</a></li>
                  <li><a href="/te#faq" className="hover:text-white">తరచుగా అడిగే ప్రశ్నలు</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">టూల్స్</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li><a href="/te#calculator" className="hover:text-white">లంప్ సమ్ కాలిక్యులేటర్</a></li>
                  <li><a href="/te#calculator" className="hover:text-white">ఇన్వెస్ట్‌మెంట్ ప్లానర్</a></li>
                  <li><a href="/te#calculator" className="hover:text-white">కాంపౌండ్ ఇంటరెస్ట్</a></li>
                  <li><a href="/te#calculator" className="hover:text-white">ఆర్థిక వృద్ధి</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <p className="text-sm text-gray-300">
                &copy; 2025 LumpsumCalculator.org - ఉచిత ఇన్వెస్ట్‌మెంట్ కాలిక్యులేటర్ టూల్. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి।
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}