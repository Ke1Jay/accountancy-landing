export function PricingSection() {
  const pricingTiers = [
    {
      name: "Essential",
      price: "199",
      period: "month",
      description: "Perfect for small businesses and freelancers",
      features: [
        "Monthly bookkeeping",
        "Basic financial reports", 
        "Tax preparation assistance",
        "Email support",
        "Quarterly business reviews"
      ],
      isPopular: false,
      ctaText: "Get Started"
    },
    {
      name: "Professional", 
      price: "399",
      period: "month",
      description: "Ideal for growing businesses with complex needs",
      features: [
        "Everything in Essential",
        "Bi-weekly bookkeeping",
        "Advanced financial analysis",
        "Dedicated account manager",
        "Monthly strategy calls",
        "Custom reporting"
      ],
      isPopular: true,
      ctaText: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "699", 
      period: "month",
      description: "Comprehensive solution for established businesses",
      features: [
        "Everything in Professional",
        "Weekly bookkeeping",
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
    <section id="pricing" className="py-20 bg-[var(--section-alt-bg)]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-[var(--neutral)] max-w-2xl mx-auto">
            Choose a plan that fits your business needs and budget. 
            No hidden fees, no surprises—just straightforward pricing.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`bg-[var(--base-100)] rounded-2xl p-8 shadow-sm border border-[var(--base-300)] relative ${
                tier.isPopular ? 'ring-2 ring-[var(--primary)] scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[var(--primary)] text-[var(--primary-content)] px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-[var(--secondary)] mb-2">
                  {tier.name}
                </h3>
                <p className="text-[var(--neutral)] text-sm mb-4">{tier.description}</p>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[var(--secondary)]">
                    €{tier.price}
                  </span>
                  <span className="text-[var(--neutral)]">/{tier.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[var(--accent)] rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <span className="text-[var(--accent-content)] text-xs">✓</span>
                    </div>
                    <span className="text-[var(--neutral)] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                className={`w-full py-3 px-6 rounded-full font-medium transition-colors ${
                  tier.isPopular 
                    ? 'bg-[var(--primary)] text-[var(--primary-content)] hover:bg-[var(--primary-hover)]' 
                    : 'border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--primary-content)]'
                }`}
              >
                {tier.ctaText}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--neutral)]">
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