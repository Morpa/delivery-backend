import { Request, Response } from 'express';
import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';

export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { name, password } = request.body;

    const createDeliverymanUseCase = new CreateDeliverymanUseCase();

    const result = await createDeliverymanUseCase.execute({
      name,
      password,
    });

    return response.json(result);
  }
}
