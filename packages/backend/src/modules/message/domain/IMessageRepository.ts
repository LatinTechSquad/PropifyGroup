import { Message } from './message';
export interface IMessageRepository {
  createMessage: (newMessage: Message) => Promise<void>;
  readMessage: (id: string) => Promise<Message | null>;
  deleteMessage: (id: string) => Promise<void>;
  //getMessageByEmail: (email: string) => Promise<Message>;
  /*
  getMessages: (email: string) => Promise<message[]>; */
}
