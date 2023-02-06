import UserPostgresRepository from "../../repositories/implementations/UserPostgresRepository";
import CreateUserController from "./CreateUserController";
import CreateUserUseCase from "./CreateUserUseCase";

export const userRepository = new UserPostgresRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

export default createUserController;
