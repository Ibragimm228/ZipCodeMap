import { articlesService } from '@/services/articles.service'
import { useQuery } from '@tanstack/react-query'
import slugify from 'slugify'

export function useGetArticles() {
	return useQuery({
		queryKey: ['all articles'],
		queryFn: async () => {
			return await articlesService.getAll()
		},
	})
}

export function useGetArticlesByType(type: string | null) {
	return useQuery({
		queryKey: ['articles', type],
		queryFn: async () => {
			const articles = await articlesService.getAll()
			return type?.length
				? articles?.filter(article => article.type === type)
				: articles
		},
	})
}

export function useGetArticleBySlug(slug: string) {
	return useQuery({
		queryKey: ['article', slug],
		queryFn: async () => {
			const articles = await articlesService.getAll()
			return (
				articles?.find(
					article =>
						slugify(article.title, { lower: true, strict: true }) ===
						slug.toLowerCase()
				) || null
			)
		},
	})
}

export function useGetArticleById(id: number) {
	return useQuery({
		queryKey: ['article', id],
		queryFn: async () => {
			const articles = await articlesService.getAll()
			return articles?.find(article => article.id === id) || null
		},
	})
}
