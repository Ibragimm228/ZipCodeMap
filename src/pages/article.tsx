import {
	ArticleComments,
	ArticleContent,
	ArticleFeatured,
	ArticleHeader,
	ArticleLatest,
	ArticleNavigation,
	ArticlePopular,
} from '@/components/article'
import { Container } from '@/components/shared/container'
import { Loading } from '@/components/ui/loading'
import { useGetArticleBySlug, useGetArticles } from '@/hooks/useArticles'
import { useParams } from 'react-router'

export function ArticlePage() {
	const { slug } = useParams()

	const { data: article, isLoading: isArticleLoading } = useGetArticleBySlug(
		slug || ''
	)
	const { data: articles, isLoading: isArticlesLoading } = useGetArticles()

	if (isArticleLoading || isArticlesLoading) {
		return (
			<Container>
				<div className='py-12'>
					<Loading />
				</div>
			</Container>
		)
	}

	if (!article) return null

	return (
		<Container>
			<div className='py-12'>
				{/* Article Header */}
				<ArticleHeader article={article} />

				<div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
					{/* Left Column - Article Content */}
					<div className='lg:col-span-8'>
						{/* Article Navigation */}
						<ArticleNavigation currentArticle={article} articles={articles} />

						{/* Article Content */}
						<ArticleContent article={article} />
					</div>

					{/* Right Column - Articles & Comments */}
					<div className='lg:col-span-4 space-y-8'>
						{/* Comments Section */}
						<ArticleComments article={article} />

						{/* Latest Articles */}
						<ArticleLatest articles={articles} />

						{/* Popular Articles */}
						<ArticlePopular articles={articles} />

						{/* Featured Articles */}
						<ArticleFeatured articles={articles} />
					</div>
				</div>
			</div>
		</Container>
	)
}
