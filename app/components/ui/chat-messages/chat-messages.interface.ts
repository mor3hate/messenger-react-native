import { IMessage } from '@/components/screens/chat/message-interface'

export interface IChatMessageUI
	extends Pick<IMessage, 'text' | 'timestamp' | 'from' | 'docId'> {}

export interface IChatMessages {
	messages: IChatMessageUI[]
}
