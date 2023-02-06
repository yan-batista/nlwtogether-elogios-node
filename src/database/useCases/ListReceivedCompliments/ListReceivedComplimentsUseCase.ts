import IComplimentRepository from "../../repositories/IComplimentRepository";

class ListReceivedComplimentsUseCase {
  constructor(private complimentsRepository: IComplimentRepository) {}
  async execute(user_id: string) {
    const compliments = await this.complimentsRepository.findAllReceived(user_id);
    return compliments;
  }
}

export default ListReceivedComplimentsUseCase;
