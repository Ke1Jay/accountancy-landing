export function JournalSection() {
  const articles = [
    {
      date: "Dec 15, 2024",
      title: "Tax Planning Strategies for Small Businesses",
      excerpt: "Essential tax planning strategies that every small business owner should implement before year-end.",
      image: "Article Image 1"
    },
    {
      date: "Dec 12, 2024", 
      title: "Understanding Cash Flow Management",
      excerpt: "Learn how to effectively manage your business cash flow and avoid common pitfalls.",
      image: "Article Image 2"
    },
    {
      date: "Dec 10, 2024",
      title: "Digital Transformation in Accounting",
      excerpt: "How modern accounting software can streamline your financial processes and improve accuracy.",
      image: "Article Image 3"
    }
  ];

  return (
    <section id="journal" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Content Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              On The Journal
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Stay informed with our latest insights, tips, and industry updates. 
              Our experts share valuable knowledge to help you make better financial decisions.
            </p>

            <div className="space-y-6">
              {articles.map((article, index) => (
                <article key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2 hover:text-slate-600 cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                </article>
              ))}
            </div>

            <button className="mt-8 text-slate-800 font-medium hover:text-slate-600 transition-colors">
              View All Articles →
            </button>
          </div>

          {/* Images Column */}
          <div className="space-y-6">
            {articles.map((article, index) => (
              <div key={index} className="aspect-[16/10] bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">{article.image}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}