import { MessageId } from "./messageId";
import { typeMessage } from "./typeMessage";
import { typeSubject } from "./typeSubject";

export class Message {
  id: MessageId;
  senderId: string;
  receiverId: string;
  content: typeMessage;
  conversationId: string; // Nueva propiedad
  sentAt: Date;
  subject?: typeSubject; // Opcional

  constructor(
    id: MessageId,
    senderId: string,
    receiverId: string,
    content: typeMessage,
    conversationId: string,
    sentAt: Date,
    subject?: typeSubject
  ) {
    this.id = id;
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.content = content;
    this.conversationId = conversationId;
    this.sentAt = sentAt;
    this.subject = subject;
  }

  static async create(
    id: MessageId,
    senderId: string,
    receiverId: string,
    content: typeMessage,
    conversationId: string, // Asegúrate de pasar este argumento
    subject?: typeSubject,
  ): Promise<Message> {
    const sentAt = new Date();

    return new Message(id, senderId, receiverId, content, conversationId, sentAt, subject);
  }
}
