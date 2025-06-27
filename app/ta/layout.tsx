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
  title: "லம்ப்சம் கால்குலேட்டர் - முதலீட்டு வளர்ச்சி கால்குலேட்டர் | Lumpsum Calculator",
  description: "எங்கள் துல்லியமான கூட்டு வட்டி கால்குலேட்டருடன் உங்கள் லம்ப்சம் முதலீட்டு வருமானத்தைக் கணக்கிடுங்கள். துல்லியமான மியூச்சுவல் ஃபண்ட் வளர்ச்சி முன்னோட்டங்களுடன் உங்கள் நிதி எதிர்காலத்தைத் திட்டமிடுங்கள்.",
  keywords: "லம்ப்சம் கால்குலேட்டர், முதலீட்டு கால்குலேட்டர், கூட்டு வட்டி கால்குலேட்டர், மியூச்சுவல் ஃபண்ட் கால்குலேட்டர், SIP கால்குலேட்டர், நிதி திட்டமிடல், முதலீட்டு வளர்ச்சி",
  authors: [{ name: "லம்ப்சம் கால்குலேட்டர்" }],
  robots: "index, follow",
  openGraph: {
    title: "லம்ப்சம் கால்குலேட்டர் - முதலீட்டு வளர்ச்சி கால்குலேட்டர்",
    description: "துல்லியத்துடன் உங்கள் லம்ப்சம் முதலீட்டு வருமானத்தைக் கணக்கிடுங்கள். நிதி திட்டமிடலுக்கான இலவச ஆன்லைன் கருவி.",
    type: "website",
    url: "https://lumpsumcalculator.org/ta",
    siteName: "லம்ப்சம் கால்குலேட்டர்",
  },
  twitter: {
    card: "summary_large_image",
    title: "லம்ப்சம் கால்குலேட்டர் - முதலீட்டு வளர்ச்சி கால்குலேட்டர்",
    description: "துல்லியத்துடன் உங்கள் லம்ப்சம் முதலீட்டு வருமானத்தைக் கணக்கிடுங்கள்.",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
  },
  alternates: {
    canonical: "https://lumpsumcalculator.org/ta",
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

export default function TamilLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ta">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}