import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../database/prismaClient';

interface AuthenticateDeliverymanParams {
  name: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ name, password }: AuthenticateDeliverymanParams) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        name,
      },
    });

    if (!deliveryman) {
      throw new Error('Name or password is invalid');
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error('Name or password is invalid');
    }

    const token = sign({ name }, `${process.env.JWT_SECRET}`, {
      subject: deliveryman.id,
      expiresIn: '1d',
    });

    return token;
  }
}
