export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The team's expertise in financial management has transformed our business operations. Their strategic insights have been invaluable.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      rating: 5
    },
    {
      quote: "Professional, reliable, and always available when we need them. They've become an essential part of our business success.",
      author: "Michael Chen", 
      position: "Founder, GrowthCo",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Client Stories: Real Experience, Real Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our clients have achieved their financial goals with our expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-semibold text-slate-800">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}