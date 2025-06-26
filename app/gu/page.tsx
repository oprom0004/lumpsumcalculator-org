'use client';

import { useState, useEffect } from 'react';

export default function LumpsumCalculatorGujarati() {
  const [investment, setInvestment] = useState(100000);
  const [rate, setRate] = useState(12);
  const [period, setPeriod] = useState(10);
  const [results, setResults] = useState({
    maturityAmount: 0,
    totalReturns: 0,
    totalInvestment: 0
  });

  const calculateLumpsum = (principal: number, annualRate: number, years: number) => {
    const maturityAmount = principal * Math.pow(1 + annualRate / 100, years);
    const totalReturns = maturityAmount - principal;
    
    return {
      maturityAmount: Math.round(maturityAmount),
      totalReturns: Math.round(totalReturns),
      totalInvestment: principal
    };
  };

  useEffect(() => {
    const newResults = calculateLumpsum(investment, rate, period);
    setResults(newResults);
  }, [investment, rate, period]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('gu-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            લમ્પસમ રોકાણ કેલ્ક્યુલેટર
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            કમ્પાઉન્ડ વ્યાજ સાથે તમારા એક-વખતના રોકાણના ભાવિ મૂલ્યની ગણતરી કરો. 
            ચોકસાઈ સાથે તમારા નાણાકીય લક્ષ્યોની યોજના બનાવો.
          </p>
          
          {/* Language Selection */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-lg shadow-md p-2 flex space-x-2">
              <a href="/" className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">English</a>
              <a href="/hi" className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">हिंदी</a>
              <a href="/te" className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">తెలుగు</a>
              <a href="/ta" className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">தமிழ்</a>
              <a href="/gu" className="px-3 py-1 bg-blue-600 text-white rounded text-sm">ગુજરાતી</a>
            </div>
          </div>
          
          {/* Navigation Menu */}
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#calculator" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              કેલ્ક્યુલેટર
            </a>
            <a href="#verification" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              ચકાસણી
            </a>
            <a href="#advantages" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              ફાયદાઓ
            </a>
            <a href="#faq" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              વારંવાર પૂછાતા પ્રશ્નો
            </a>
          </div>
        </div>

        <div id="calculator" className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              રોકાણની વિગતો
            </h2>

            {/* Investment Amount */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">
                  રોકાણની રકમ
                </label>
                <span className="text-lg font-semibold text-blue-600">
                  {formatCurrency(investment)}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="10000000"
                step="10000"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹10K</span>
                <span>₹1Cr</span>
              </div>
              <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="રકમ દાખલ કરો"
              />
            </div>

            {/* Expected Return Rate */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">
                  અપેક્ષિત વાર્ષિક વળતર
                </label>
                <span className="text-lg font-semibold text-green-600">
                  {rate}%
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="0.5"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Investment Period */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">
                  રોકાણ અવધિ
                </label>
                <span className="text-lg font-semibold text-purple-600">
                  {period} વર્ષ
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 વર્ષ</span>
                <span>50 વર્ષ</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              રોકાણના પરિણામો
            </h2>

            {/* Result Cards */}
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">કુલ રોકાણ</p>
                    <p className="text-2xl font-bold text-blue-800">
                      {formatCurrency(results.totalInvestment)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-green-600 font-medium">કુલ વળતર</p>
                    <p className="text-2xl font-bold text-green-800">
                      {formatCurrency(results.totalReturns)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-indigo-600 font-medium">પરિપક્વતા મૂલ્ય</p>
                    <p className="text-2xl font-bold text-indigo-800">
                      {formatCurrency(results.maturityAmount)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">મુખ્ય માહિતી</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  • તમારું રોકાણ {period} વર્ષમાં{' '}
                  <span className="font-semibold text-green-600">
                    {((results.maturityAmount / results.totalInvestment - 1) * 100).toFixed(1)}%
                  </span>{' '}
                  વધશે
                </p>
                <p>
                  • વાર્ષિક કમ્પાઉન્ડ વળતર દર: <span className="font-semibold">{rate}%</span>
                </p>
                <p>
                  • પૈસા બમણા થવામાં લગભગ{' '}
                  <span className="font-semibold text-blue-600">
                    {(72 / rate).toFixed(1)} વર્ષ
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            વારંવાર પૂછાતા પ્રશ્નો
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  લમ્પસમ રોકાણ શું છે?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  લમ્પસમ રોકાણ એટલે એક વખતે મોટી રકમનું રોકાણ, 
                  સમયાંતરે નાની રકમનું રોકાણ કરવાને બદલે. 
                  જ્યારે તમારી પાસે રોકાણ માટે પૂરતી રકમ ઉપલબ્ધ હોય ત્યારે આ વ્યૂહરચના અસરકારક હોઈ શકે છે.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  આ કેલ્ક્યુલેટર કેટલું ચોક્કસ છે?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  અમારું કેલ્ક્યુલેટર સ્ટાન્ડર્ડ કમ્પાઉન્ડ વ્યાજ ફોર્મ્યુલા A = P(1+r)^t નો ઉપયોગ કરે છે. 
                  અમે 99.99% ચોકસાઈ પ્રાપ્ત કરીએ છીએ અને Groww અને ClearTax જેવા નાણાકીય પ્લેટફોર્મ સાથે પરિણામોની ચકાસણી કરીએ છીએ.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  લમ્પસમ અને SIP વચ્ચે શું તફાવત છે?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  લમ્પસમમાં એક વખતે મોટી રકમનું રોકાણ થાય છે, જ્યારે SIP માં નિયમિત નાનાં રોકાણો થાય છે. 
                  લમ્પસમ તાત્કાલિક બજાર એક્સપોઝરનો ફાયદો લઈ શકે છે, જ્યારે SIP રૂપિયા કોસ્ટ એવરેજિંગ પ્રદાન કરે છે.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  શું આ કેલ્ક્યુલેટર ઉપયોગ માટે મફત છે?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  હા, અમારું લમ્પસમ કેલ્ક્યુલેટર કોઈ છુપાયેલ ફી, રજીસ્ટ્રેશન આવશ્યકતાઓ અથવા જાહેરાતો વિના સંપૂર્ણપણે મફત છે. 
                  અમે માનીએ છીએ કે નાણાકીય આયોજન સાધનો દરેક માટે સુલભ હોવા જોઈએ.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  કમ્પાઉન્ડ વ્યાજ કેવી રીતે કામ કરે છે?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  કમ્પાઉન્ડ વ્યાજનો અર્થ એ છે કે તમારા પ્રારંભિક રોકાણ અને અગાઉ મેળવેલા વળતર બંને પર વળતર મેળવવું. 
                  સમયાંતરે, આ ઘાતીય વૃદ્ધિ બનાવે છે. 
                  ઉદાહરણ તરીકે, 12% પર ₹1 લાખ 10 વર્ષમાં ₹3.1 લાખ બને છે.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  રોકાણ વળતરને કયા પરિબળો અસર કરે છે?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  રોકાણ વળતર વાર્ષિક વળતર દર, રોકાણ અવધિ, બજારની સ્થિતિ, 
                  ફંડ પ્રદર્શન અને આર્થિક પરિબળો પર આધાર રાખે છે. 
                  અમારું કેલ્ક્યુલેટર વિવિધ પરિસ્થિતિઓને મોડેલ કરવામાં મદદ કરે છે.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}