import { Request, Response, NextFunction } from "express";
import { userRepository } from "../database/useCases/CreateUser";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const user_id = request.user_id;
  const user = await userRepository.findById(user_id);
  const isAdmin = user?.admin;

  if (isAdmin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized - Not Admin",
  });
}
