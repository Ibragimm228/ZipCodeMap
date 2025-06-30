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
                    ? 'flex flex-col gap-3 py-8 px-6'
                    : 'flex flex-row items-center gap-2',
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
                            <Link 
                                to={item.href} 
                                className={cn(
                                    'relative flex items-center gap-5 px-8 py-5 rounded-lg transition-all duration-300 border-l-4 group-hover:translate-x-1',
                                    active 
                                        ? 'bg-slate-50 border-l-slate-600 text-slate-800 shadow-sm'
                                        : 'bg-transparent border-l-transparent text-slate-600 hover:bg-slate-50/50 hover:border-l-slate-300 hover:text-slate-800'
                                )}
                            >
                                <Icon 
                                    size={24} 
                                    className={cn(
                                        'transition-colors duration-300',
                                        active ? 'text-slate-600' : 'text-slate-500 group-hover:text-slate-600'
                                    )} 
                                />
                                <span className="font-medium text-lg">
                                    {item.label}
                                </span>
                            </Link>
                        ) : (
                            <Link 
                                to={item.href}
                                className={cn(
                                    'relative flex items-center gap-4 px-6 py-4 rounded-lg transition-all duration-300 group',
                                    active 
                                        ? 'bg-slate-100 text-slate-800 shadow-sm'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                                )}
                            >
                                <Icon 
                                    size={22} 
                                    className={cn(
                                        'transition-all duration-300',
                                        active 
                                            ? 'text-slate-600' 
                                            : 'text-slate-500 group-hover:text-slate-600 group-hover:scale-110'
                                    )} 
                                />
                                <span className={cn(
                                    'font-medium text-base transition-colors duration-300',
                                    active ? 'text-slate-800' : 'text-slate-600 group-hover:text-slate-800'
                                )}>
                                    {item.label}
                                </span>
                                {active && (
                                    <motion.div 
                                        className="absolute inset-0 border-2 border-slate-200 rounded-lg pointer-events-none"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                    />
                                )}
                                <div className={cn(
                                    'absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-300 pointer-events-none',
                                    !active && 'group-hover:border-slate-100 group-hover:shadow-sm'
                                )} />
                            </Link>
                        )}
                    </motion.li>
                )
            })}
        </motion.ul>
    )
}
