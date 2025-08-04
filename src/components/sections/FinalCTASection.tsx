export function FinalCTASection() {
  return (
    <section className="py-20 bg-[var(--professional-navy)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Join over 500 satisfied clients who have streamlined their finances and accelerated 
              their growth with our expert accounting services. Let's discuss how we can help 
              your business thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[var(--trust-blue)] text-white px-8 py-3 rounded-full font-medium hover:bg-[var(--financial-green)] transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-[var(--trust-blue)] text-[var(--trust-blue)] bg-white px-8 py-3 rounded-full font-medium hover:bg-[var(--trust-blue)] hover:text-white transition-colors">
                View Our Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[var(--financial-green)] rounded-full"></div>
                <span>Certified Public Accountant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[var(--financial-green)] rounded-full"></div>
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[var(--financial-green)] rounded-full"></div>
                <span>Money Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-[var(--professional-navy)] mb-6">
              Schedule Your Free Consultation
            </h3>
            
            <form className="space-y-4" suppressHydrationWarning>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text"
                  placeholder="First Name *"
                  className="px-4 py-3 border border-[var(--neutral-gray)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--trust-blue)] focus:border-[var(--trust-blue)] transition-colors"
                  required
                  suppressHydrationWarning
                />
                <input 
                  type="text"
                  placeholder="Last Name *"
                  className="px-4 py-3 border border-[var(--neutral-gray)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--trust-blue)] focus:border-[var(--trust-blue)] transition-colors"
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
                className="w-full bg-[var(--trust-blue)] text-white py-3 px-6 rounded-lg font-medium hover:bg-[var(--professional-navy)] transition-colors"
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