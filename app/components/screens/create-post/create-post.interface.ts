export type timeObject = {
	seconds: number
}
export interface IPost {
	lastPublished: timeObject
	postText: string
	postImage?: string
}

export interface IImgData {
	imageTitle: string
	path: string
	uri: string
}
