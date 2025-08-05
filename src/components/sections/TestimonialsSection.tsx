export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Their expertise in tax planning saved us over $15,000 last year. The strategic insights and proactive approach have been game-changing for our business.",
      author: "Sarah Johnson",
      position: "CEO, Digital Solutions Inc.",
      rating: 5
    },
    {
      quote: "Professional, reliable, and incredibly knowledgeable. They simplified our complex bookkeeping and gave us the financial clarity we needed to grow.",
      author: "Michael Chen", 
      position: "Founder, Green Energy Co",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[var(--section-alt-bg)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[var(--neutral)] max-w-2xl mx-auto">
            See how we&apos;ve helped businesses like yours achieve financial success and peace of mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[var(--base-100)] p-8 rounded-2xl shadow-sm border border-[var(--base-300)]">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[var(--base-content)] mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-semibold text-[var(--secondary)]">{testimonial.author}</div>
                <div className="text-sm text-[var(--neutral)]">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}