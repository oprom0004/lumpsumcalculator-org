import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { FloatingLanguageSwitcher } from "./components/LanguageSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumpsum Calculator: Investment Growth Calculator with Inflation Adjustment | Free Online Tool",
  description: "Advanced lumpsum calculator with inflation adjustment and goal-based planning. Calculate returns or required investment amount. Includes compound interest with real purchasing power analysis.",
  keywords: "lumpsum calculator, investment calculator with inflation, compound interest calculator, goal based investment calculator, mutual fund calculator, financial planning, investment growth, inflation adjusted returns",
  authors: [{ name: "Lumpsum Calculator" }],
  robots: "index, follow",
  openGraph: {
    title: "Lumpsum Calculator: Investment Growth Calculator",
    description: "Advanced calculator with goal-based planning and inflation adjustment. Calculate returns or required investment amount.",
    type: "website",
    url: "https://lumpsumcalculator.org",
    siteName: "Lumpsum Calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumpsum Calculator: Investment Growth Calculator",
    description: "Advanced calculator with goal-based planning and inflation adjustment.",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
  },
  alternates: {
    canonical: "https://lumpsumcalculator.org",
    languages: {
      'en': "https://lumpsumcalculator.org",
      'hi': "https://lumpsumcalculator.org/hi",
      'te': "https://lumpsumcalculator.org/te", 
      'ta': "https://lumpsumcalculator.org/ta",
      'gu': "https://lumpsumcalculator.org/gu",
    }
  },
  other: {
    'google-site-verification': 'pending',
    'msvalidate.01': 'pending',
    'yandex-verification': 'pending',
    'baidu-site-verification': 'pending',
  },
  verification: {
    google: 'pending',
    bing: 'pending',
    yandex: 'pending',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Plausible Analytics */}
        <Script
          defer
          data-domain="lumpsumcalculator.org"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
        <Script
          id="plausible-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`
          }}
        />
        {/* Global Navigation */}
        <nav className="bg-blue-600 text-white p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">
              <a href="https://lumpsumcalculator.org" className="hover:text-blue-200 transition-colors">
                Lumpsum Calculator
              </a>
            </h1>
            <div className="space-x-4">
              <a href="/" className="hover:underline">Home</a>
              <a href="/#calculator" className="hover:underline">Calculator</a>
              <a href="/#faq" className="hover:underline">FAQ</a>
            </div>
          </div>
        </nav>
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Lumpsum Calculator",
              "description": "Free online lumpsum investment calculator with compound interest calculations for financial planning",
              "url": "https://lumpsumcalculator.org",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "creator": {
                "@type": "Organization",
                "name": "Lumpsum Calculator"
              },
              "inLanguage": ["en", "hi", "te", "ta", "gu"],
              "featureList": [
                "Compound Interest Calculation",
                "Investment Growth Projection",
                "Multi-language Support",
                "Real-time Calculations",
                "Financial Planning Tool"
              ]
            })
          }}
        />
        
        {/* Floating Language Switcher */}
        <FloatingLanguageSwitcher />
        
        {/* Page Content */}
        <main>
          {children}
        </main>
        
        {/* Global Footer */}
        <footer className="bg-gray-800 text-white p-6 text-center">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Lumpsum Calculator</h3>
                <p className="text-gray-300 text-sm">
                  The most accurate and reliable investment calculator for your financial planning.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li><a href="/#calculator" className="hover:text-white">Calculator</a></li>
                  <li><a href="/#verification" className="hover:text-white">Verification</a></li>
                  <li><a href="/#advantages" className="hover:text-white">Why Choose Us</a></li>
                  <li><a href="/#faq" className="hover:text-white">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <p className="text-sm text-gray-300">
                &copy; 2025 LumpsumCalculator.org - Free Investment Calculator Tool. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
