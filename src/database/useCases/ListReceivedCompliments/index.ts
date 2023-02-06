import ComplimentsPostgresRepository from "../../repositories/implementations/ComplimentsPostgresRepository";
import ListReceivedComplimentsController from "./ListReceivedComplimentsController";
import ListReceivedComplimentsUseCase from "./ListReceivedComplimentsUseCase";

const complimentsRepository = new ComplimentsPostgresRepository();
const listReceivedComplimentsUseCase = new ListReceivedComplimentsUseCase(complimentsRepository);
const listReceivedComplimentsController = new ListReceivedComplimentsController(listReceivedComplimentsUseCase);

export default listReceivedComplimentsController;
