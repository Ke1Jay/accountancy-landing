export function FinalCTASection() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Over 3,000 Clients Worldwide Trust Our Services
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Join thousands of satisfied clients who have transformed their financial operations 
              with our expert accounting services. Experience the difference professional 
              financial management can make for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-slate-800 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
                Schedule Consultation
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span>Certified Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span>Money Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">
              Get Your Free Consultation
            </h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent"
                  required
                />
                <input 
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent"
                  required
                />
              </div>
              
              <input 
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent"
                required
              />
              
              <input 
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent"
              />
              
              <textarea 
                placeholder="Tell us about your business needs..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent resize-none"
                required
              ></textarea>
              
              <button 
                type="submit"
                className="w-full bg-slate-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-slate-700 transition-colors"
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