import Tag from "../entities/Tag";

interface ITagRepository {
  create(tag: Tag): Promise<void>;
  findByName(name: string): Promise<Tag | null>;
  findAll(): Promise<Tag[] | null>;
}

export default ITagRepository;
