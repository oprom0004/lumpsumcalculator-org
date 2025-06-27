'use client';

import { useState, useEffect } from 'react';

export default function LumpsumCalculatorHindi() {
  const [investment, setInvestment] = useState<number | string>(100000);
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
    if (investment && typeof investment === 'number') {
      const newResults = calculateLumpsum(investment, rate, period);
      setResults(newResults);
    }
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
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            मुफ्त ऑनलाइन कंपाउंड इंटरेस्ट कैलकुलेटर
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            अपने एक-समय के निवेश का भविष्य मूल्य कैलकुलेट करें। कंपाउंड इंटरेस्ट के साथ अपने निवेश की वृद्धि देखें।
          </p>
        </div>

        {/* Quick Access to Advanced Features */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🚀 और भी बेहतर फीचर्स उपलब्ध हैं!</h3>
            <p className="text-gray-600 text-sm">नीचे दिए गए फीचर्स को ट्राई करने के लिए क्लिक करें (बिल्कुल मुफ्त)</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="/#calculator"
              className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <span className="text-green-600 text-lg">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Goal Amount मोड</h4>
                  <p className="text-sm text-gray-600">"मुझे अपना लक्ष्य पता है" - कितना निवेश करना चाहिए?</p>
                </div>
              </div>
            </a>
            
            <a 
              href="/#calculator"
              className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <span className="text-orange-600 text-lg">📈</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Inflation एडजस्टमेंट</h4>
                  <p className="text-sm text-gray-600">रियल purchasing power के साथ सटीक गणना</p>
                </div>
              </div>
            </a>
            
            <a 
              href="/#verification"
              className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <span className="text-purple-600 text-lg">✅</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Accuracy वेरिफिकेशन</h4>
                  <p className="text-sm text-gray-600">Groww, ClearTax के साथ तुलना देखें</p>
                </div>
              </div>
            </a>
            
            <a 
              href="/#faq"
              className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <span className="text-blue-600 text-lg">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">डिटेल्ड गाइड</h4>
                  <p className="text-sm text-gray-600">विस्तृत FAQ और financial insights</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
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
                  {investment ? formatCurrency(typeof investment === 'string' ? parseFloat(investment) : investment) : 'राशि दर्ज करें'}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="10000000"
                step="500"
                value={investment || 100000}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹500</span>
                <span>₹1Cr</span>
              </div>
              <input
                type="number"
                value={investment || ''}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === '') {
                    setInvestment('');
                  } else {
                    const numValue = Number(value);
                    if (numValue >= 500 && numValue <= 10000000) {
                      setInvestment(numValue);
                    } else if (numValue > 10000000) {
                      setInvestment(10000000);
                    } else if (numValue > 0) {
                      setInvestment(numValue);
                    }
                  }
                }}
                className={`mt-3 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-transparent text-center font-medium ${
                  investment === '' ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
                placeholder="राशि दर्ज करें (न्यूनतम ₹500)"
                min="500"
                max="10000000"
                step="500"
              />
              {investment === '' && (
                <p className="text-red-500 text-sm mt-1 text-center">निवेश राशि आवश्यक है</p>
              )}
              {investment !== '' && typeof investment === 'number' && investment < 500 && (
                <p className="text-orange-500 text-sm mt-1 text-center">न्यूनतम निवेश: ₹500</p>
              )}
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
                className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1%</span>
                <span>30%</span>
              </div>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-center font-medium"
                placeholder="रेट दर्ज करें (1% - 30%)"
                min="1"
                max="30"
                step="0.5"
              />
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
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 वर्ष</span>
                <span>50 वर्ष</span>
              </div>
              <input
                type="number"
                value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-center font-medium"
                placeholder="वर्ष दर्ज करें (1 - 50)"
                min="1"
                max="50"
                step="1"
              />
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
                <div>
                  <p className="text-sm text-blue-600 font-medium">कुल निवेश</p>
                  <p className="text-2xl font-bold text-blue-800">
                    {investment ? formatCurrency(typeof investment === 'string' ? parseFloat(investment) : investment) : '₹0'}
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <div>
                  <p className="text-sm text-green-600 font-medium">कुल रिटर्न</p>
                  <p className="text-2xl font-bold text-green-800">
                    {formatCurrency(results.totalReturns)}
                  </p>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-500">
                <div>
                  <p className="text-sm text-indigo-600 font-medium">मैच्योरिटी वैल्यू</p>
                  <p className="text-2xl font-bold text-indigo-800">
                    {formatCurrency(results.maturityAmount)}
                  </p>
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
                    {investment ? ((results.maturityAmount / (typeof investment === 'string' ? parseFloat(investment) : investment) - 1) * 100).toFixed(1) : '0'}%
                  </span>{' '}
                  बढ़ेगा
                </p>
                <p>
                  • वार्षिक कंपाउंड रिटर्न रेट: <span className="font-semibold">{rate}%</span>
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

        {/* Detailed Features Overview */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-500">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">🌟 मुफ्त में मिलने वाले सभी फीचर्स</h3>
            <p className="text-gray-600">अंग्रेजी वर्जन में ये सब मुफ्त में उपलब्ध हैं - किसी भी तरह का चार्ज नहीं!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <a href="/#calculator" className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 font-bold">🎯</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">दो कैलकुलेशन मोड</h4>
                <p className="text-sm text-gray-600">"मुझे अपनी निवेश राशि पता है" या "मुझे अपना लक्ष्य पता है"</p>
                <span className="text-xs text-blue-500 font-medium">क्लिक करके ट्राई करें →</span>
              </div>
            </a>
            
            <a href="/#calculator" className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <span className="text-green-600 font-bold">📈</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">इन्फ्लेशन एडजस्टमेंट</h4>
                <p className="text-sm text-gray-600">महंगाई दर के साथ रियल purchasing power की गणना</p>
                <span className="text-xs text-blue-500 font-medium">क्लिक करके ट्राई करें →</span>
              </div>
            </a>
            
            <a href="/#verification" className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <span className="text-purple-600 font-bold">📊</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Accuracy वेरिफिकेशन</h4>
                <p className="text-sm text-gray-600">Groww, ClearTax के साथ accuracy comparison</p>
                <span className="text-xs text-blue-500 font-medium">क्लिक करके देखें →</span>
              </div>
            </a>
            
            <a href="/#faq" className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                <span className="text-orange-600 font-bold">🔍</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">कंप्लीट गाइड</h4>
                <p className="text-sm text-gray-600">विस्तृत FAQ और financial insights</p>
                <span className="text-xs text-blue-500 font-medium">क्लिक करके पढ़ें →</span>
              </div>
            </a>
          </div>
          
          <div className="text-center bg-green-50 rounded-xl p-4">
            <p className="text-green-800 font-medium mb-3">✅ सभी फीचर्स 100% मुफ्त - कोई छुपा हुआ चार्ज नहीं!</p>
            <a 
              href="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-colors shadow-lg"
            >
              पूरा कैलकुलेटर इस्तेमाल करें →
            </a>
          </div>
        </div>

        {/* Basic FAQ */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
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
                  लम्प सम निवेश का मतलब है एक ही बार में बड़ी रकम निवेश करना, बजाय समय के साथ छोटी-छोटी रकम निवेश करने के। 
                  जब आपके पास निवेश के लिए बड़ी रकम उपलब्ध हो तो यह रणनीति प्रभावी हो सकती है।
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  यह कैलकुलेटर कितना सटीक है?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  हमारा कैलकुलेटर मानक चक्रवृद्धि ब्याज फॉर्मूला A = P(1+r)^t का उपयोग करता है। 
                  हम 99.99% सटीकता प्राप्त करते हैं और Groww तथा ClearTax जैसे वित्तीय प्लेटफॉर्म के साथ परिणामों का सत्यापन करते हैं।
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  क्या यह कैलकुलेटर उपयोग के लिए मुफ्त है?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  हां, हमारा लम्प सम कैलकुलेटर बिना किसी छुपी फीस, रजिस्ट्रेशन आवश्यकताओं या विज्ञापनों के पूरी तरह मुफ्त है। 
                  हमारा मानना है कि वित्तीय योजना उपकरण सभी के लिए सुलभ होने चाहिए।
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  चक्रवृद्धि ब्याज कैसे काम करता है?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  चक्रवृद्धि ब्याज का मतलब है आपके शुरुआती निवेश और पहले से कमाए गए रिटर्न दोनों पर रिटर्न कमाना। 
                  समय के साथ, यह exponential वृद्धि बनाता है। 
                  उदाहरण के लिए, 12% पर ₹1 लाख 10 साल में ₹3.1 लाख हो जाता है।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Language switcher */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 mb-4">अन्य भाषाओं में भी उपलब्ध:</p>
          <div className="flex justify-center space-x-3 flex-wrap">
            <a href="/te" className="text-sm text-blue-600 hover:text-blue-800 px-3 py-1 rounded">తెలుగు</a>
            <a href="/ta" className="text-sm text-blue-600 hover:text-blue-800 px-3 py-1 rounded">தமிழ்</a>
            <a href="/gu" className="text-sm text-blue-600 hover:text-blue-800 px-3 py-1 rounded">ગુજરાતી</a>
            <a href="/" className="text-sm text-blue-600 hover:text-blue-800 px-3 py-1 rounded">English</a>
          </div>
        </div>
      </div>
    </div>
  );
}