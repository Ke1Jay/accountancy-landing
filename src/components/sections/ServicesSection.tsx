export function ServicesSection() {
  const services = [
    {
      icon: "📊",
      title: "Comprehensive Financial Management",
      description: "Complete oversight of your financial landscape, from daily transactions to strategic planning, ensuring every dollar is accounted for and optimized."
    },
    {
      icon: "📈",
      title: "Strategic Business Advisory",
      description: "Expert guidance on business decisions, growth strategies, and financial planning to help you navigate complex business challenges and opportunities."
    },
    {
      icon: "🔒",
      title: "Tax Optimization & Compliance",
      description: "Proactive tax planning and preparation services that maximize your savings while ensuring full compliance with all regulatory requirements."
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Expert Accounting Support At Every Business Stage
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your business needs and growth objectives
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">{service.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}