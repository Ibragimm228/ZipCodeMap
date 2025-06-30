import { useGetArticles } from '@/hooks/useArticles';
import { getArticleLink } from '@/lib/utils';
import { Link } from 'react-router';

export const BeautyTrends = () => {
  const { data: articles, isLoading } = useGetArticles();

  const latestArticles = articles
    ?.sort(
      (a, b) =>
        new Date(b.published_date || 0).getTime() -
        new Date(a.published_date || 0).getTime()
    )
    .slice(0, 3);

  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Latest Zip Code Trends
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay ahead of the curve with our coverage of the latest zip code
            mapping trends and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="group relative">
                  <div className="relative h-80 w-full rounded-xl overflow-hidden bg-gray-200 animate-pulse"></div>
                </div>
              ))
            : latestArticles?.map((article, index) => (
                <Link
                  to={getArticleLink(article)}
                  key={index}
                  className="group relative"
                >
                  <div className="relative h-80 w-full rounded-xl overflow-hidden bg-gray-200">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-110 w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-3 py-1 bg-gray-600 rounded-full text-sm">
                          {article.type}
                        </span>
                        <span className="text-gray-300 text-sm">
                          {article.published_date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-200 mb-3">
                        {article.summary}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
};