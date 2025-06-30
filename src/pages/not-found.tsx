import { Link } from 'react-router'

export function NotFoundPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 flex items-center justify-center overflow-hidden'>
			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50"></div>
			<div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-gray-300/10 to-slate-300/15 rounded-full blur-3xl"></div>
			<div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-zinc-300/10 to-gray-300/15 rounded-full blur-3xl"></div>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-slate-200/5 to-gray-200/10 rounded-full blur-3xl"></div>

			{/* Main Content */}
			<div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
				{/* 404 Number */}
				<div className="relative mb-12">
					<h1 className='text-[12rem] md:text-[16rem] font-extralight bg-gradient-to-r from-slate-800 via-gray-700 to-zinc-600 bg-clip-text text-transparent leading-none tracking-tighter'>
						404
					</h1>
					<div className="absolute inset-0 bg-gradient-to-r from-gray-300/10 to-slate-300/15 blur-3xl"></div>
				</div>

				{/* Error Message */}
				<div className="space-y-6 mb-12">
					<span className="text-sm uppercase tracking-widest text-slate-500 font-medium block">
						Oops! Something went wrong
					</span>
					<h2 className='text-4xl md:text-5xl font-light text-slate-800 leading-tight'>
						Page Not 
						<span className="bg-gradient-to-r from-slate-600 to-zinc-600 bg-clip-text text-transparent"> Found</span>
					</h2>
					<p className='text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto'>
						The zip code page you're looking for doesn't exist or has been moved. 
						Let's get you back to exploring our geographic insights.
					</p>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
					<Link to='/'>
						<button className="group relative inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-slate-600 to-zinc-600 rounded-full hover:from-slate-700 hover:to-zinc-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
							<span className="relative z-10">Return to Home</span>
							<div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-zinc-600 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
							<svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
							</svg>
						</button>
					</Link>

					<Link to='/blog'>
						<button className="group relative inline-flex items-center px-8 py-4 text-lg font-light text-slate-600 bg-white/40 backdrop-blur-sm rounded-full hover:bg-white/60 border border-gray-200/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<span className="relative z-10">Browse Articles</span>
							<svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
							</svg>
						</button>
					</Link>
				</div>

				{/* Popular Links */}
				<div className="space-y-6">
					<span className="text-sm uppercase tracking-widest text-slate-500 font-medium block">
						Popular Pages
					</span>
					<div className="flex flex-wrap justify-center gap-4">
						{[
							{ label: 'About Us', href: '/about' },
							{ label: 'Contact', href: '/contact' },
							{ label: 'Blog', href: '/blog' },
						].map((link, index) => (
							<Link 
								key={index}
								to={link.href}
								className="group relative"
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300/15 to-slate-300/20 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
								<div className="relative bg-white/30 backdrop-blur-sm rounded-xl px-6 py-3 border border-gray-200/30 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
									<span className="text-slate-600 font-light group-hover:text-slate-800 transition-colors duration-200">
										{link.label}
									</span>
								</div>
							</Link>
						))}
					</div>
				</div>

				{/* Decorative Element */}
				<div className="mt-16 flex justify-center">
					<div className="relative">
						<div className="absolute -inset-4 bg-gradient-to-r from-gray-300/15 to-slate-300/20 rounded-full blur-2xl"></div>
						<div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-gray-100 flex items-center justify-center shadow-lg">
							<svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
