export function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--professional-navy)] mb-6 leading-tight">
              Professional Accounting Services You Can Trust
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Expert financial guidance for individuals and businesses. Simplify your finances with 
              certified accounting support that helps you achieve your financial goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-[var(--trust-blue)] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[var(--professional-navy)] transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-[var(--trust-blue)] text-[var(--trust-blue)] px-8 py-4 rounded-full text-lg font-medium hover:bg-[var(--trust-blue)] hover:text-white transition-colors">
                View Our Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[var(--financial-green)] rounded-full"></div>
                <span>Certified Public Accountant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[var(--financial-green)] rounded-full"></div>
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[var(--financial-green)] rounded-full"></div>
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
              {/* Placeholder for professional accounting image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Professional Accounting Consultation</span>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--financial-green)] mb-1">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}