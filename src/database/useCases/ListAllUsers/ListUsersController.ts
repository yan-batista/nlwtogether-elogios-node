import ListUsersUseCase from "./ListUsersUseCase";
import { Request, Response } from "express";

class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}

  async handle(request: Request, response: Response) {
    const users = await this.listUsersUseCase.execute();
    return response.json(users);
  }
}

export default ListUsersController;
