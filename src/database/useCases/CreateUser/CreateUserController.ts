import { Request, Response } from "express";
import CreateUserUseCase from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { name, email, password, admin } = request.body;

    await this.createUserUseCase.execute({ name, email, password, admin });

    return response.send();
  }
}

export default CreateUserController;
