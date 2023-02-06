import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import IUserRepository from "../../repositories/IUserRepository";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ email, password }: IAuthenticateRequest) {
    // verificar se email existe
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new Error("Email ou senhas incorretas");

    // verificar se a senha está correta
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) throw new Error("Email ou senhas incorretas");

    // gerar token
    const token = sign({ email: user.email }, "b7317d6bf993b060c492402d67291e49", {
      subject: user.id,
      expiresIn: "1d",
    });

    return token;
  }
}

export default AuthenticateUserUseCase;
