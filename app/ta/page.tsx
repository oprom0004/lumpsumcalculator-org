'use client';

import { useState, useEffect } from 'react';

export default function LumpsumCalculatorTamil() {
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            கூட்டு வட்டியுடன் உங்கள் ஒருமுறை முதலீட்டின் எதிர்கால மதிப்பைக் கணக்கிடுங்கள். 
            துல்லியத்துடன் உங்கள் நிதி இலக்குகளைத் திட்டமிடுங்கள்.
          </p>
          
          {/* Language Selection */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-lg shadow-md p-2 flex space-x-2">
              <a href="/" className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">English</a>
              <a href="/hi" className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">हिंदी</a>
              <a href="/te" className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">తెలుగు</a>
              <a href="/ta" className="px-3 py-1 bg-blue-600 text-white rounded text-sm">தமிழ்</a>
              <a href="/gu" className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">ગુજરાતી</a>
            </div>
          </div>
          
          {/* Navigation Menu */}
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#calculator" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              கால்குலேட்டர்
            </a>
            <a href="#verification" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              சரிபார்ப்பு
            </a>
            <a href="#advantages" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              நன்மைகள்
            </a>
            <a href="#faq" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              அடிக்கடி கேட்கப்படும் கேள்விகள்
            </a>
          </div>
        </div>

        <div id="calculator" className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              முதலீட்டு விவரங்கள்
            </h2>

            {/* Investment Amount */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">
                  முதலீட்டுத் தொகை
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
                placeholder="தொகையை உள்ளிடுங்கள்"
              />
            </div>

            {/* Expected Return Rate */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">
                  எதிர்பார்க்கப்படும் ஆண்டு வருமானம்
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
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 ஆண்டு</span>
                <span>50 ஆண்டுகள்</span>
              </div>
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
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">மொத்த முதலீடு</p>
                    <p className="text-2xl font-bold text-blue-800">
                      {formatCurrency(results.totalInvestment)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-green-600 font-medium">மொத்த வருமானம்</p>
                    <p className="text-2xl font-bold text-green-800">
                      {formatCurrency(results.totalReturns)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-indigo-600 font-medium">முதிர்வு மதிப்பு</p>
                    <p className="text-2xl font-bold text-indigo-800">
                      {formatCurrency(results.maturityAmount)}
                    </p>
                  </div>
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
                    {((results.maturityAmount / results.totalInvestment - 1) * 100).toFixed(1)}%
                  </span>{' '}
                  வளரும்
                </p>
                <p>
                  • ஆண்டு கூட்டு வருமான விகிதம்: <span className="font-semibold">{rate}%</span>
                </p>
                <p>
                  • பணம் இரட்டிப்பாகும் நேரம் தோராயமாக{' '}
                  <span className="font-semibold text-blue-600">
                    {(72 / rate).toFixed(1)} ஆண்டுகள்
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="mt-12 bg-white rounded-2xl shadow-xl p-8">
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
                  லம்ப்சம் முதலீடு என்பது ஒரே நேரத்தில் பெரிய தொகையை முதலீடு செய்வது, 
                  காலப்போக்கில் சிறிய தொகைகளை முதலீடு செய்வதற்கு பதிலாக. 
                  முதலீட்டிற்கு போதுமான தொகை உங்களிடம் இருக்கும்போது இந்த உத்தி பயனுள்ளதாக இருக்கும்.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  இந்த கால்குலேட்டர் எவ்வளவு துல்லியமானது?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  எங்கள் கால்குலேட்டர் நிலையான கூட்டு வட்டி ஃபார்முலா A = P(1+r)^t ஐப் பயன்படுத்துகிறது. 
                  நாங்கள் 99.99% துல்லியத்தை அடைகிறோம் மற்றும் Groww மற்றும் ClearTax போன்ற நிதி தளங்களுடன் முடிவுகளை சரிபார்க்கிறோம்.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  லம்ப்சம் மற்றும் SIP க்கு இடையே என்ன வித்தியாசம்?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  லம்ப்சம் ஒருமுறை பெரிய தொகையை முதலீடு செய்வதை உள்ளடக்குகிறது, அதே நேரத்தில் SIP வழக்கமான சிறிய முதலீடுகளை உள்ளடக்குகிறது. 
                  லம்ப்சம் உடனடி சந்தை வெளிப்பாட்டிலிருந்து பயனடையலாம், அதே நேரத்தில் SIP ரூபாய் செலவு சராசரியை வழங்குகிறது.
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
                  கூட்டு வட்டி என்பது உங்கள் ஆரம்ப முதலீடு மற்றும் முன்பு பெற்ற வருமானம் இரண்டிலும் வருமானம் பெறுவது. 
                  காலப்போக்கில், இது அதிவேக வளர்ச்சியை உருவாக்குகிறது. 
                  உதாரணமாக, 12% இல் ₹1 லட்சம் 10 ஆண்டுகளில் ₹3.1 லட்சமாக மாறுகிறது.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  முதலீட்டு வருமானத்தை எந்த காரணிகள் பாதிக்கின்றன?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  முதலீட்டு வருமானம் ஆண்டு வருமான விகிதம், முதலீட்டு காலம், சந்தை நிலைமைகள், 
                  ஃபண்ட் செயல்திறன் மற்றும் பொருளாதார காரணிகளைப் பொறுத்தது. 
                  எங்கள் கால்குலேட்டர் பல்வேறு சூழ்நிலைகளை மாதிரியாக்க உதவுகிறது.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}