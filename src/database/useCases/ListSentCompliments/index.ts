import ComplimentsPostgresRepository from "../../repositories/implementations/ComplimentsPostgresRepository";
import ListSentComplimentsPerUserController from "./ListSentComplimentsPerUserController";
import ListSentComplimentsPerUserUseCase from "./ListSentComplimentsPerUserUseCase";

const complimentsRepository = new ComplimentsPostgresRepository();
const listSentComplimentsPerUserUseCase = new ListSentComplimentsPerUserUseCase(complimentsRepository);
const listSentComplimentsPerUserController = new ListSentComplimentsPerUserController(
  listSentComplimentsPerUserUseCase
);

export default listSentComplimentsPerUserController;
