import { cn } from '@/lib/utils'

interface ArticleCardSkeletonProps {
	className?: string
}

export function ArticleCardSkeleton({ className }: ArticleCardSkeletonProps) {
	return (
		<div
			className={cn(
				'relative flex flex-col w-full h-full rounded-2xl overflow-hidden shadow-lg bg-zinc-900',
				'animate-pulse',
				className
			)}
			style={{ minWidth: 0, minHeight: '150px' }}
		>
			{/* Skeleton Type Badge */}
			<div className='absolute top-2 left-2 bg-zinc-800/90 w-20 h-5 rounded-full z-20' />

			{/* Skeleton Image */}
			<div className='w-full h-full absolute inset-0 z-0 bg-zinc-800' />

			{/* Overlay for content */}
			<div className='absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/60 to-transparent z-10' />

			<div className='relative z-20 flex flex-col justify-end h-full w-full p-3 sm:p-4 md:p-5'>
				<div className='flex items-center justify-between mt-auto pt-1 gap-2 flex-wrap'>
					{/* Skeleton Title */}
					<div className='h-6 bg-zinc-800 rounded w-3/4 mb-1' />

					{/* Skeleton Reading Time */}
					<div className='flex items-center gap-1 flex-shrink-0'>
						<div className='w-16 h-4 bg-zinc-800 rounded' />
					</div>
				</div>
			</div>
		</div>
	)
}
