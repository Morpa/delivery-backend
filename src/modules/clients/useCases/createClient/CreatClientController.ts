import { Request, Response } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { name, password } = request.body;

    const createClientUseCase = new CreateClientUseCase();

    const result = await createClientUseCase.execute({
      name,
      password,
    });

    return response.json(result);
  }
}
