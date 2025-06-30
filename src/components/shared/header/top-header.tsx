import { Container } from '../container'
import { SearchIcon } from 'lucide-react'

export function TopHeader() {
	return (
		<div className='bg-gradient-to-r from-slate-100 via-gray-50 to-zinc-100 w-full border-b border-gray-200/30'>
			<Container className='flex items-center justify-between py-4 max-md:flex-col max-md:gap-6 max-md:py-6'>
				<div className='flex items-center gap-6 max-md:flex-col max-md:gap-4'>
					{/* Logo Image */}
					<div className="group relative">
						<div className="absolute -inset-1 bg-gradient-to-r from-gray-300/20 to-slate-300/25 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-300"></div>
						<div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-3 border border-gray-200/30 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-0.5">
							<img 
								src="https://cdn.leonardo.ai/users/a62f4751-2c49-4f46-a75a-951c2dd91cd6/generations/d3ed63c6-e088-4c01-ad7a-8cc797ebf88c/segments/2:4:1/Flux_Dev_Crafted_with_meticulous_simplicity_the_logo_for_Zip_C_1.jpg" 
								alt="Zip Code Map Logo" 
								className='w-12 h-12 rounded-xl object-cover'
							/>
						</div>
					</div>

					{/* Tagline */}
					<div className="text-center max-md:text-center">
						<span className='text-slate-700 font-light text-lg max-md:text-base'>
							Discover Geographic Insights
						</span>
						<p className='text-slate-500 text-sm font-light mt-0.5 max-md:hidden'>
							Navigate zip codes with precision
						</p>
					</div>
				</div>

				{/* Search Form */}
				<form
					action='/blog'
					className='group relative'
				>
					<div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300/15 to-slate-300/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
					<div className='relative flex items-center bg-white/50 backdrop-blur-sm rounded-2xl px-5 py-3 border border-gray-200/30 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-0.5'>
						<input
							type='text'
							name='search'
							placeholder='Search zip code insights...'
							className='bg-transparent outline-none text-slate-700 placeholder-slate-400 w-56 max-md:w-48 font-light'
						/>
						<button 
							type='submit' 
							className='ml-3 text-slate-500 hover:text-slate-700 transition-colors duration-200'
						>
							<SearchIcon size={20} />
						</button>
					</div>
				</form>
			</Container>
		</div>
	)
}
