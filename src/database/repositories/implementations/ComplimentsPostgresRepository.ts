import { Pool } from "pg";
import createConnection from "../../connection";
import Compliment from "../../entities/Compliment";
import IComplimentRepository, { ComplimentDTO } from "../IComplimentRepository";

class ComplimentsPostgresRepository implements IComplimentRepository {
  private client: Pool;

  constructor() {
    createConnection().then((connection) => (this.client = connection));
  }

  async create({ id, user_sender, user_receiver, tag_id, message, created_at, updated_at }: Compliment): Promise<void> {
    await this.client.query(
      "INSERT INTO COMPLIMENTS(ID, USER_SENDER, USER_RECEIVER, TAG_ID, MESSAGE, CREATED_AT, UPDATED_AT) VALUES($1,$2,$3,$4,$5,$6,$7)",
      [id, user_sender, user_receiver, tag_id, message, created_at, updated_at]
    );
  }

  async findAllSent(userId: string): Promise<ComplimentDTO[]> {
    const { rows } = await this.client.query(
      `SELECT c.id as compliment_id, c.message, c.created_at, c.updated_at, 
       tags.name as tag_name,
       uS.name as sender_name, uS.email as sender_email, 
       uR.name as receiver_name, uR.email as receiver_email
       FROM compliments as c 
       INNER JOIN users as uS ON (c.user_sender = uS.id) 
       INNER JOIN users as uR ON (c.user_receiver = uR.id)
       INNER JOIN tags ON (c.tag_id = tags.id)
       WHERE c.user_sender = $1`,
      [userId]
    );
    const compliments: ComplimentDTO[] = [];

    if (rows.length > 0) {
      rows.map((row) => {
        const {
          compliment_id,
          message,
          created_at,
          updated_at,
          tag_name,
          sender_name,
          sender_email,
          receiver_name,
          receiver_email,
        } = row;
        const compliment: ComplimentDTO = {
          id: compliment_id,
          user_sender: {
            name: sender_name,
            email: sender_email,
          },
          user_receiver: {
            name: receiver_name,
            email: receiver_email,
          },
          tag: {
            name: tag_name,
          },
          message,
          created_at,
          updated_at,
        };

        compliments.push(compliment);
      });
    }

    return compliments;
  }

  async findAllReceived(userId: string): Promise<ComplimentDTO[]> {
    const compliments: ComplimentDTO[] = [];
    // buscar no banco de dados
    const { rows } = await this.client.query(
      `SELECT c.id as compliment_id, c.message, c.created_at, c.updated_at,
      tags.name as tag_name, 
      uS.name as sender_name, uS.email as sender_email,
      uR.name as receiver_name, uR.email as receiver_email
      FROM COMPLIMENTS AS c
      INNER JOIN users as uS ON (c.user_sender = uS.id)
      INNER JOIN users as uR ON (c.user_receiver = uR.id)
      INNER JOIN tags ON (c.tag_id = tags.id)
      WHERE c.user_receiver = $1`,
      [userId]
    );

    if (rows.length > 0) {
      rows.map((row) => {
        const {
          compliment_id,
          message,
          created_at,
          updated_at,
          tag_name,
          sender_name,
          sender_email,
          receiver_name,
          receiver_email,
        } = row;

        const compliment: ComplimentDTO = {
          id: compliment_id,
          user_sender: {
            name: sender_name,
            email: sender_email,
          },
          user_receiver: {
            name: receiver_name,
            email: receiver_email,
          },
          tag: {
            name: tag_name,
          },
          message,
          created_at,
          updated_at,
        };

        compliments.push(compliment);
      });
    }

    return compliments;
  }
}

export default ComplimentsPostgresRepository;
