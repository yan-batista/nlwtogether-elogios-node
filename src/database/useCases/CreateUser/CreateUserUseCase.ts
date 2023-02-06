import User from "../../entities/User";
import IUserRepository from "../../repositories/IUserRepository";
import { hash } from "bcryptjs";

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  admin: boolean;
}

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, email, password, admin = false }: CreateUserDTO) {
    // Não é permitido cadastrar um usuário sem email
    if (!email) {
      throw new Error("Email inválido");
    }

    // Regra de Negócio 2: Não é permitido cadastrar mais de um usuário com o mesmo email
    const isAlreadyRegistred = await this.userRepository.findByEmail(email);
    console.log(isAlreadyRegistred);
    if (isAlreadyRegistred) {
      throw new Error("Email já cadastrado");
    }

    // Se estiver tudo certo, criar usuário
    let user = new User();
    const passwordHash = await hash(password, 8);

    user = Object.assign({
      ...user,
      name: name,
      email: email,
      password: passwordHash,
      admin: admin,
    });

    await this.userRepository.create(user);
  }
}

export default CreateUserUseCase;
