import { useGetArticles } from '@/hooks/useArticles';
import { Link } from 'react-router';

export const BeautyTips = () => {
  const { data: articles } = useGetArticles();
  const types = [...new Set(articles?.map(article => article.type))];

  return (
    <section className="py-20 bg-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-gray-300/8 to-slate-300/12 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-zinc-300/8 to-gray-300/12 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-slate-500 font-medium mb-4 block">
            Explore Categories
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6 leading-tight">
            Zip Code Research & 
            <span className="bg-gradient-to-r from-slate-600 to-zinc-600 bg-clip-text text-transparent"> Analysis Tips</span>
          </h2>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            Discover comprehensive insights and expert analysis for geographic data and zip code research
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((type, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300/15 to-slate-300/20 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/30 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={articles?.find(article => article.type === type)?.image}
                    alt={type}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl md:text-2xl font-light text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                    {type}
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-6 line-clamp-3">
                    {articles?.find(article => article.type === type)?.summary}
                  </p>
                  
                  {/* CTA Button */}
                  <Link to={`/blog?type=${encodeURIComponent(type ?? '')}`}>
                    <button className="group/btn relative inline-flex items-center text-slate-600 hover:text-slate-800 font-light transition-colors duration-300">
                      <span className="relative z-10">Read More</span>
                      <svg 
                        className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1 duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/blog">
            <button className="group relative inline-flex items-center px-8 py-4 text-lg font-light text-white bg-gradient-to-r from-slate-600 to-zinc-600 rounded-full hover:from-slate-700 hover:to-zinc-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              <span className="relative z-10">View All Articles</span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-zinc-600 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
