import CreateComplimentsUseCase from "./CreateComplimentsUseCase";
import { Request, Response } from "express";

class CreateComplimentsController {
  constructor(private createComplimentsUseCase: CreateComplimentsUseCase) {}

  async handle(request: Request, response: Response) {
    const { user_sender, user_receiver, tag_id, message } = request.body;

    await this.createComplimentsUseCase.execute({ user_sender, user_receiver, tag_id, message });

    return response.send();
  }
}

export default CreateComplimentsController;
