import { Router, Request, Response } from "express";

// Controllers
// user
import createUserController from "./database/useCases/CreateUser";
import listUsersController from "./database/useCases/ListAllUsers";
// tag
import createTagsController from "./database/useCases/CreateTags";
import listTagController from "./database/useCases/ListTags";
// compliment
import createComplimentsController from "./database/useCases/CreateCompliments";
import listSentComplimentsPerUserController from "./database/useCases/ListSentCompliments";
import listReceivedComplimentsController from "./database/useCases/ListReceivedCompliments";
// auth
import authenticateUserController from "./database/useCases/AuthenticateUser";

// Middlewares
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

// Routes
router.post("/users", (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});
router.get("/users", ensureAuthenticated, (request: Request, response: Response) => {
  return listUsersController.handle(request, response);
});

router.post("/tags", ensureAuthenticated, ensureAdmin, (request: Request, response: Response) => {
  return createTagsController.handle(request, response);
});
router.get("/tags", ensureAuthenticated, (request: Request, response: Response) => {
  return listTagController.handle(request, response);
});

router.post("/compliments", ensureAuthenticated, (request: Request, response: Response) => {
  return createComplimentsController.handle(request, response);
});
router.get("/users/compliments/sent", ensureAuthenticated, (request: Request, response: Response) => {
  return listSentComplimentsPerUserController.handle(request, response);
});
router.get("/users/compliments/received", ensureAuthenticated, (request: Request, response: Response) => {
  return listReceivedComplimentsController.handle(request, response);
});

router.post("/sessions", (request: Request, response: Response) => {
  return authenticateUserController.handle(request, response);
});

export default router;
