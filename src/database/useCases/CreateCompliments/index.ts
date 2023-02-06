import ComplimentsPostgresRepository from "../../repositories/implementations/ComplimentsPostgresRepository";
import CreateComplimentsController from "./CreateComplimentsController";
import CreateComplimentsUseCase from "./CreateComplimentsUseCase";
import UserPostgresRepository from "../../repositories/implementations/UserPostgresRepository";

const complimentsRepository = new ComplimentsPostgresRepository();
const createComplimentsUseCase = new CreateComplimentsUseCase(complimentsRepository, new UserPostgresRepository());
const createComplimentsController = new CreateComplimentsController(createComplimentsUseCase);

export default createComplimentsController;
