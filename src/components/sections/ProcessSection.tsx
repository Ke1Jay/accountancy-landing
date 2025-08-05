export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description: "We start with a comprehensive consultation to understand your business needs, financial goals, and current challenges."
    },
    {
      number: "02", 
      title: "Analysis & Strategy",
      description: "Our team analyzes your financial position and develops a customized strategy tailored to your specific requirements."
    },
    {
      number: "03",
      title: "Implementation & Support", 
      description: "We implement our proven systems and provide ongoing support to ensure your financial operations run smoothly."
    }
  ];

  return (
    <section className="py-20 bg-[var(--base-100)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-8">
              Our Proven Three-Step Process
            </h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[var(--primary)] text-[var(--primary-content)] rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--secondary)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[var(--neutral)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/3] bg-[var(--base-300)] rounded-2xl overflow-hidden">
              {/* Placeholder for process illustration */}
              <div className="w-full h-full bg-gradient-to-br from-[var(--base-200)] to-[var(--base-300)] flex items-center justify-center">
                <span className="text-[var(--neutral)] text-lg">Process Illustration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}