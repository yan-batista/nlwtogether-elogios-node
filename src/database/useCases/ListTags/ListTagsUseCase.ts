import ITagRepository from "../../repositories/ITagRepository";

class ListTagsUseCase {
  constructor(private tagRepository: ITagRepository) {}

  async execute() {
    const tags = await this.tagRepository.findAll();
    return tags;
  }
}

export default ListTagsUseCase;
