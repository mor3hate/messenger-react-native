import { View, TextInput, Text } from 'react-native'
import { IField } from './field.interface'
import { Controller } from 'react-hook-form'
import clsx from 'clsx'

const Field = <T extends Record<string, any>>({
	control,
	rules,
	name,
	className,
	...rest
}: IField<T>): JSX.Element => {
	return (
		<View>
			<Controller
				control={control}
				rules={rules}
				name={name}
				render={({
					field: { value, onChange, onBlur },
					fieldState: { error }
				}) => (
					<>
						<View
							className={clsx(
								'bg-gray-500 w-full py-4 px-4 my-2 rounded-xl border border-transparent',
								{
									['border-red']: error
								}
							)}
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
								autoCapitalize='none'
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
								className='text-white text-base'
								{...rest}
							/>
						</View>
						{error && <Text className='text-red'>{error.message}</Text>}
					</>
				)}
			/>
		</View>
	)
}

export default Field
