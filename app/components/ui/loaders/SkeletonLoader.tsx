import { FC } from 'react'
import SkeletonLoader from 'expo-skeleton-loader'

interface ISkeletonLoading {
	width: number
	height: number
	borderRadius: number
}

const SkeletonLoading: FC<ISkeletonLoading> = ({
	width,
	height,
	borderRadius
}) => {
	return (
		<SkeletonLoader duration={1000}>
			<SkeletonLoader.Container style={{ flex: 1 }}>
				<SkeletonLoader.Item
					style={{
						width: width,
						borderRadius: borderRadius,
						height: height
					}}
				/>
			</SkeletonLoader.Container>
		</SkeletonLoader>
	)
}

export default SkeletonLoading
