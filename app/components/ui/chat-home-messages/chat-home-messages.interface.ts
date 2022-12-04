export interface IChatHomeMessageItem {
	displayName: string
	photoUrl: string
	id?: string
}

export interface IChatHomeMessageContainer {
	chats: IChatHomeMessageItem[]
}
