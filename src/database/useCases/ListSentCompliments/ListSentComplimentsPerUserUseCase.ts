import IComplimentRepository from "../../repositories/IComplimentRepository";

class ListSentComplimentsPerUserUseCase {
  constructor(private complimentsRepository: IComplimentRepository) {}

  async execute(user_id: string) {
    const compliments = await this.complimentsRepository.findAllSent(user_id);
    return compliments;
  }
}

export default ListSentComplimentsPerUserUseCase;
