export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Countless Of Years In York Creates, Demands Specialist For Complex Accounting Solutions.
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With decades of combined experience serving businesses across York and beyond, 
              our team has developed specialized expertise in handling the most complex 
              accounting challenges that modern businesses face.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              From intricate tax structures to multi-entity consolidations, we bring 
              deep knowledge and proven methodologies to ensure your financial 
              operations run smoothly and efficiently.
            </p>

            {/* Stats or Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Businesses Served</div>
              </div>
            </div>

            <button className="bg-slate-800 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-700 transition-colors">
              Learn More About Us
            </button>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden">
              {/* Placeholder for professional image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Professional Team Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}