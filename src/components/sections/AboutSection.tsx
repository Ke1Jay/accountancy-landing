export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[var(--base-100)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-6">
              Your Trusted Accounting Partner for Strategic Financial Success
            </h2>

            <p className="text-lg text-[var(--neutral)] mb-6 leading-relaxed">
              With over 15 years of experience in accounting and financial consulting, 
              we&apos;re dedicated to helping individuals and businesses achieve their financial goals 
              through expert guidance and personalized service.
            </p>

            <p className="text-[var(--neutral)] mb-8 leading-relaxed">
              Our approach combines technical expertise with a deep understanding of your 
              unique needs, ensuring you receive not just compliance support, but strategic 
              insights that drive your success.
            </p>

            {/* Stats or Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-2xl font-bold text-[var(--accent)] mb-1">15+</div>
                <div className="text-sm text-[var(--neutral)]">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--accent)] mb-1">500+</div>
                <div className="text-sm text-[var(--neutral)]">Businesses Served</div>
              </div>
            </div>

            <button className="bg-[var(--primary)] text-[var(--primary-content)] px-8 py-3 rounded-full font-medium hover:bg-[var(--primary-hover)] transition-colors">
              Schedule a Consultation
            </button>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/5] bg-[var(--base-300)] rounded-2xl overflow-hidden">
              {/* Placeholder for professional image */}
              <div className="w-full h-full bg-gradient-to-br from-[var(--base-200)] to-[var(--base-300)] flex items-center justify-center">
                <span className="text-[var(--neutral)] text-lg">Professional Team Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}