import { BeautyTips } from '@/components/home/beauty-tips'
import { BeautyTrends } from '@/components/home/beauty-trends'
import { Hero } from '@/components/home/hero/hero'
import { Latest } from '@/components/home/latest'

export function HomePage() {
	return (
		<>
			<Hero />
			<BeautyTips />
			<Latest />
			<BeautyTrends />
		</>
	)
}
