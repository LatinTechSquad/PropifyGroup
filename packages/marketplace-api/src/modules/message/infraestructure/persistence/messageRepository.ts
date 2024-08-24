import { PrismaClient } from '@prisma/client';
import { IMessageRepository } from '../../domain/IMessageRepository';
import { validateAdresseRol } from '../../domain/services/validateAdresseeRol';
import { InputRolError } from '../../domain/Error/InputRolError';
import { injectable } from 'tsyringe';
import { Message } from '../../domain/message';
import { NotFound } from '../../domain/Error/notFound';
import { createTypeMessageFromData } from '../../domain/services/messageMapper';

@injectable()
export class messageRepositoryPrisma implements IMessageRepository {
  constructor(private prisma: PrismaClient) {}

  async createMessage(newMessage: Message): Promise<void> {
    try {
      const remitente = await this.prisma.user.findFirst({ where: { id: newMessage.senderId.toString() } });
      const destinatario = await this.prisma.user.findFirst({ where: { id: newMessage.receiverId.toString() } });

      if (!remitente || !destinatario) {
        throw new NotFound('Usuario no encontrado');
      }

      const validacion = await validateAdresseRol(destinatario.user_type, remitente.user_type);

      if (validacion) {
        await this.prisma.message.create({
          data: {
            id: newMessage.id.value,
            sender_id: newMessage.senderId.toString(),
            receiver_id: destinatario.id,
            content: newMessage.content.toString(),
            conversation_id: newMessage.conversationId.toString(),
          },
        });
      } else {
        throw new InputRolError();
      }
    } catch (error) {
      console.error('Error al crear mensaje:', error);
      throw error;
    }
  }

  async readMessage(id: string): Promise<Message | null> {
    try {
      const messageData = await this.prisma.message.findUnique({ where: { id } });

      return messageData ? createTypeMessageFromData(messageData) : null;
    } catch (error) {
      console.error('Error al leer mensaje:', error);
      throw error;
    }
  }

  async deleteMessage(id: string, userId: string): Promise<void> {  // Cambiado de `userEmail` a `userId`
    try {
      const messageToDelete = await this.prisma.message.findUnique({ where: { id } });

      if (!messageToDelete) {
        throw new NotFound('Mensaje no encontrado');
      }

      if (userId === messageToDelete.receiver_id) {
        await this.prisma.message.update({
          where: { id },
          data: {
            receiver_id: '',
          },
        });
      } else if (userId === messageToDelete.sender_id) {  // Cambiada la condición para verificar el `sender_id`
        await this.prisma.message.update({
          where: { id },
          data: {
            sender_id: '',
          },
        });
      } else {
        throw new InputRolError();  // Lanzar error si no es remitente ni destinatario
      }
    } catch (error) {
      console.error('Error al eliminar mensaje:', error);
      throw error;
    }
  }

  async getMessages(userId: string): Promise<Message[] | null> {  // Eliminado `userEmail`
    try {
      const receivedMessages = await this.getReceivedMessages(userId);
      const sentMessages = await this.getSentMessages(userId);

      if (!receivedMessages && !sentMessages) {
        return null;
      }

      const allMessages: Message[] = [];
      if (sentMessages) {
        allMessages.push(...sentMessages);
      }

      if (receivedMessages) {
        allMessages.push(...receivedMessages);
      }

      return allMessages;
    } catch (error) {
      console.error('Error al obtener mensajes:', error);
      return [];
    }
  }

  async getReceivedMessages(userId: string): Promise<Message[] | null> {
    try {
      const messagesData = await this.prisma.message.findMany({ where: { receiver_id: userId } });

      if (!messagesData.length) {
        return null;
      }

      const messages = await Promise.all(messagesData.map(createTypeMessageFromData));
      return messages;
    } catch (error) {
      console.error('Error al obtener mensajes recibidos:', error);
      throw error;
    }
  }

  async getSentMessages(userId: string): Promise<Message[] | null> {
    try {
      const messagesData = await this.prisma.message.findMany({ where: { sender_id: userId } });

      if (!messagesData.length) {
        return null;
      }

      const messages = await Promise.all(messagesData.map(createTypeMessageFromData));
      return messages;
    } catch (error) {
      console.error('Error al obtener mensajes enviados:', error);
      throw error;
    }
  }

  async getMessageByContent(phrase: string): Promise<Message[] | null> {
    try {
      const messagesData = await this.prisma.message.findMany({
        where: {
          OR: [{ content: { contains: phrase } }],
        },
      });

      if (!messagesData.length) {
        return null;
      }

      const messages = await Promise.all(messagesData.map(createTypeMessageFromData));
      return messages;
    } catch (error) {
      console.error('Error al obtener mensajes por contenido:', error);
      throw error;
    }
  }
}
