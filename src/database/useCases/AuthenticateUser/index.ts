import UserPostgresRepository from "../../repositories/implementations/UserPostgresRepository";
import AuthenticateUserController from "./AuthenticateUserController";
import AuthenticateUserUseCase from "./AuthenticateUserUseCase";

const useRepository = new UserPostgresRepository();
const authenticateUserUseCase = new AuthenticateUserUseCase(useRepository);
const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);

export default authenticateUserController;
