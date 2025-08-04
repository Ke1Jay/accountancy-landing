export function StatsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Image Column */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden mb-6">
              {/* Placeholder for laptop/workspace image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Team Retro Laptop</span>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:pl-8">
            <div className="mb-8">
              <p className="text-gray-600 text-sm mb-4 uppercase tracking-wider">Proven Partner</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--professional-navy)] mb-6 leading-tight">
                15 Years of Excellence,<br />
                Your Partner in<br />
                Financial Success
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 15 years of dedicated service, we&apos;ve built our reputation on 
                delivering exceptional accounting solutions that drive real business results. 
                Our experienced team combines deep industry knowledge with innovative approaches 
                to help you navigate complex financial challenges and achieve sustainable growth.
              </p>

              <button className="bg-[var(--trust-blue)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--professional-navy)] transition-colors">
                Start Today
              </button>
            </div>

            
          </div>
        </div>

        {/* Stats Grid - Full Width at Bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[var(--trust-blue)] mb-2">500+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[var(--trust-blue)] mb-2">15+</div>
            <div className="text-sm text-gray-600">Years Of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[var(--trust-blue)] mb-2">€2M+</div>
            <div className="text-sm text-gray-600">Tax Savings Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[var(--trust-blue)] mb-2">98%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}