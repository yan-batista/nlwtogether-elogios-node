import express, { Express, Request, Response, NextFunction } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import router from "./router";
import "./database/runMigrations.ts";

// config
dotenv.config();
const port = process.env.PORT;

// server
const app: Express = express();

app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
