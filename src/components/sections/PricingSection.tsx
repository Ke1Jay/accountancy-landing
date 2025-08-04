export function PricingSection() {
  const pricingTiers = [
    {
      name: "Basic",
      price: "299",
      period: "month",
      description: "Perfect for small businesses just getting started",
      features: [
        "Monthly bookkeeping",
        "Basic financial reports", 
        "Tax preparation assistance",
        "Email support",
        "Quarterly reviews"
      ],
      isPopular: false,
      ctaText: "Get Started"
    },
    {
      name: "Standard", 
      price: "599",
      period: "month",
      description: "Ideal for growing businesses with complex needs",
      features: [
        "Everything in Basic",
        "Weekly bookkeeping",
        "Advanced financial analysis",
        "Dedicated account manager",
        "Monthly strategy calls",
        "Custom reporting"
      ],
      isPopular: true,
      ctaText: "Most Popular"
    },
    {
      name: "Premium",
      price: "999", 
      period: "month",
      description: "Comprehensive solution for established enterprises",
      features: [
        "Everything in Standard",
        "Daily bookkeeping",
        "CFO-level advisory",
        "Priority support",
        "Unlimited consultations",
        "Advanced tax planning"
      ],
      isPopular: false,
      ctaText: "Contact Us"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Strategic Pricing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a plan that fits your business needs and budget. 
            All prices are provisional and subject to consultation.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-sm border relative ${
                tier.isPopular ? 'ring-2 ring-slate-800 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-slate-800 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{tier.description}</p>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-800">
                    €{tier.price}
                  </span>
                  <span className="text-gray-500">/{tier.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                className={`w-full py-3 px-6 rounded-full font-medium transition-colors ${
                  tier.isPopular 
                    ? 'bg-slate-800 text-white hover:bg-slate-700' 
                    : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {tier.ctaText}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>✓ Free initial consultation</span>
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 30-day money back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}