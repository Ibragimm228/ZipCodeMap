import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { HomeIcon, InfoIcon, MailIcon, RssIcon } from 'lucide-react'
import { Link, useLocation } from 'react-router'

interface HeaderMenuProps {
	className?: string;
	onItemClick?: () => void;
	isMobile?: boolean;
}

export function HeaderMenu({ className, onItemClick, isMobile = false }: HeaderMenuProps) {
	const location = useLocation()

	const menuItems = [
		{
			icon: HomeIcon,
			label: 'Home',
			href: '/',
			delay: 0.2
		},
		{
			icon: InfoIcon,
			label: 'About Us',
			href: '/about',
			delay: 0.3
		},
		{
			icon: RssIcon,
			label: 'Blog',
			href: '/blog',
			delay: 0.4
		},
		{
			icon: MailIcon,
			label: 'Contact Us',
			href: '/contacts',
			delay: 0.5
		}
	]

	const isActive = (href: string) => {
		if (href === '/') {
			return location.pathname === '/'
		}
		return location.pathname.startsWith(href)
	}

	return (
		<motion.ul
			className={cn(
				isMobile 
					? 'flex flex-col gap-2 py-6 px-4'
					: 'flex flex-row items-center gap-8',
				className
			)}
			initial={{ y: isMobile ? -20 : 0, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
		>
			{menuItems.map((item) => {
				const Icon = item.icon
				const active = isActive(item.href)
				
				return (
					<motion.li
						key={item.href}
						className={cn(
							'group relative',
							isMobile ? 'w-full' : ''
						)}
						initial={{ opacity: 0, x: isMobile ? -30 : 0, y: isMobile ? 0 : -10 }}
						animate={{ opacity: 1, x: 0, y: 0 }}
						transition={{ 
							delay: item.delay, 
							duration: 0.4,
							ease: "easeOut"
						}}
						onClick={onItemClick}
					>
						{isMobile ? (
							// Mobile Design
							<>
								<div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300/15 to-slate-300/20 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-300"></div>
								<Link 
									to={item.href} 
									className={cn(
										'relative flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 group-hover:-translate-y-0.5',
										active 
											? 'bg-white/60 backdrop-blur-sm border border-gray-200/40 shadow-lg text-slate-800'
											: 'bg-white/30 backdrop-blur-sm border border-gray-200/20 text-slate-600 hover:bg-white/50 hover:text-slate-800'
									)}
								>
									<Icon 
										size={20} 
										className={cn(
											'transition-colors duration-300',
											active ? 'text-slate-700' : 'text-slate-500 group-hover:text-slate-700'
										)} 
									/>
									<span className="font-light text-base">
										{item.label}
									</span>
									{active && (
										<div className="absolute right-4 w-2 h-2 bg-gradient-to-r from-slate-500 to-zinc-500 rounded-full"></div>
									)}
								</Link>
							</>
						) : (
							// Desktop Design
							<Link 
								to={item.href}
								className={cn(
									'relative flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300 group-hover:-translate-y-0.5',
									active 
										? 'text-slate-800'
										: 'text-slate-600 hover:text-slate-800'
								)}
							>
								{/* Background Effect */}
								<div className={cn(
									'absolute inset-0 rounded-xl transition-all duration-300',
									active 
										? 'bg-white/60 backdrop-blur-sm border border-gray-200/40 shadow-lg'
										: 'bg-white/0 group-hover:bg-white/40 group-hover:backdrop-blur-sm group-hover:border group-hover:border-gray-200/30 group-hover:shadow-md'
								)}></div>
								
								{/* Content */}
								<Icon 
									size={18} 
									className={cn(
										'relative z-10 transition-colors duration-300',
										active ? 'text-slate-700' : 'text-slate-500 group-hover:text-slate-700'
									)} 
								/>
								<span className={cn(
									'relative z-10 font-light text-sm transition-colors duration-300',
									active ? 'text-slate-800' : 'text-slate-600 group-hover:text-slate-800'
								)}>
									{item.label}
								</span>

								{/* Active Indicator */}
								{active && (
									<motion.div 
										className="absolute bottom-0 left-1/2 w-6 h-0.5 bg-gradient-to-r from-slate-600 to-zinc-600 rounded-full"
										initial={{ width: 0, x: '-50%' }}
										animate={{ width: 24, x: '-50%' }}
										transition={{ duration: 0.3, ease: "easeOut" }}
									/>
								)}
							</Link>
						)}
					</motion.li>
				)
			})}
		</motion.ul>
	)
}
