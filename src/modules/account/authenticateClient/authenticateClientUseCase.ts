import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../database/prismaClient';

interface AuthenticateClientParams {
  name: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ name, password }: AuthenticateClientParams) {
    const client = await prisma.clients.findFirst({
      where: {
        name,
      },
    });

    if (!client) {
      throw new Error('Name or password is invalid');
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error('Name or password is invalid');
    }

    const token = sign({ name }, `${process.env.JWT_SECRET}`, {
      subject: client.id,
      expiresIn: '1d',
    });

    return token;
  }
}
