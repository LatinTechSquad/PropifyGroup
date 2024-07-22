import { userToken } from '@prisma/client';

export interface IUserTokenRepository {
  createToken(userId: string, token: string, expiresAt: Date): Promise<void>;
  revokeToken(token: string): Promise<void>;
  getToken(token: string): Promise<userToken | null>;
}
