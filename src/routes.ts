import { Express, Request, Response } from "express";
import validateResource from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";
function routes(app: Express) {
  app.get("/healthCheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post("/register", validateResource(createUserSchema));
}

export default routes;
