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
        <main>
          {children}
        </main>
        
        {/* Gujarati Footer */}
        <footer className="bg-gray-800 text-white p-6 text-center">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">લમ્પસમ કેલ્ક્યુલેટર</h3>
                <p className="text-gray-300 text-sm">
                  તમારા નાણાકીય આયોજન માટે સૌથી ચોક્કસ અને વિશ્વસનીય રોકાણ કેલ્ક્યુલેટર.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">ઝડપી લિંક્સ</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li><a href="/gu#calculator" className="hover:text-white">કેલ્ક્યુલેટર</a></li>
                  <li><a href="/gu#verification" className="hover:text-white">ચકાસણી</a></li>
                  <li><a href="/gu#advantages" className="hover:text-white">અમને શા માટે પસંદ કરો</a></li>
                  <li><a href="/gu#faq" className="hover:text-white">વારંવાર પૂછાતા પ્રશ્નો</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">ટૂલ્સ</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li><a href="/gu#calculator" className="hover:text-white">લમ્પસમ કેલ્ક્યુલેટર</a></li>
                  <li><a href="/gu#calculator" className="hover:text-white">રોકાણ આયોજક</a></li>
                  <li><a href="/gu#calculator" className="hover:text-white">કમ્પાઉન્ડ વ્યાજ</a></li>
                  <li><a href="/gu#calculator" className="hover:text-white">નાણાકીય વૃદ્ધિ</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <p className="text-sm text-gray-300">
                &copy; 2025 LumpsumCalculator.org - મફત રોકાણ કેલ્ક્યુલેટર ટૂલ. બધા અધિકારો આરક્ષિત.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}