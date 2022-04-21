import { Request, Response } from 'express';
import { AuthenticateDeliverymanUseCase } from './authenticateDeliverymanUseCase';

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { name, password } = request.body;

    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();

    const result = await authenticateDeliverymanUseCase.execute({
      name,
      password,
    });

    return response.json(result);
  }
}
