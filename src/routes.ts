import { Express, Request, Response } from "express";
import validateResource from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";
import { createSessionSchema } from "./schema/session.schema";
import requireUser from "./middleware/requireUser";
import deserializeUser from "./middleware/deseriaizeUser";
import { registerUser } from "./controller/session/user.controller";
import {
  createUserSession,
  deleteUserSession,
} from "./controller/session/session.controller";
import { createPlaceHandler } from "./controller/places/places.controller";
import { createPlaceSchema } from "./schema/place.schema";
import { getFriends } from "./controller/friends/friends.controller";

function routes(app: Express) {
  app.get("/healthCheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post("/register", validateResource(createUserSchema), registerUser);
  app.post("/login", validateResource(createSessionSchema), createUserSession);
  app.delete("/logout", deserializeUser, requireUser, deleteUserSession);

  //places
  app.post(
    "/place",
    deserializeUser,
    requireUser,
    validateResource(createPlaceSchema),
    createPlaceHandler
  );

  //friends
  app.get("/my/friends", deserializeUser, requireUser, getFriends);
}

export default routes;
