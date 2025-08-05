export function FinalCTASection() {
  return (
    <section className="py-20 bg-[var(--dark-section-bg)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="text-[var(--dark-section-content)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-lg text-[var(--dark-section-content)]/70 mb-8 leading-relaxed">
              Join over 500 satisfied clients who have streamlined their finances and accelerated 
              their growth with our expert accounting services. Let&apos;s discuss how we can help 
              your business thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[var(--primary)] text-[var(--primary-content)] px-8 py-3 rounded-full font-medium hover:bg-[var(--primary-hover)] transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-[var(--primary)] text-[var(--primary)] bg-[var(--base-100)] px-8 py-3 rounded-full font-medium hover:bg-[var(--primary)] hover:text-[var(--primary-content)] transition-colors">
                View Our Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-[var(--dark-section-content)]/70">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[var(--accent)] rounded-full"></div>
                <span>Certified Public Accountant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[var(--accent)] rounded-full"></div>
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[var(--accent)] rounded-full"></div>
                <span>Money Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-[var(--base-100)] p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-[var(--secondary)] mb-6">
              Schedule Your Free Consultation
            </h3>
            
            <form className="space-y-4" suppressHydrationWarning>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text"
                  placeholder="First Name *"
                  className="px-4 py-3 border border-[var(--base-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] transition-colors"
                  required
                  suppressHydrationWarning
                />
                <input 
                  type="text"
                  placeholder="Last Name *"
                  className="px-4 py-3 border border-[var(--base-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] transition-colors"
                  required
                  suppressHydrationWarning
                />
              </div>
              
              <input 
                type="email"
                placeholder="Email Address *"
                className="w-full px-4 py-3 border border-[var(--neutral-gray)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--trust-blue)] focus:border-[var(--trust-blue)] transition-colors"
                required
                suppressHydrationWarning
              />
              
              <input 
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-[var(--neutral-gray)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--trust-blue)] focus:border-[var(--trust-blue)] transition-colors"
                suppressHydrationWarning
              />
              
              <textarea 
                placeholder="How can we help your business? *"
                rows={4}
                className="w-full px-4 py-3 border border-[var(--neutral-gray)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--trust-blue)] focus:border-[var(--trust-blue)] transition-colors resize-none"
                required
                suppressHydrationWarning
              ></textarea>
              
              <button 
                type="submit"
                className="w-full bg-[var(--primary)] text-[var(--primary-content)] py-3 px-6 rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}