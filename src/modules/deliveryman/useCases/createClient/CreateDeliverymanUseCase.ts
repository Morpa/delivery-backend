import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';

interface CreateDeliverymanParams {
  name: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ name, password }: CreateDeliverymanParams) {
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        name: {
          mode: 'insensitive',
        },
      },
    });

    if (deliverymanExists) {
      throw new Error('Deliveryman already exists');
    }

    const hashPassword = await hash(password, 10);

    const deliveryman = await prisma.deliveryman.create({
      data: {
        name,
        password: hashPassword,
      },
    });

    return deliveryman;
  }
}
