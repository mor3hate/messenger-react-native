import { FC } from 'react'
import { TextInput, View } from 'react-native'
import { ISearchField } from '@/components/ui/search/search-field.interface'

const SearchField: FC<ISearchField> = ({
	searchTerm,
	onChange,
	placeholder
}) => {
	return (
		<View
			className='bg-gray-500 w-[90%] py-3 px-4 my-2 rounded-xl self-center'
			style={{
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 1
				},
				shadowOpacity: 0.22,
				shadowRadius: 2.22,

				elevation: 3
			}}
		>
			<TextInput
				className='text-white text-base h-10'
				placeholderTextColor={'gray'}
				placeholder={placeholder}
				onChangeText={onChange}
				value={searchTerm}
			/>
		</View>
	)
}

export default SearchField
