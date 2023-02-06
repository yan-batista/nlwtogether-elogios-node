import ListSentComplimentsPerUserUseCase from "./ListSentComplimentsPerUserUseCase";
import { Request, Response } from "express";

class ListSentComplimentsPerUserController {
  constructor(private listSentComplimentsPerUserUseCase: ListSentComplimentsPerUserUseCase) {}

  async handle(request: Request, response: Response) {
    const id = request.user_id;
    const compliments = await this.listSentComplimentsPerUserUseCase.execute(id);
    return response.json(compliments);
  }
}

export default ListSentComplimentsPerUserController;
