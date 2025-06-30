import { AnimatePresence, motion } from 'framer-motion'
import { MenuIcon, XIcon } from 'lucide-react'
import { useState } from 'react'
import { Container } from '../container'
import { HeaderMenu } from './header-menu'

export function BottomHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// Закрытие меню при клике на пункт меню
	const handleMenuItemClick = () => {
		setIsMenuOpen(false)
	}

	return (
		<nav className='bg-white w-full border-b border-neutral-200 relative z-50'>
			<Container className='flex items-center justify-between max-md:justify-between max-md:px-4'>
				{/* Mobile menu button */}
				<motion.button
					className='md:hidden p-2 z-50 relative'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					animate={{ rotate: isMenuOpen ? 180 : 0 }}
					transition={{ duration: 0.3 }}
				>
					<AnimatePresence mode='wait'>
						{isMenuOpen ? (
							<motion.div
								key='close'
								initial={{ opacity: 0, rotate: -90 }}
								animate={{ opacity: 1, rotate: 0 }}
								exit={{ opacity: 0, rotate: 90 }}
								transition={{ duration: 0.2 }}
							>
								<XIcon size={24} className="text-slate-800" />
							</motion.div>
						) : (
							<motion.div
								key='menu'
								initial={{ opacity: 0, rotate: 90 }}
								animate={{ opacity: 1, rotate: 0 }}
								exit={{ opacity: 0, rotate: -90 }}
								transition={{ duration: 0.2 }}
							>
								<MenuIcon size={24} className="text-slate-800" />
							</motion.div>
						)}
					</AnimatePresence>
				</motion.button>

				{/* Desktop menu */}
				<div className='flex-1 flex justify-center'>
					<HeaderMenu 
						className='flex-row max-md:hidden text-nowrap gap-8' 
						onItemClick={handleMenuItemClick}
					/>
				</div>

				{/* Placeholder для баланса на мобильных */}
				<div className='md:hidden w-10'></div>

				{/* Mobile dropdown menu */}
				<AnimatePresence>
					{isMenuOpen && (
						<>
							{/* Overlay */}
							<motion.div
								className='fixed inset-0 bg-black/20 md:hidden z-40'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								onClick={() => setIsMenuOpen(false)}
							/>
							
							{/* Menu */}
							<motion.div
								className='absolute top-full left-0 right-0 bg-white border-b border-neutral-200 shadow-lg md:hidden z-50'
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: 'auto' }}
								exit={{ opacity: 0, height: 0 }}
								transition={{ duration: 0.3, ease: 'easeInOut' }}
							>
								<div className="py-4">
									<HeaderMenu 
										className='flex-col gap-2 px-4' 
										onItemClick={handleMenuItemClick}
									/>
								</div>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</Container>
		</nav>
	)
}
