import { Link } from 'react-router'
import { motion } from 'framer-motion'

export function Footer() {
	const footerLinks = [
		{
			label: 'About',
			href: '/about',
			delay: 0.1
		},
		{
			label: 'Blog',
			href: '/blog',
			delay: 0.2
		},
		{
			label: 'Privacy Policy',
			href: '/privacy-policy',
			delay: 0.3
		},
		{
			label: 'Contact Us',
			href: '/contacts',
			delay: 0.4
		}
	]

	return (
		<footer className='relative mt-20 overflow-hidden'>
			{/* Background with gradient */}
			<div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-gray-50 to-zinc-50"></div>
			
			{/* Decorative elements */}
			<div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-gray-300/5 to-slate-300/10 rounded-full blur-3xl"></div>
			<div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-zinc-300/5 to-gray-300/10 rounded-full blur-3xl"></div>

			{/* Main content */}
			<div className='relative z-10 py-16'>
				<div className='max-w-6xl mx-auto px-4'>
					{/* Logo/Brand Section */}
					<motion.div 
						className='text-center mb-12'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						viewport={{ once: true }}
					>
						<h3 className='text-3xl md:text-4xl font-extralight bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-600 bg-clip-text text-transparent mb-4 tracking-tight'>
							Zip Code Map
						</h3>
						<p className='text-slate-500 font-light max-w-2xl mx-auto leading-relaxed'>
							Your trusted source for comprehensive zip code information, mapping data, and geographic insights across the United States.
						</p>
					</motion.div>

					{/* Navigation Links */}
					<motion.nav 
						className='mb-12'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
						viewport={{ once: true }}
					>
						<ul className='flex flex-wrap gap-2 justify-center'>
							{footerLinks.map((link) => (
								<motion.li
									key={link.href}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ 
										duration: 0.4, 
										delay: link.delay,
										ease: "easeOut" 
									}}
									viewport={{ once: true }}
								>
									<Link
										to={link.href}
										className='group relative inline-block'
									>
										{/* Background effect */}
										<div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300/15 to-slate-300/20 rounded-xl blur opacity-0 group-hover:opacity-40 transition duration-300"></div>
										
										{/* Link content */}
										<div className='relative px-6 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-gray-200/30 text-slate-600 hover:text-slate-800 hover:bg-white/50 transition-all duration-300 group-hover:-translate-y-0.5 shadow-sm hover:shadow-md'>
											<span className='font-light text-sm'>
												{link.label}
											</span>
										</div>
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.nav>

					{/* Divider */}
					<motion.div 
						className='flex justify-center mb-8'
						initial={{ opacity: 0, scaleX: 0 }}
						whileInView={{ opacity: 1, scaleX: 1 }}
						transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
						viewport={{ once: true }}
					>
						<div className='w-24 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent'></div>
					</motion.div>

					{/* Copyright and Additional Info */}
					<motion.div 
						className='text-center space-y-4'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
						viewport={{ once: true }}
					>
						<p className='text-slate-500 font-light text-sm'>
							© 2025 Zip Code Map. All Rights Reserved.
						</p>
						<p className='text-slate-400 font-light text-xs max-w-md mx-auto leading-relaxed'>
							Providing accurate zip code data and geographic insights to help you make informed location-based decisions.
						</p>
					</motion.div>
				</div>
			</div>
		</footer>
	)
}
