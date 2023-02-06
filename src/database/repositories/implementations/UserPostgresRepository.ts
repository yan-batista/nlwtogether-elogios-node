import User from "../../entities/User";
import IUserRepository, { UserDTO } from "../IUserRepository";
import createConnection from "../../connection";
import { Pool } from "pg";

class UserPostgresRepository implements IUserRepository {
  private client: Pool;

  constructor() {
    createConnection().then((connection) => (this.client = connection));
  }

  async create({ id, name, email, password, admin, created_at, updated_at }: User): Promise<void> {
    await this.client.query(
      "INSERT INTO USERS(ID, NAME, EMAIL, PASSWORD, ADMIN, CREATED_AT, UPDATED_AT) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [id, name, email, password, admin, created_at, updated_at]
    );
  }

  async findByEmail(userEmail: string): Promise<User | null> {
    const { rows } = await this.client.query("SELECT * FROM USERS WHERE EMAIL = $1 LIMIT 1", [userEmail]);

    if (rows.length > 0) {
      const { id, name, email, password, admin, created_at, updated_at } = rows[0];
      const user: User = {
        id: id,
        name: name,
        email: email,
        password: password,
        admin: admin,
        created_at: created_at,
        updated_at: updated_at,
      };

      return user;
    }

    return null;
  }

  async findById(userId: string): Promise<User | null> {
    const { rows } = await this.client.query("SELECT * FROM USERS WHERE ID = $1 LIMIT 1", [userId]);

    if (rows.length > 0) {
      const { id, name, email, password, admin, created_at, updated_at } = rows[0];
      const user: User = {
        id: id,
        name: name,
        email: email,
        password: password,
        admin: admin,
        created_at: created_at,
        updated_at: updated_at,
      };

      return user;
    }

    return null;
  }

  async findAll(): Promise<UserDTO[]> {
    const { rows } = await this.client.query("SELECT * FROM USERS");

    const users: UserDTO[] = [];

    if (rows.length > 0) {
      rows.map((row) => {
        const { id, name, email, admin, created_at, updated_at } = row;
        const user: UserDTO = {
          id: id,
          name: name,
          email: email,
          admin: admin,
          created_at: created_at,
          updated_at: updated_at,
        };
        users.push(user);
      });
    }

    return users;
  }
}

export default UserPostgresRepository;
