import { v4 as uuid } from "uuid";

class Compliment {
  id: string;
  user_sender: string;
  user_receiver: string;
  tag_id: string;
  message: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }

    if (!this.created_at) {
      this.created_at = new Date();
    }

    if (!this.updated_at) {
      this.updated_at = new Date();
    }
  }
}

export default Compliment;
