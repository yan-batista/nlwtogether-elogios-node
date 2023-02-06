import ListTagsUseCase from "./ListTagsUseCase";
import { Request, Response } from "express";

class ListTagsController {
  constructor(private listTagsUseCase: ListTagsUseCase) {}

  async handle(request: Request, response: Response) {
    const tags = await this.listTagsUseCase.execute();
    return response.json(tags);
  }
}

export default ListTagsController;
