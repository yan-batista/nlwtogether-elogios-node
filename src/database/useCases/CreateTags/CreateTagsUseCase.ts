import Tag from "../../entities/Tag";
import ITagRepository from "../../repositories/ITagRepository";

class CreateTagsUseCase {
  constructor(private tagRepository: ITagRepository) {}

  async execute(name: string) {
    // Não é permitido cadastrar tag sem nome
    if (!name) throw new Error("Nome inválido");

    // Não é permitido cadastrar mais de uma tag com o mesmo nome
    const isRegistred = await this.tagRepository.findByName(name);
    if (isRegistred) throw new Error("Tag já cadastrada");

    let tag = new Tag();
    tag = Object.assign({
      ...tag,
      name: name,
    });

    await this.tagRepository.create(tag);
  }
}

export default CreateTagsUseCase;
