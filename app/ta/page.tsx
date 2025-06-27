'use client';

import { useState, useEffect } from 'react';

export default function LumpsumCalculatorTamil() {
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
    return new Intl.NumberFormat('ta-IN', {
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
            லம்ப்சம் முதலீட்டு கால்குலேட்டர்
          </h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            இலவச ஆன்லைன் கூட்டு வட்டி கால்குலேட்டர்
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            உங்கள் ஒருமுறை முதலீட்டின் எதிர்கால மதிப்பைக் கணக்கிடுங்கள். கூட்டு வட்டியுடன் உங்கள் முதலீட்டு வளர்ச்சியைப் பாருங்கள்.
          </p>
        </div>

        {/* Quick Access to Advanced Features */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🚀 மேலும் சிறந்த அம்சங்கள் கிடைக்கின்றன!</h3>
            <p className="text-gray-600 text-sm">கீழே உள்ள அம்சங்களை முயற்சிக்க கிளிக் செய்யுங்கள் (முற்றிலும் இலவசம்)</p>
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
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">இலக்கு தொகை முறை</h4>
                  <p className="text-sm text-gray-600">"எனக்கு என் இலக்கு தெரியும்" - எவ்வளவு முதலீடு செய்ய வேண்டும்?</p>
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
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">பணவீக்க சரிசெய்தல்</h4>
                  <p className="text-sm text-gray-600">உண்மையான வாங்கும் சக்தியுடன் துல்லியமான கணக்கீடு</p>
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
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">துல்லியத்தை சரிபார்த்தல்</h4>
                  <p className="text-sm text-gray-600">Groww, ClearTax உடன் ஒப்பீடு பார்க்கவும்</p>
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
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">விரிவான வழிகாட்டி</h4>
                  <p className="text-sm text-gray-600">விரிவான FAQ மற்றும் நிதி நுண்ணறிவுகள்</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              முதலீட்டு விவரங்கள்
            </h2>

            {/* Investment Amount */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">
                  முதலீட்டு தொகை
                </label>
                <span className="text-lg font-semibold text-blue-600">
                  {investment ? formatCurrency(typeof investment === 'string' ? parseFloat(investment) : investment) : 'தொகையை உள்ளிடுங்கள்'}
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
                <span>₹1கோடி</span>
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
                placeholder="தொகையை உள்ளிடுங்கள் (குறைந்தபட்சம் ₹500)"
                min="500"
                max="10000000"
                step="500"
              />
              {investment === '' && (
                <p className="text-red-500 text-sm mt-1 text-center">முதலீட்டு தொகை தேவை</p>
              )}
              {investment !== '' && typeof investment === 'number' && investment < 500 && (
                <p className="text-orange-500 text-sm mt-1 text-center">குறைந்தபட்ச முதலீடு: ₹500</p>
              )}
            </div>

            {/* Expected Return Rate */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">
                  எதிர்பார்க்கப்படும் வருடாந்திர வருமானம்
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
                placeholder="விகிதத்தை உள்ளிடுங்கள் (1% - 30%)"
                min="1"
                max="30"
                step="0.5"
              />
            </div>

            {/* Investment Period */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">
                  முதலீட்டு காலம்
                </label>
                <span className="text-lg font-semibold text-purple-600">
                  {period} ஆண்டுகள்
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
                <span>1 ஆண்டு</span>
                <span>50 ஆண்டுகள்</span>
              </div>
              <input
                type="number"
                value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-center font-medium"
                placeholder="ஆண்டுகளை உள்ளிடுங்கள் (1 - 50)"
                min="1"
                max="50"
                step="1"
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              முதலீட்டு முடிவுகள்
            </h2>

            {/* Result Cards */}
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <div>
                  <p className="text-sm text-blue-600 font-medium">மொத்த முதலீடு</p>
                  <p className="text-2xl font-bold text-blue-800">
                    {investment ? formatCurrency(typeof investment === 'string' ? parseFloat(investment) : investment) : '₹0'}
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <div>
                  <p className="text-sm text-green-600 font-medium">மொத்த வருமானம்</p>
                  <p className="text-2xl font-bold text-green-800">
                    {formatCurrency(results.totalReturns)}
                  </p>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-500">
                <div>
                  <p className="text-sm text-indigo-600 font-medium">முதிர்வு மதிப்பு</p>
                  <p className="text-2xl font-bold text-indigo-800">
                    {formatCurrency(results.maturityAmount)}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">முக்கிய தகவல்கள்</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  • உங்கள் முதலீடு {period} ஆண்டுகளில்{' '}
                  <span className="font-semibold text-green-600">
                    {investment ? ((results.maturityAmount / (typeof investment === 'string' ? parseFloat(investment) : investment) - 1) * 100).toFixed(1) : '0'}%
                  </span>{' '}
                  வளரும்
                </p>
                <p>
                  • வருடாந்திர கூட்டு வருமான விகிதம்: <span className="font-semibold">{rate}%</span>
                </p>
                <p>
                  • பணம் இரட்டிப்பாகும் ஏறக்குறைய{' '}
                  <span className="font-semibold text-blue-600">
                    {(72 / rate).toFixed(1)} ஆண்டுகளில்
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Features Overview */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-500">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">🌟 இலவசமாக கிடைக்கும் அனைத்து அம்சங்கள்</h3>
            <p className="text-gray-600">ஆங்கில பதிப்பில் இவை அனைத்தும் இலவசமாக கிடைக்கின்றன - எந்த கட்டணமும் இல்லை!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <a href="/#calculator" className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 font-bold">🎯</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">இரண்டு கணக்கீட்டு முறைகள்</h4>
                <p className="text-sm text-gray-600">"எனக்கு என் முதலீட்டு தொகை தெரியும்" அல்லது "எனக்கு என் இலக்கு தெரியும்"</p>
                <span className="text-xs text-blue-500 font-medium">கிளிக் செய்து முயற்சிக்கவும் →</span>
              </div>
            </a>
            
            <a href="/#calculator" className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <span className="text-green-600 font-bold">📈</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">பணவீக்க சரிசெய்தல்</h4>
                <p className="text-sm text-gray-600">பணவீக்க விகிதத்துடன் உண்மையான வாங்கும் சக்தி கணக்கீடு</p>
                <span className="text-xs text-blue-500 font-medium">கிளிக் செய்து முயற்சிக்கவும் →</span>
              </div>
            </a>
            
            <a href="/#verification" className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <span className="text-purple-600 font-bold">📊</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">துல்லியத்தை சரிபார்த்தல்</h4>
                <p className="text-sm text-gray-600">Groww, ClearTax உடன் துல்லியத்தை ஒப்பிடுதல்</p>
                <span className="text-xs text-blue-500 font-medium">கிளிக் செய்து பார்க்கவும் →</span>
              </div>
            </a>
            
            <a href="/#faq" className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                <span className="text-orange-600 font-bold">🔍</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">முழுமையான வழிகாட்டி</h4>
                <p className="text-sm text-gray-600">விரிவான FAQ மற்றும் நிதி நுண்ணறிவுகள்</p>
                <span className="text-xs text-blue-500 font-medium">கிளிக் செய்து படிக்கவும் →</span>
              </div>
            </a>
          </div>
          
          <div className="text-center bg-green-50 rounded-xl p-4">
            <p className="text-green-800 font-medium mb-3">✅ அனைத்து அம்சங்களும் 100% இலவசம் - மறைக்கப்பட்ட கட்டணம் இல்லை!</p>
            <a 
              href="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-colors shadow-lg"
            >
              முழு கால்குலேட்டரைப் பயன்படுத்துங்கள் →
            </a>
          </div>
        </div>

        {/* Basic FAQ */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            அடிக்கடி கேட்கப்படும் கேள்விகள்
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  லம்ப்சம் முதலீடு என்றால் என்ன?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  லம்ப்சம் முதலீடு என்பது ஒரே நேரத்தில் பெரிய தொகையை முதலீடு செய்வது, காலப்போக்கில் சிறிய தொகைகளை முதலீடு செய்வதற்கு பதிலாக। 
                  உங்களிடம் முதலீட்டிற்கு பெரிய தொகை இருக்கும்போது இந்த உத்தி பயனுள்ளதாக இருக்கும்.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  இந்த கால்குலேட்டர் எவ்வளவு துல்லியமானது?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  எங்கள் கால்குலேட்டர் நிலையான கூட்டு வட்டி ஃபார்முலா A = P(1+r)^t ஐ பயன்படுத்துகிறது। 
                  நாங்கள் 99.99% துல்லியத்தை அடைகிறோம் மற்றும் Groww மற்றும் ClearTax போன்ற நிதி தளங்களுடன் முடிவுகளை குறுக்கு சரிபார்க்கிறோம்.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  இந்த கால்குலேட்டர் பயன்படுத்த இலவசமா?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  ஆம், எங்கள் லம்ப்சம் கால்குலேட்டர் எந்த மறைக்கப்பட்ட கட்டணங்கள், பதிவு தேவைகள் அல்லது விளம்பரங்கள் இல்லாமல் முற்றிலும் இலவசம். 
                  நிதி திட்டமிடல் கருவிகள் அனைவருக்கும் அணுகக்கூடியதாக இருக்க வேண்டும் என்று நாங்கள் நம்புகிறோம்.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  கூட்டு வட்டி எவ்வாறு செயல்படுகிறது?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  கூட்டு வட்டி என்பது உங்கள் ஆரம்ப முதலீடு மற்றும் முன்னர் சம்பாதித்த வருமானம் இரண்டின் மீதும் வருமானம் சம்பாதிப்பது. 
                  காலப்போக்கில், இது அதிவேக வளர்ச்சியை உருவாக்குகிறது. 
                  எடுத்துக்காட்டாக, 12% இல் ₹1 லட்சம் 10 ஆண்டுகளில் ₹3.1 லட்சமாகிறது.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}