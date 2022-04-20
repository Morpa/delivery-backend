import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';

interface CreateClientParams {
  name: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ name, password }: CreateClientParams) {
    const clientExists = await prisma.clients.findFirst({
      where: {
        name: {
          mode: 'insensitive',
        },
      },
    });

    if (clientExists) {
      throw new Error('Client already exists');
    }

    const hashPassword = await hash(password, 10);

    const client = await prisma.clients.create({
      data: {
        name,
        password: hashPassword,
      },
    });

    return client;
  }
}
