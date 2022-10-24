import { FC } from 'react'
import { Control } from 'react-hook-form'
import { IUserAuth } from '@/shared/types/user.types'
import Field from '@/components/ui/form/field/Field'
import { validEmail } from '@/shared/regex/email-regex'

const AuthFields: FC<{ control: Control<IUserAuth> }> = ({ control }) => {
	return (
		<>
			<Field<IUserAuth>
				placeholder='Enter email'
				control={control}
				name='email'
				rules={{
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Email is not valid'
					}
				}}
			/>
			<Field<IUserAuth>
				placeholder='Enter password'
				control={control}
				name='password'
				rules={{
					required: 'Password is required',
					minLength: {
						value: 8,
						message: 'Password should be 8 characters length'
					}
				}}
			/>
		</>
	)
}

export default AuthFields
