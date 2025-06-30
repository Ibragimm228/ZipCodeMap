import { ArticleCardCompact } from '@/components/shared/article-card/article-card-compact'
import { Container } from '@/components/shared/container'
import { Loading } from '@/components/ui/loading'
import { useGetArticles, useGetArticlesByType } from '@/hooks/useArticles'
import { SearchIcon } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'

export function BlogPage() {
	const [searchParams] = useSearchParams()
	const type = searchParams.get('type')
	const searchQuery = searchParams.get('search')

	const { data: allArticles, isLoading: isLoadingAll } = useGetArticles()
	const { data: articlesByTypes, isLoading: isLoadingByType } =
		useGetArticlesByType(type)

	const articles = searchQuery?.length
		? articlesByTypes?.filter(article =>
				article.title.toLowerCase().includes(searchQuery?.toLowerCase() || '')
		  )
		: articlesByTypes

	// Get unique article types for filtering
	const types = [...new Set(allArticles?.map(article => article.type))]

	const isLoading = isLoadingAll || isLoadingByType

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50'>
			{/* Hero Header Section */}
			<section className='relative py-32 overflow-hidden'>
				<div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50"></div>
				<div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-gray-300/10 to-slate-300/15 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-zinc-300/10 to-gray-300/15 rounded-full blur-3xl"></div>
				
				<Container className="relative z-10">
					<div className='text-center max-w-4xl mx-auto'>
						<span className="text-sm uppercase tracking-widest text-slate-500 font-medium mb-6 block">
							Welcome to
						</span>
						<h1 className='text-7xl md:text-8xl font-extralight bg-gradient-to-r from-slate-800 via-gray-700 to-zinc-600 bg-clip-text text-transparent mb-6 tracking-tight leading-none'>
							Zip Code Map
						</h1>
						<p className='text-2xl md:text-3xl text-slate-500 font-light mb-4'>
							My Zip Code Map Blog
						</p>
						<p className='text-lg text-slate-400 font-light leading-relaxed max-w-2xl mx-auto'>
							Discover comprehensive zip code insights, mapping data, and geographic trends 
							to help you navigate and understand location-based information.
						</p>
					</div>
				</Container>
			</section>

			{/* Search and Filter Section */}
			<section className='py-16 relative'>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent"></div>
				<Container className="relative">
					<div className='flex flex-col gap-8 items-center justify-center max-w-4xl mx-auto'>
						{/* Search Bar */}
						<form
							action='/blog'
							className='relative group w-full max-w-2xl'
						>
							<div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300/20 to-slate-300/25 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
							<div className='relative flex items-center bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-200/30 shadow-xl hover:shadow-2xl transition-all duration-300'>
								<input
									type='text'
									name='search'
									placeholder='Search zip code insights...'
									defaultValue={searchQuery || ''}
									className='bg-transparent outline-none text-slate-700 placeholder-slate-400 w-full text-lg font-light'
								/>
								<button type='submit' className='text-slate-400 hover:text-slate-600 transition-colors duration-200 ml-4'>
									<SearchIcon size={24} />
								</button>
							</div>
						</form>

						{/* Type Filter */}
						<div className='flex flex-wrap gap-3 justify-center'>
							<Link
								to='/blog'
								className={`group relative px-6 py-3 rounded-full text-sm font-light transition-all duration-300 ${
									!type
										? 'bg-gradient-to-r from-slate-600 to-zinc-600 text-white shadow-xl'
										: 'bg-white/40 backdrop-blur-sm text-slate-600 hover:bg-white/60 border border-gray-200/30'
								}`}
							>
								<span className="relative z-10">All Articles</span>
								{!type && (
									<div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-zinc-600 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
								)}
							</Link>
							{types?.map((articleType, index) => (
								<Link
									key={index}
									to={`/blog?type=${encodeURIComponent(articleType || '')}`}
									className={`group relative px-6 py-3 rounded-full text-sm font-light transition-all duration-300 ${
										type === articleType
											? 'bg-gradient-to-r from-slate-600 to-zinc-600 text-white shadow-xl'
											: 'bg-white/40 backdrop-blur-sm text-slate-600 hover:bg-white/60 border border-gray-200/30'
									}`}
								>
									<span className="relative z-10">{articleType}</span>
									{type === articleType && (
										<div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-zinc-600 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
									)}
								</Link>
							))}
						</div>
					</div>
				</Container>
			</section>

			{/* Articles Grid */}
			<section className='py-20'>
				<Container>
					{isLoading ? (
						<div className="flex items-center justify-center py-20">
							<div className="relative">
								<div className="absolute -inset-4 bg-gradient-to-r from-gray-300/15 to-slate-300/20 rounded-full blur-2xl animate-pulse"></div>
								<Loading size={48} className="relative text-slate-500" />
							</div>
						</div>
					) : articles?.length ? (
						<div className='grid gap-8 max-w-4xl mx-auto'>
							{articles.map((article, index) => (
								<div 
									key={index}
									className="group relative"
									style={{ animationDelay: `${index * 100}ms` }}
								>
									<div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300/15 to-slate-300/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
									<div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
										<ArticleCardCompact article={article} />
									</div>
								</div>
							))}
						</div>
					) : (
						<div className='text-center py-20 max-w-2xl mx-auto'>
							<div className="relative inline-block mb-8">
								<div className="absolute -inset-4 bg-gradient-to-r from-gray-300/15 to-slate-300/20 rounded-full blur-2xl"></div>
								<div className="relative w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-slate-100 to-gray-100 flex items-center justify-center">
									<SearchIcon size={32} className="text-slate-400" />
								</div>
							</div>
							<h3 className='text-3xl font-light text-slate-700 mb-4'>
								No articles found
							</h3>
							<p className='text-lg text-slate-500 font-light leading-relaxed'>
								{searchQuery
									? `No zip code insights found matching "${searchQuery}"`
									: 'No articles available in this category at the moment'}
							</p>
						</div>
					)}
				</Container>
			</section>
		</div>
	)
}
