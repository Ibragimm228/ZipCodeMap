import { cn, getArticleLink } from '@/lib/utils'
import type { IArticle } from '@/types/interfaces'
import { Clock } from 'lucide-react'
import { Link } from 'react-router'

interface ArticleCardProps {
	article: IArticle
	className?: string
}

export function ArticleCardLarge({ article, className }: ArticleCardProps) {
	return (
		<Link to={getArticleLink(article)}>
			<article
				className={cn(
					'relative flex flex-col w-full h-full rounded-2xl overflow-hidden shadow-lg bg-zinc-900 group',
					'transition-all duration-300',
					className
				)}
				style={{ minWidth: 0, minHeight: '150px' }}
			>
				{/* Article Type Badge */}
				{article.type && (
					<span className='absolute top-2 left-2 bg-zinc-800/90 text-white text-xs font-semibold px-3 py-1 rounded-full z-20 shadow max-w-[70%] truncate'>
						{article.type}
					</span>
				)}
				{/* Article Image */}
				{article.image && (
					<img
						src={article.image}
						alt={article.title}
						className='w-full h-full object-cover object-center absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105'
						draggable={false}
					/>
				)}
				{/* Overlay for content */}
				<div className='absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/60 to-transparent z-10 pointer-events-none' />
				<div className='relative z-20 flex flex-col justify-end h-full w-full p-3 sm:p-4 md:p-5'>
					<div className='flex items-center justify-between mt-auto pt-1 gap-2 flex-wrap'>
						<h2 className='text-lg font-bold text-white mb-1 leading-tight line-clamp-2 break-words mt-auto text-ellipsis'>
							{article.title.slice(0, 30) + '...'}
						</h2>

						<div className='flex items-center gap-1 text-zinc-400 text-xs md:text-sm flex-shrink-0'>
							<Clock size={15} className='mr-1' />
							<span>{article.reading_time || '—'} min</span>
						</div>
					</div>
				</div>
			</article>
		</Link>
	)
}
