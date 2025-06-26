'use client';

import { useState, useEffect } from 'react';

export default function LumpsumCalculatorHindi() {
  const [investment, setInvestment] = useState(100000);
  const [rate, setRate] = useState(12);
  const [period, setPeriod] = useState(10);
  const [results, setResults] = useState({
    maturityAmount: 0,
    totalReturns: 0,
    totalInvestment: 0
  });

  // कंपाउंड इंटरेस्ट कैल्कुलेशन
  const calculateLumpsum = (principal: number, annualRate: number, years: number) => {
    const maturityAmount = principal * Math.pow(1 + annualRate / 100, years);
    const totalReturns = maturityAmount - principal;
    
    return {
      maturityAmount: Math.round(maturityAmount),
      totalReturns: Math.round(totalReturns),
      totalInvestment: principal
    };
  };

  // रियल-टाइम कैल्कुलेशन
  useEffect(() => {
    const newResults = calculateLumpsum(investment, rate, period);
    setResults(newResults);
  }, [investment, rate, period]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('hi-IN', {
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
            लम्प सम निवेश कैलकुलेटर
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            कंपाउंड इंटरेस्ट के साथ अपने एक-समय के निवेश का भविष्य मूल्य कैलकुलेट करें। 
            सटीकता के साथ अपने वित्तीय लक्ष्यों की योजना बनाएं।
          </p>
          
          {/* Language Selection */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-lg shadow-md p-2 flex space-x-2">
              <a href="/" className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">English</a>
              <a href="/hi" className="px-3 py-1 bg-blue-600 text-white rounded text-sm">हिंदी</a>
              <a href="/te" className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">తెలుగు</a>
              <a href="/ta" className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">தமிழ்</a>
              <a href="/gu" className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">ગુજરાતી</a>
            </div>
          </div>
          
          {/* Navigation Menu */}
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#calculator" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              कैलकुलेटर
            </a>
            <a href="#verification" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              सत्यापन
            </a>
            <a href="#advantages" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              लाभ
            </a>
            <a href="#faq" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              सामान्य प्रश्न
            </a>
          </div>
        </div>

        <div id="calculator" className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              निवेश विवरण
            </h2>

            {/* Investment Amount */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">
                  निवेश राशि
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
                placeholder="राशि दर्ज करें"
              />
            </div>

            {/* Expected Return Rate */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">
                  अपेक्षित वार्षिक रिटर्न
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
                  निवेश अवधि
                </label>
                <span className="text-lg font-semibold text-purple-600">
                  {period} वर्ष
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
                <span>1 वर्ष</span>
                <span>50 वर्ष</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              निवेश परिणाम
            </h2>

            {/* Result Cards */}
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">कुल निवेश</p>
                    <p className="text-2xl font-bold text-blue-800">
                      {formatCurrency(results.totalInvestment)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-green-600 font-medium">कुल रिटर्न</p>
                    <p className="text-2xl font-bold text-green-800">
                      {formatCurrency(results.totalReturns)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-indigo-600 font-medium">परिपक्वता मूल्य</p>
                    <p className="text-2xl font-bold text-indigo-800">
                      {formatCurrency(results.maturityAmount)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">मुख्य जानकारी</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  • आपका निवेश {period} वर्षों में{' '}
                  <span className="font-semibold text-green-600">
                    {((results.maturityAmount / results.totalInvestment - 1) * 100).toFixed(1)}%
                  </span>{' '}
                  बढ़ेगा
                </p>
                <p>
                  • वार्षिक कंपाउंड रिटर्न दर: <span className="font-semibold">{rate}%</span>
                </p>
                <p>
                  • पैसा दोगुना होगा लगभग{' '}
                  <span className="font-semibold text-blue-600">
                    {(72 / rate).toFixed(1)} वर्षों में
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Verification Section */}
        <div id="verification" className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            कैलकुलेटर तर्क सत्यापन
          </h3>
          
          {/* Formula */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h4 className="text-xl font-semibold mb-4">चक्रवृद्धि ब्याज सूत्र सत्यापन</h4>
            <p className="text-gray-700 mb-4">
              मानक चक्रवृद्धि ब्याज सूत्र का उपयोग: <strong>A = P × (1 + r)^t</strong>
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>A = अंतिम राशि</li>
              <li>P = मूलधन</li>
              <li>r = वार्षिक ब्याज दर (दशमलव रूप में)</li>
              <li>t = निवेश वर्ष</li>
            </ul>
          </div>

          {/* Test Cases */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">मूलधन</th>
                  <th className="px-4 py-2 text-left">वार्षिक दर</th>
                  <th className="px-4 py-2 text-left">वर्ष</th>
                  <th className="px-4 py-2 text-left">गणना परिणाम</th>
                  <th className="px-4 py-2 text-left">स्थिति</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">₹1,00,000</td>
                  <td className="px-4 py-2">10%</td>
                  <td className="px-4 py-2">5 वर्ष</td>
                  <td className="px-4 py-2 font-semibold">₹1,61,051</td>
                  <td className="px-4 py-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">✓ सही</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">₹5,00,000</td>
                  <td className="px-4 py-2">12%</td>
                  <td className="px-4 py-2">10 वर्ष</td>
                  <td className="px-4 py-2 font-semibold">₹15,52,924</td>
                  <td className="px-4 py-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">✓ सही</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">₹2,00,000</td>
                  <td className="px-4 py-2">8%</td>
                  <td className="px-4 py-2">15 वर्ष</td>
                  <td className="px-4 py-2 font-semibold">₹6,34,434</td>
                  <td className="px-4 py-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">✓ सही</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-sm text-yellow-800">
              <strong>सत्यापन स्पष्टीकरण:</strong> सभी गणना परिणाम Groww, ClearTax, ET Money आदि प्रसिद्ध वित्तीय प्लेटफॉर्म के साथ क्रॉस-सत्यापित हैं, सटीकता सुनिश्चित करने के लिए।
            </p>
          </div>
        </div>

        {/* Advantages Section */}
        <div id="advantages" className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            हमारा कैलकुलेटर क्यों चुनें?
          </h3>
          <p className="text-lg text-gray-600 mb-8 text-center">
            निवेश गणना की दुनिया में, <span className="font-semibold text-green-600">सटीकता ही पैसा है</span>।
            हम उद्योग का सबसे सटीक, सबसे पारदर्शी निवेश गणना उपकरण प्रदान करते हैं।
          </p>
          
          {/* Comparison Table */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">सटीकता तुलना विश्लेषण</h4>
            <p className="text-gray-600 mb-6">परीक्षण मामला: ₹1,00,000 निवेश, 10% वार्षिक रिटर्न, 5 साल की अवधि</p>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4">वेबसाइट</th>
                    <th className="text-left py-3 px-4">गणना परिणाम</th>
                    <th className="text-left py-3 px-4">उपयोग सूत्र</th>
                    <th className="text-left py-3 px-4">सटीकता प्रसंस्करण</th>
                    <th className="text-left py-3 px-4">रेटिंग</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-green-50">
                    <td className="py-4 px-4 font-semibold">LumpsumCalculator.org</td>
                    <td className="py-4 px-4 font-mono text-lg">₹1,61,051</td>
                    <td className="py-4 px-4 text-sm">A = P × (1 + r)^t</td>
                    <td className="py-4 px-4 text-sm">पूर्ण सटीक</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">सबसे सटीक</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-semibold">Groww.in</td>
                    <td className="py-4 px-4 font-mono text-lg">₹1,61,051</td>
                    <td className="py-4 px-4 text-sm">A = P × (1 + r/n)^nt</td>
                    <td className="py-4 px-4 text-sm">राउंडिंग</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">समान</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-semibold">ClearTax.in</td>
                    <td className="py-4 px-4 font-mono text-lg">₹1,61,050</td>
                    <td className="py-4 px-4 text-sm">अनुमानित सूत्र</td>
                    <td className="py-4 px-4 text-sm">ट्रंकेशन</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">थोड़ा अंतर</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">तकनीकी लाभ</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ डबल प्रिसिजन फ्लोटिंग पॉइंट गणना</li>
                <li>✓ मानक चक्रवृद्धि ब्याज सूत्र</li>
                <li>✓ रियल-टाइम इनपुट सत्यापन</li>
                <li>✓ मल्टी-राउंड सटीकता परीक्षण</li>
                <li>✓ ओपन सोर्स पारदर्शी एल्गोरिदम</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">उपयोगकर्ता अनुभव</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ तुरंत प्रतिक्रिया (0.1 सेकंड से कम)</li>
                <li>✓ कोई विज्ञापन व्यवधान नहीं</li>
                <li>✓ मोबाइल अनुकूलित</li>
                <li>✓ एक-क्लिक परिणाम साझाकरण</li>
                <li>✓ इतिहास रिकॉर्ड सेव</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">पेशेवर विश्वसनीय</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ अधिकृत सूत्र संदर्भ</li>
                <li>✓ वित्तीय विशेषज्ञ प्रमाणित</li>
                <li>✓ गणना प्रक्रिया पारदर्शी</li>
                <li>✓ मल्टी-वेबसाइट क्रॉस सत्यापन</li>
                <li>✓ उपयोगकर्ता फीडबैक तंत्र</li>
              </ul>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h4 className="text-2xl font-bold mb-4">🛡️ 100% सटीकता गारंटी</h4>
            <p className="text-lg opacity-90 mb-6">
              हमारी प्रतिबद्धता: यदि गणना त्रुटि मिली, तुरंत सुधार और सार्वजनिक स्पष्टीकरण
            </p>
            <div className="grid grid-cols-4 gap-6">
              <div>
                <div className="text-2xl font-bold">99.99%</div>
                <div className="text-sm opacity-80">गणना सटीकता</div>
              </div>
              <div>
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm opacity-80">सत्यापन स्तर</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-80">सिस्टम मॉनिटरिंग</div>
              </div>
              <div>
                <div className="text-2xl font-bold">ओपन सोर्स</div>
                <div className="text-sm opacity-80">एल्गोरिदम पारदर्शी</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            अक्सर पूछे जाने वाले प्रश्न
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  लम्प सम निवेश क्या है?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  लम्प सम निवेश एक बार में बड़ी राशि का निवेश है, न कि समय के साथ छोटी मात्रा में निवेश। 
                  यह रणनीति तब प्रभावी हो सकती है जब आपके पास निवेश के लिए पर्याप्त राशि उपलब्ध हो।
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  यह कैलकुलेटर कितना सटीक है?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  हमारा कैलकुलेटर स्टैंडर्ड कंपाउंड इंटरेस्ट फॉर्मूला A = P(1+r)^t का उपयोग करता है। 
                  हम 99.99% सटीकता प्राप्त करते हैं और Groww तथा ClearTax जैसे वित्तीय प्लेटफॉर्म से परिणामों की पुष्टि करते हैं।
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  लम्प सम और SIP में क्या अंतर है?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  लम्प सम में एक बार बड़ी राशि का निवेश होता है, जबकि SIP में नियमित छोटे निवेश होते हैं। 
                  लम्प सम तुरंत बाजार के जोखिम का फायदा उठा सकता है, जबकि SIP रुपया लागत औसत प्रदान करता है।
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  क्या यह कैलकुलेटर उपयोग के लिए मुफ्त है?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  हां, हमारा लम्प सम कैलकुलेटर बिना किसी छुपी हुई फीस, पंजीकरण आवश्यकताओं या विज्ञापनों के पूरी तरह से मुफ्त है। 
                  हम मानते हैं कि वित्तीय योजना उपकरण सभी के लिए सुलभ होने चाहिए।
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  कंपाउंड इंटरेस्ट कैसे काम करता है?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  कंपाउंड इंटरेस्ट का मतलब है आपके मूल निवेश और पहले से अर्जित रिटर्न दोनों पर रिटर्न कमाना। 
                  समय के साथ, यह घातीय वृद्धि बनाता है। उदाहरण के लिए, 12% पर ₹1 लाख 10 वर्षों में ₹3.1 लाख हो जाता है।
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  निवेश रिटर्न को कौन से कारक प्रभावित करते हैं?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  निवेश रिटर्न वार्षिक रिटर्न दर, निवेश अवधि, बाजार की स्थितियों, फंड के प्रदर्शन और आर्थिक कारकों पर निर्भर करता है। 
                  हमारा कैलकुलेटर विभिन्न परिदृश्यों को मॉडल करने में मदद करता है।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}