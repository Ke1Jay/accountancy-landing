export function StatsSection() {
  return (
    <section className="py-20 bg-[var(--section-alt-bg)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Image Column */}
          <div className="relative">
            <div className="aspect-[4/3] bg-[var(--base-300)] rounded-2xl overflow-hidden mb-6">
              {/* Placeholder for laptop/workspace image */}
              <div className="w-full h-full bg-gradient-to-br from-[var(--base-200)] to-[var(--base-300)] flex items-center justify-center">
                <span className="text-[var(--neutral)] text-lg">Team Retro Laptop</span>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:pl-8">
            <div className="mb-8">
              <p className="text-[var(--neutral)] text-sm mb-4 uppercase tracking-wider">Proven Partner</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-6 leading-tight">
                15 Years of Excellence,<br />
                Your Partner in<br />
                Financial Success
              </h2>

              <p className="text-[var(--neutral)] mb-6 leading-relaxed">
                With over 15 years of dedicated service, we&apos;ve built our reputation on 
                delivering exceptional accounting solutions that drive real business results. 
                Our experienced team combines deep industry knowledge with innovative approaches 
                to help you navigate complex financial challenges and achieve sustainable growth.
              </p>

              <button className="bg-[var(--primary)] text-[var(--primary-content)] px-6 py-3 rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-colors">
                Start Today
              </button>
            </div>

            
          </div>
        </div>

        {/* Stats Grid - Full Width at Bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-2">500+</div>
            <div className="text-sm text-[var(--neutral)]">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-2">15+</div>
            <div className="text-sm text-[var(--neutral)]">Years Of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-2">€2M+</div>
            <div className="text-sm text-[var(--neutral)]">Tax Savings Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-2">98%</div>
            <div className="text-sm text-[var(--neutral)]">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}