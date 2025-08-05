export function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[var(--hero-bg)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--secondary)] mb-6 leading-tight">
              Professional Accounting Services You Can Trust
            </h1>

            <p className="text-lg md:text-xl text-[var(--neutral)] mb-8 max-w-2xl leading-relaxed">
              Expert financial guidance for individuals and businesses. Simplify your finances with 
              certified accounting support that helps you achieve your financial goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-[var(--primary)] text-[var(--primary-content)] px-8 py-4 rounded-full text-lg font-medium hover:bg-[var(--primary-hover)] transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 rounded-full text-lg font-medium hover:bg-[var(--primary)] hover:text-[var(--primary-content)] transition-colors">
                View Our Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-[var(--neutral)]">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[var(--accent)] rounded-full"></div>
                <span>Certified Public Accountant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[var(--accent)] rounded-full"></div>
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[var(--accent)] rounded-full"></div>
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/3] bg-[var(--base-300)] rounded-2xl overflow-hidden">
              {/* Placeholder for professional accounting image */}
              <div className="w-full h-full bg-gradient-to-br from-[var(--base-200)] to-[var(--base-300)] flex items-center justify-center">
                <span className="text-[var(--neutral)] text-lg">Professional Accounting Consultation</span>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-[var(--base-100)] p-6 rounded-xl shadow-lg border border-[var(--base-300)]">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--accent)] mb-1">98%</div>
                <div className="text-sm text-[var(--neutral)]">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}