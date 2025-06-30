import { useGetArticles } from '@/hooks/useArticles';
import { ArticleCardLarge } from '../shared/article-card/article-card-large';
import { Container } from '../shared/container';
import { ArticleCardCompact } from '../shared/article-card/article-card-compact';

export function Latest() {
  const { data: articles } = useGetArticles();
  const latestArticles = articles?.sort(
    (a, b) =>
      new Date(b.published_date || 0).getTime() -
      new Date(a.published_date || 0).getTime()
  );

  return (
    latestArticles && (
      <section className="py-10 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
        <Container>
          <h2 className="text-4xl uppercase font-bold mb-5 pb-3 border-b-2 border-slate-200 text-slate-700">
            Latest Zip Code Insights
          </h2>
          <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
            <div className="w-full flex flex-col gap-12">
              {latestArticles.slice(0, 4).map((article, index) => (
                <div
                  key={index}
                  style={{ gridArea: `Area${index + 1}` }}
                  className="w-full h-full"
                >
                  <ArticleCardLarge className="h-[300px]" article={article} />
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col gap-5">
              {latestArticles.slice(5, 10).map((article, index) => (
                <div
                  key={index}
                  style={{ gridArea: `Area${index + 1}` }}
                  className="w-full h-full"
                >
                  <ArticleCardCompact article={article} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    )
  );
}
