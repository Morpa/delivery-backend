import { Request, Response } from 'express';
import { AuthenticateClientUseCase } from './authenticateClientUseCase';

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { name, password } = request.body;

    const authenticateClientUseCase = new AuthenticateClientUseCase();

    const result = await authenticateClientUseCase.execute({
      name,
      password,
    });

    return response.json(result);
  }
}
