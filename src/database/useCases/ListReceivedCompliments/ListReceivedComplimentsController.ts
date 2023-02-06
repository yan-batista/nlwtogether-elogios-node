import ListReceivedComplimentsUseCase from "./ListReceivedComplimentsUseCase";
import { Request, Response } from "express";

class ListReceivedComplimentsController {
  constructor(private listReceivedComplimentsUseCase: ListReceivedComplimentsUseCase) {}

  async handle(request: Request, response: Response) {
    const user_id = request.user_id;
    const compliments = await this.listReceivedComplimentsUseCase.execute(user_id);
    return response.json(compliments);
  }
}

export default ListReceivedComplimentsController;
