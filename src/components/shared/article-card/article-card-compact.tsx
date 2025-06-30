import { getArticleLink } from '@/lib/utils'
import type { IArticle } from '@/types/interfaces'
import { Link } from 'react-router'

interface ArticleCardCompactProps {
	article: IArticle
	vertical?: boolean
}

export function ArticleCardCompact({
	article,
	vertical = false,
}: ArticleCardCompactProps) {
	return (
		<Link to={getArticleLink(article)}>
			<article className='group bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full'>
				<div
					className={`flex ${
						vertical ? 'flex-col' : 'flex-col sm:flex-row'
					} gap-4 sm:gap-6`}
				>
					<div
						className={`flex-shrink-0 ${
							vertical ? 'w-full h-48' : 'w-full sm:w-32 h-48 sm:h-32'
						} rounded-lg overflow-hidden`}
					>
						<img
							src={article.image}
							alt={article.title}
							className='w-full h-full object-cover'
						/>
					</div>

					<div className='flex-grow'>
						<div className='flex flex-wrap items-center gap-2 sm:gap-4 mb-2'>
							<span className='px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs sm:text-sm'>
								{article.type}
							</span>
							<span className='text-xs sm:text-sm text-gray-500'>
								{new Date(article.published_date || 0).toLocaleDateString()}
							</span>
						</div>

						<h3 className='text-lg sm:text-xl font-bold mb-2 group-hover:text-gray-600 transition-colors duration-300'>
							{article.title}
						</h3>

						<p className='text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none'>
							{article.summary}
						</p>

						<button className='text-sm sm:text-base text-gray-600 font-semibold hover:text-gray-500 transition-colors duration-300'>
							Read More →
						</button>
					</div>
				</div>
			</article>
		</Link>
	)
}
