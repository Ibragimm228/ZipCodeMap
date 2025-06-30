import React, { memo, useMemo } from 'react';
import { useGetArticles } from '@/hooks/useArticles';
import { ArticleCardLarge } from '../../shared/article-card/article-card-large';
import { ArticleCardSkeleton } from '../../shared/article-card/article-card-skeleton';
import { Container } from '../../shared/container';
import type { IArticle } from '@/types/interfaces';


const ARTICLES_LIMIT = 11;
const GRID_LAYOUT_CLASSES = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 auto-rows-fr';


const getItemClasses = (index: number): string => {
  const baseClasses = 'w-full h-full';
  
  const layoutMap: Record<number, string> = {
    0: 'md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 md:row-span-2',
    1: 'lg:col-span-1 xl:col-span-1',
    2: 'lg:col-span-1 xl:col-span-1',
    3: 'xl:col-span-2 2xl:col-span-2',
    4: 'xl:col-span-1',
    5: 'xl:col-span-1',
    6: '2xl:col-span-1',
    7: '2xl:col-span-1',
    8: '2xl:col-span-1',
    9: '2xl:col-span-1',
    10: '2xl:col-span-1'
  };

  return `${layoutMap[index] || ''} ${baseClasses}`.trim();
};


const MemoizedSkeleton = memo(({ className }: { className: string }) => (
  <div className={className}>
    <ArticleCardSkeleton />
  </div>
));

const MemoizedArticleCard = memo(({ 
  article, 
  className 
}: { 
  article: IArticle; 
  className: string;
}) => (
  <div className={className}>
    <ArticleCardLarge article={article} />
  </div>
));

export const Hero = memo(() => {
  const { data: articles, isLoading } = useGetArticles();

  const skeletonItems = useMemo(
    () => Array.from({ length: ARTICLES_LIMIT }, (_, index) => (
      <MemoizedSkeleton
        key={`skeleton-${index}`}
        className={getItemClasses(index)}
      />
    )),
    []
  );

  const articleItems = useMemo(() => {
    if (!articles) return [];
    
    return articles.slice(0, ARTICLES_LIMIT).map((article, index) => (
      <MemoizedArticleCard
        key={article.id || index}
        article={article}
        className={getItemClasses(index)}
      />
    ));
  }, [articles]);

  return (
    <section className="py-10 bg-gray-50">
      <Container>
        <header>
          <h2 className="text-4xl uppercase font-bold mb-5 pb-3 border-b-2 border-gray-500 text-gray-800">
            Featured Articles
          </h2>
        </header>
        
        <div className={GRID_LAYOUT_CLASSES}>
          {isLoading ? skeletonItems : articleItems}
        </div>
      </Container>
    </section>
  );
});

Hero.displayName = 'Hero';
