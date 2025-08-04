export function NewsletterSection() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Get On The List For Our Free Booking Checklist
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our mailing list to receive exclusive insights, tax tips, and our comprehensive 
              free booking checklist to streamline your financial processes.
            </p>
  
            {/* Newsletter Form */}
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <div>
                  <input 
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent"
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-slate-800 text-white py-3 px-6 rounded-full font-medium hover:bg-slate-700 transition-colors"
                >
                  Subscribe Now
                </button>
              </form>
  
              <p className="text-sm text-gray-500 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }