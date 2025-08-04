export function ServicesSection() {
  const services = [
    {
      icon: "📊",
      title: "Tax Preparation & Planning",
      description: "Comprehensive tax services including preparation, planning, and strategic advice to minimize your tax liability while ensuring full compliance with current regulations."
    },
    {
      icon: "📈",
      title: "Bookkeeping & Financial Reports",
      description: "Accurate bookkeeping and detailed financial reporting to give you clear insights into your business performance and help you make informed decisions."
    },
    {
      icon: "🔒",
      title: "Business Advisory & Consulting",
      description: "Strategic financial consulting to help you optimize operations, plan for growth, and navigate complex business decisions with confidence."
    }
  ];

  return (
    <section id="services" className="py-20 bg-[var(--professional-navy)]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <p className="text-gray-300 text-sm mb-2 uppercase tracking-wider">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comprehensive Accounting Services<br />Tailored to Your Success
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-16">
            Professional financial services designed to streamline your operations and accelerate your business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors">
              {/* Icon */}
              <div className="w-20 h-20 bg-[var(--trust-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-12 bg-[var(--trust-blue)] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📊</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                {service.description}
              </p>

              {/* Learn More Button */}
              <button className="text-white text-sm font-medium hover:text-gray-300 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}