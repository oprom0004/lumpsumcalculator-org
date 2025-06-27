export function WebApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Lumpsum Calculator",
    "url": "https://lumpsumcalculator.org",
    "description": "Advanced lumpsum investment calculator with inflation adjustment and goal-based planning for compound interest calculations",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Lumpsum investment calculation",
      "Compound interest calculator", 
      "Inflation adjustment",
      "Goal-based planning",
      "Multi-language support",
      "Real-time calculations"
    ],
    "browserRequirements": "Requires JavaScript",
    "inLanguage": ["en", "hi", "te", "ta", "gu"],
    "author": {
      "@type": "Organization",
      "name": "Lumpsum Calculator"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a lumpsum investment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A lumpsum investment is a one-time investment of a large amount of money, rather than investing smaller amounts over time. This strategy is effective when you have a significant amount available for investment."
        }
      },
      {
        "@type": "Question", 
        "name": "How accurate is this calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator uses the standard compound interest formula A = P(1+r)^t and achieves 99.99% accuracy. We cross-verify results with financial platforms like Groww and ClearTax."
        }
      },
      {
        "@type": "Question",
        "name": "Is this calculator free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our lumpsum calculator is completely free with no hidden fees, registration requirements, or advertisements. We believe financial planning tools should be accessible to everyone."
        }
      },
      {
        "@type": "Question",
        "name": "How does compound interest work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Compound interest means earning returns on both your initial investment and previously earned returns. Over time, this creates exponential growth. For example, ₹1 lakh at 12% becomes ₹3.1 lakh in 10 years."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}