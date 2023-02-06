import Compliment from "../entities/Compliment";

export interface ComplimentDTO {
  id: string;
  user_sender: {
    name: string;
    email: string;
  };
  user_receiver: {
    name: string;
    email: string;
  };
  tag: {
    name: string;
  };
  message: string;
  created_at: Date;
  updated_at: Date;
}

interface IComplimentRepository {
  create(compliment: Compliment): Promise<void>;
  findAllSent(user_id: string): Promise<ComplimentDTO[]>;
  findAllReceived(user_id: string): Promise<ComplimentDTO[]>;
}

export default IComplimentRepository;
