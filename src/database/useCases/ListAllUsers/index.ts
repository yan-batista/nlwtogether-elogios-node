import UserPostgresRepository from "../../repositories/implementations/UserPostgresRepository";
import ListUsersController from "./ListUsersController";
import ListUsersUseCase from "./ListUsersUseCase";

const userRepository = new UserPostgresRepository();
const listUsersUseCase = new ListUsersUseCase(userRepository);
const listUsersController = new ListUsersController(listUsersUseCase);

export default listUsersController;
