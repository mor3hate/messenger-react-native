import { timeObject } from '@/components/screens/create-post/create-post.interface'

export const setTimeHelper = (timeObject: timeObject) => {
	const result = new Date()
	result.setTime(timeObject.seconds * 1000)

	return result.toLocaleString('ru-RU')
}
