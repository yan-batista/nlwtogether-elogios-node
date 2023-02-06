import Compliment from "../../entities/Compliment";
import IComplimentRepository from "../../repositories/IComplimentRepository";
import IUserRepository from "../../repositories/IUserRepository";

interface ComplimentDTO {
  user_sender: string;
  user_receiver: string;
  tag_id: string;
  message: string;
}

class CreateComplimentsUseCase {
  constructor(private complimentRepository: IComplimentRepository, private userRepository: IUserRepository) {}

  async execute({ user_sender, user_receiver, tag_id, message }: ComplimentDTO) {
    // não pode cadastrar elogio para si
    if (user_sender === user_receiver) throw new Error("Não é possível cadastrar um elogio a si mesmo");

    // não pode cadastrar elogio para usuário inválido
    const user = this.userRepository.findById(user_receiver);
    if (!user) throw new Error("Usuário não encontrado");

    let compliment = new Compliment();
    compliment = Object.assign({
      ...compliment,
      user_sender,
      user_receiver,
      tag_id,
      message,
    });

    await this.complimentRepository.create(compliment);
  }
}

export default CreateComplimentsUseCase;
