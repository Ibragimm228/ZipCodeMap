import { useGetArticles } from '@/hooks/useArticles';
import { ArticleCardLarge } from '../../shared/article-card/article-card-large';
import { ArticleCardSkeleton } from '../../shared/article-card/article-card-skeleton';
import { Container } from '../../shared/container';

export function Hero() {
  const { data: articles, isLoading } = useGetArticles();

  return (
    <section className="py-10 bg-gray-50">
      <Container>
        <h2 className="text-4xl uppercase font-bold mb-5 pb-3 border-b-2 border-gray-500 text-gray-800">
          Featured Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 auto-rows-fr">
          {isLoading
            ? Array.from({ length: 11 }).map((_, index) => (
                <div
                  key={`skeleton-${index}`}
                  className={`
                    ${index === 0 ? 'md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 md:row-span-2' : ''}
                    ${index === 1 ? 'lg:col-span-1 xl:col-span-1' : ''}
                    ${index === 2 ? 'lg:col-span-1 xl:col-span-1' : ''}
                    ${index === 3 ? 'xl:col-span-2 2xl:col-span-2' : ''}
                    ${index === 4 ? 'xl:col-span-1' : ''}
                    ${index === 5 ? 'xl:col-span-1' : ''}
                    ${index === 6 ? '2xl:col-span-1' : ''}
                    ${index === 7 ? '2xl:col-span-1' : ''}
                    ${index === 8 ? '2xl:col-span-1' : ''}
                    ${index === 9 ? '2xl:col-span-1' : ''}
                    ${index === 10 ? '2xl:col-span-1' : ''}
                    w-full h-full
                  `}
                >
                  <ArticleCardSkeleton />
                </div>
              ))
            : articles?.slice(0, 11).map((article, index) => (
                <div
                  key={index}
                  className={`
                    ${index === 0 ? 'md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 md:row-span-2' : ''}
                    ${index === 1 ? 'lg:col-span-1 xl:col-span-1' : ''}
                    ${index === 2 ? 'lg:col-span-1 xl:col-span-1' : ''}
                    ${index === 3 ? 'xl:col-span-2 2xl:col-span-2' : ''}
                    ${index === 4 ? 'xl:col-span-1' : ''}
                    ${index === 5 ? 'xl:col-span-1' : ''}
                    ${index === 6 ? '2xl:col-span-1' : ''}
                    ${index === 7 ? '2xl:col-span-1' : ''}
                    ${index === 8 ? '2xl:col-span-1' : ''}
                    ${index === 9 ? '2xl:col-span-1' : ''}
                    ${index === 10 ? '2xl:col-span-1' : ''}
                    w-full h-full
                  `}
                >
                  <ArticleCardLarge article={article} />
                </div>
              ))}
        </div>
      </Container>
    </section>
  );
}