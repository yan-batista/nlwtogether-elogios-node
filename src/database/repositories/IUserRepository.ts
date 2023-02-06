import User from "../entities/User";

export interface UserDTO {
  id: string;
  name: string;
  email: string;
  admin: string;
  created_at: Date;
  updated_at: Date;
}

interface IUserRepository {
  create(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  findById(user_id: string): Promise<User | null>;
  findAll(): Promise<UserDTO[]>;
}

export default IUserRepository;
