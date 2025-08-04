export function NewsletterSection() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--professional-navy)] mb-6">
              Get Expert Financial Insights Delivered Monthly
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of business owners who receive our monthly newsletter with exclusive 
              tax tips, financial insights, and strategies to optimize your business finances.
            </p>
  
                      {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <div suppressHydrationWarning>
                <input 
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-full border border-[var(--neutral-gray)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--trust-blue)] focus:border-[var(--trust-blue)] transition-colors"
                  required
                  suppressHydrationWarning
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[var(--trust-blue)] text-white py-3 px-6 rounded-full font-medium hover:bg-[var(--professional-navy)] transition-colors"
              >
                Get Free Insights
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              Free insights, no spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
          </div>
        </div>
      </section>
    );
  }