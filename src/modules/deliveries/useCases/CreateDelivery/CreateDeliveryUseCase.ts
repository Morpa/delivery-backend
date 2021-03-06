import { prisma } from '../../../../database/prismaClient';

interface CreateDeliveryParams {
  item_name: string;
  id_client: string;
}

export class CreateDeliveryUseCase {
  async execute({ id_client, item_name }: CreateDeliveryParams) {
    const delivery = await prisma.deliveries.create({
      data: {
        id_client,
        item_name,
      },
    });

    return delivery;
  }
}
