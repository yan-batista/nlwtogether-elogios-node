import TagsPostgresRepository from "../../repositories/implementations/TagsPostgresRepository";
import CreateTagsController from "./CreateTagsController";
import CreateTagsUseCase from "./CreateTagsUseCase";

const tagRepository = new TagsPostgresRepository();
const createTagUseCase = new CreateTagsUseCase(tagRepository);
const createTagsController = new CreateTagsController(createTagUseCase);

export default createTagsController;
