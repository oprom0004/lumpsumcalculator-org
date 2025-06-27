'use client';

import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 Page Not Found | Lumpsum Calculator</title>
        <meta name="description" content="The page you are looking for does not exist. Return to our free lumpsum investment calculator." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Go to English Calculator
          </Link>
          
          <div className="grid grid-cols-2 gap-3">
            <Link 
              href="/hi"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
            >
              हिंदी
            </Link>
            <Link 
              href="/te"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
            >
              తెలుగు
            </Link>
            <Link 
              href="/ta"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
            >
              தமிழ்
            </Link>
            <Link 
              href="/gu"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
            >
              ગુજરાતી
            </Link>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Calculate your lumpsum investment returns with our free online calculator</p>
        </div>
      </div>
      </div>
    </>
  );
}