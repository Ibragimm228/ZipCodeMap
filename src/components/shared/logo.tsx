import { Sparkles } from 'lucide-react'
import { Link } from 'react-router'

export function Logo() {
	return (
		<Link to='/' className='flex items-center gap-2 select-none'>
			<Sparkles size={32} className='text-pink-500' />
			<h1 className='text-2xl font-bold leading-tight text-white'>
				<span className='text-pink-500'>101</span> Beauty Tips
			</h1>
		</Link>
	)
}
