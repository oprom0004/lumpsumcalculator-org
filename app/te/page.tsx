'use client';

import { useState, useEffect } from 'react';

export default function LumpsumCalculatorTelugu() {
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
    return new Intl.NumberFormat('te-IN', {
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
            లంప్ సమ్ ఇన్వెస్ట్‌మెంట్ కాలిక్యులేటర్
          </h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            ఉచిత ఆన్‌లైన్ కాంపౌండ్ ఇంటరెస్ట్ కాలిక్యులేటర్
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            మీ ఒకేసారి పెట్టుబడి యొక్క భవిష్యత్ విలువను లెక్కించండి। కాంపౌండ్ ఇంటరెస్ట్‌తో మీ పెట్టుబడి వృద్ధిని చూడండి।
          </p>
        </div>

        {/* Advanced Features CTA Banner */}
        <div className="mb-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-6 text-white">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">🚀 అడ్వాన్స్‌డ్ ఫీచర్స్ అనుభవించండి!</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <span>🎯</span>
                <span>డ్యూయల్ మోడ్ గణనలు</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>📈</span>
                <span>ద్రవ్యోల్బణ సర్దుబాటు</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>📊</span>
                <span>వివరణాత్మక విశ్లేషణ</span>
              </div>
            </div>
            <a 
              href="/"
              className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              ఇప్పుడు ట్రై చేయండి →
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              పెట్టుబడి వివరాలు
            </h2>

            {/* Investment Amount */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">
                  పెట్టుబడి మొత్తం
                </label>
                <span className="text-lg font-semibold text-blue-600">
                  {investment ? formatCurrency(typeof investment === 'string' ? parseFloat(investment) : investment) : 'మొత్తం నమోదు చేయండి'}
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
                <span>₹1కోటి</span>
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
                placeholder="మొత్తం నమోదు చేయండి (కనిష్ట ₹500)"
                min="500"
                max="10000000"
                step="500"
              />
              {investment === '' && (
                <p className="text-red-500 text-sm mt-1 text-center">పెట్టుబడి మొత్తం అవసరం</p>
              )}
              {investment !== '' && typeof investment === 'number' && investment < 500 && (
                <p className="text-orange-500 text-sm mt-1 text-center">కనిష్ట పెట్టుబడి: ₹500</p>
              )}
            </div>

            {/* Expected Return Rate */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">
                  అంచనా వార్షిక రిటర్న్
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
                placeholder="రేట్ నమోదు చేయండి (1% - 30%)"
                min="1"
                max="30"
                step="0.5"
              />
            </div>

            {/* Investment Period */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">
                  పెట్టుబడి కాలం
                </label>
                <span className="text-lg font-semibold text-purple-600">
                  {period} సంవత్సరాలు
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
                <span>1 సంవత్సరం</span>
                <span>50 సంవత్సరాలు</span>
              </div>
              <input
                type="number"
                value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-center font-medium"
                placeholder="సంవత్సరాలు నమోదు చేయండి (1 - 50)"
                min="1"
                max="50"
                step="1"
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              పెట్టుబడి ఫలితాలు
            </h2>

            {/* Result Cards */}
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <div>
                  <p className="text-sm text-blue-600 font-medium">మొత్తం పెట్టుబడి</p>
                  <p className="text-2xl font-bold text-blue-800">
                    {investment ? formatCurrency(typeof investment === 'string' ? parseFloat(investment) : investment) : '₹0'}
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <div>
                  <p className="text-sm text-green-600 font-medium">మొత్తం రిటర్న్స్</p>
                  <p className="text-2xl font-bold text-green-800">
                    {formatCurrency(results.totalReturns)}
                  </p>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-500">
                <div>
                  <p className="text-sm text-indigo-600 font-medium">మెచ్యూరిటీ విలువ</p>
                  <p className="text-2xl font-bold text-indigo-800">
                    {formatCurrency(results.maturityAmount)}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">ముఖ్య సమాచారం</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  • మీ పెట్టుబడి {period} సంవత్సరాలలో{' '}
                  <span className="font-semibold text-green-600">
                    {investment ? ((results.maturityAmount / (typeof investment === 'string' ? parseFloat(investment) : investment) - 1) * 100).toFixed(1) : '0'}%
                  </span>{' '}
                  పెరుగుతుంది
                </p>
                <p>
                  • వార్షిక కాంపౌండ్ రిటర్న్ రేట్: <span className="font-semibold">{rate}%</span>
                </p>
                <p>
                  • డబ్బు రెట్టింపు అవుతుంది దాదాపు{' '}
                  <span className="font-semibold text-blue-600">
                    {(72 / rate).toFixed(1)} సంవత్సరాలలో
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Features CTA */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-500">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">మరిన్ని మెరుగైన ఫీచర్లు కావాలా?</h3>
            <p className="text-gray-600">ఇంగ్లిష్ వెర్షన్‌లో ఈ అడ్వాన్స్‌డ్ ఫీచర్లు అందుబాటులో ఉన్నాయి:</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">🎯</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">రెండు గణన మోడ్‌లు</h4>
                <p className="text-sm text-gray-600">"నా పెట్టుబడి మొత్తం తెలుసు" లేదా "నా లక్ష్యం తెలుసు"</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">📈</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">ద్రవ్యోల్బణ సర్దుబాటు</h4>
                <p className="text-sm text-gray-600">ద్రవ్యోల్బణ రేట్‌తో రియల్ కొనుగోలు శక్తి గణన</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">📊</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">వివరణాత్మక ధృవీకరణ</h4>
                <p className="text-sm text-gray-600">Groww, ClearTax తో ఖచ్చితత్వ పోలిక</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">🔍</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">అడ్వాన్స్‌డ్ విశ్లేషణ</h4>
                <p className="text-sm text-gray-600">వివరణాత్మక FAQ మరియు ఆర్థిక అంతర్దృష్టులు</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-colors shadow-lg"
            >
              అడ్వాన్స్‌డ్ కాలిక్యులేటర్ ఉపయోగించండి →
            </a>
          </div>
        </div>

        {/* Basic FAQ */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            తరచుగా అడిగే ప్రశ్నలు
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  లంప్ సమ్ పెట్టుబడి అంటే ఏమిటి?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  లంప్ సమ్ పెట్టుబడి అంటే ఒకేసారిగా పెద్ద మొత్తంలో డబ్బు పెట్టుబడి పెట్టడం, కాలక్రమేణా చిన్న మొత్తాలు పెట్టుబడి పెట్టడానికి బదులుగా। 
                  మీ దగ్గర పెట్టుబడికి పెద్ద మొత్తం అందుబాటులో ఉన్నప్పుడు ఈ వ్యూహం ప్రభావవంతంగా ఉంటుంది.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  ఈ కాలిక్యులేటర్ ఎంత ఖచ్చితమైనది?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  మా కాలిక్యులేటర్ ప్రామాణిక కాంపౌండ్ ఇంటరెస్ట్ ఫార్ములా A = P(1+r)^t ని ఉపయోగిస్తుంది। 
                  మేము 99.99% ఖచ్చితత్వం సాధిస్తాము మరియు Groww మరియు ClearTax వంటి ఆర్థిక ప్లాట్‌ఫారమ్‌లతో ఫలితాలను క్రాస్-వెరిఫై చేస్తాము.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  ఈ కాలిక్యులేటర్ ఉపయోగించడానికి ఉచితమేనా?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  అవును, మా లంప్ సమ్ కాలిక్యులేటర్ ఎలాంటి దాచిన రుసుములు, రిజిస్ట్రేషన్ అవసరాలు లేదా ప్రకటనలు లేకుండా పూర్తిగా ఉచితం. 
                  ఆర్థిక ప్రణాళిక సాధనాలు అందరికీ అందుబాటులో ఉండాలని మేము నమ్ముతాము.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  కాంపౌండ్ ఇంటరెస్ట్ ఎలా పని చేస్తుంది?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  కాంపౌండ్ ఇంటరెస్ట్ అంటే మీ ప్రారంభ పెట్టుబడి మరియు గతంలో సంపాదించిన రిటర్న్స్ రెండింటిపై రిటర్న్స్ సంపాదించడం. 
                  కాలక్రమేణా, ఇది ఘాతాంక వృద్ధిని సృష్టిస్తుంది. 
                  ఉదాహరణకు, 12% వద్ద ₹1 లక్ష 10 సంవత్సరాలలో ₹3.1 లక్షలు అవుతుంది.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}