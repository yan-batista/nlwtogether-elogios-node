import { Pool } from "pg";
import createConnection from "../../connection";
import Tag from "../../entities/Tag";
import ITagRepository from "../ITagRepository";

class TagsPostgresRepository implements ITagRepository {
  private client: Pool;

  constructor() {
    createConnection().then((connection) => (this.client = connection));
  }

  async create({ id, name, created_at, updated_at }: Tag): Promise<void> {
    await this.client.query("INSERT INTO TAGS(ID, NAME, CREATED_AT, UPDATED_AT) VALUES ($1, $2, $3, $4)", [
      id,
      name,
      created_at,
      updated_at,
    ]);
  }

  async findByName(tagName: string): Promise<Tag | null> {
    const { rows } = await this.client.query("SELECT * FROM TAGS WHERE NAME = $1 LIMIT 1", [tagName]);

    if (rows.length > 0) {
      const { id, name, created_at, updated_at } = rows[0];
      const tag: Tag = {
        id: id,
        name: name,
        created_at: created_at,
        updated_at: updated_at,
      };
      return tag;
    }

    return null;
  }

  async findAll(): Promise<Tag[] | null> {
    const { rows } = await this.client.query("SELECT * FROM TAGS");

    if (rows.length > 0) {
      const tags: Tag[] = [];

      rows.map((row) => {
        const { id, name, created_at, updated_at } = row;
        const tag: Tag = {
          id: id,
          name: name,
          created_at: created_at,
          updated_at: updated_at,
        };
        tags.push(tag);
      });

      return tags;
    }

    return null;
  }
}

export default TagsPostgresRepository;
