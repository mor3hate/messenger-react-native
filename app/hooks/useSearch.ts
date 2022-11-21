import { useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { SearchService } from '@/services/search.service'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedValue = useDebounce(searchTerm, 500)

	const { data, isSuccess, isLoading } = useQuery(
		['get data from search', debouncedValue],
		() => SearchService.GetProfilesFromSearch(debouncedValue),
		{
			select: data =>
				data.docs.map(doc => ({
					...doc.data(),
					id: doc.id
				}))
		}
	)

	const handleSearch = (text: string) => {
		setSearchTerm(text)
	}

	return { searchTerm, handleSearch, data, isSuccess }
}
