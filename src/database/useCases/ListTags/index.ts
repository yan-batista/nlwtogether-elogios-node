import TagsPostgresRepository from "../../repositories/implementations/TagsPostgresRepository";
import ListTagsController from "./ListTagsController";
import ListTagsUseCase from "./ListTagsUseCase";

const tagRepository = new TagsPostgresRepository();
const listTagsUseCase = new ListTagsUseCase(tagRepository);
const listTagController = new ListTagsController(listTagsUseCase);

export default listTagController;
