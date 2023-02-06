import IUserRepository from "../../repositories/IUserRepository";

class ListUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute() {
    const users = this.userRepository.findAll();
    return users;
  }
}

export default ListUsersUseCase;
