import { FC } from 'react'
import { Control } from 'react-hook-form'
import Field from '@/components/ui/form/field/Field'
import { IChangeInfo } from './change-info.interface'
import { validEmail } from '@/shared/regex/email-regex'

const ChangeInfoFields: FC<{ control: Control<IChangeInfo> }> = ({
	control
}) => {
	return (
		<>
			<Field<IChangeInfo>
				placeholder='Set your nickname'
				control={control}
				name='displayName'
			/>
			<Field<IChangeInfo>
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
		</>
	)
}

export default ChangeInfoFields
