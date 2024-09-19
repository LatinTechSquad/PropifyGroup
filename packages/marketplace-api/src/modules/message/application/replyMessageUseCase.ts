import { IMessageRepository } from '../domain/IMessageRepository';
import { inject, injectable } from 'tsyringe';
import { ICreateMessageRequest } from './createMessage/ICreateMessageRequest';
import { messageContainer } from '../messageContainer';
import { UserEmail } from 'src/modules/User/domain/UserEmail';
import { UserPhone } from 'src/modules/User/domain/UserPhone';
import { Message } from '../domain/message';
import { MessageId } from '../domain/messageId';
import { typeMessage } from '../domain/typeMessage';
import { typeSubject } from '../domain/typeSubject';
@injectable()
export class ReplyMessageUseCase {
  private readonly _MessageRepository: IMessageRepository;
  constructor(@inject('messageRepository') messageRepository: IMessageRepository) {
    this._MessageRepository = messageRepository;
  }

  async run(body: ICreateMessageRequest): Promise<void> {
    const newMessage = await Message.create(
      new MessageId(body.id),
      body.user_id,
      new UserEmail(body.email),
      new UserPhone(body.phone),
      new typeSubject(body.subject),
      await new typeMessage(body.message, messageContainer.resolve('EncryptService')).encryptMessage(),
    );
    await this._MessageRepository.createMessage(newMessage);
  }
}
