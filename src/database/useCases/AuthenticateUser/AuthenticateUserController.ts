import AuthenticateUserUseCase from "./AuthenticateUserUseCase";
import { Request, Response } from "express";

class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const token = await this.authenticateUserUseCase.execute({ email, password });

    return response.json(token);
  }
}

export default AuthenticateUserController;
