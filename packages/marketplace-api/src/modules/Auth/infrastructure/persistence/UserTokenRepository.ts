import { PrismaClient, UserToken } from '@prisma/client';
import { IUserTokenRepository } from '../../domain/IUserTokenRepository';

export class UserTokenRepository implements IUserTokenRepository {
  private prisma = new PrismaClient();

  public async createToken(userId: string, token: string, expiresAt: Date): Promise<void> {
    await this.prisma.userToken.create({
      data: {
        userId,
        token,
        expiresAt,
      },
    });
  }

  public async revokeToken(token: string): Promise<void> {
    await this.prisma.userToken.updateMany({
      where: { token },
      data: { revoked: true },
    });
  }

  public async getToken(token: string): Promise<UserToken | null> {
    return await this.prisma.userToken.findUnique({
      where: { token },
    });
  }
}
