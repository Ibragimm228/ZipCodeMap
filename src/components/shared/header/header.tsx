import { TopHeader } from './top-header'
import { BottomHeader } from './bottom-header'

export function Header() {
	return (
		<header className='w-full'>
			<TopHeader />
			<BottomHeader />
		</header>
	)
}
