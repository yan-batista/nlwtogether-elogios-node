import { Request, Response } from "express";
import CreateTagsUseCase from "./CreateTagsUseCase";

class CreateTagsController {
  constructor(private createTagsUseCase: CreateTagsUseCase) {}

  async handle(request: Request, response: Response) {
    const { name } = request.body;

    await this.createTagsUseCase.execute(name);

    return response.send();
  }
}

export default CreateTagsController;
