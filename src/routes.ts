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
import {
  createPlaceHandler,
  getMyPlacesHandler,
  removeMyPlaceHandler,
} from "./controller/places/places.controller";
import { createPlaceSchema } from "./schema/place.schema";
import {
  addFriendHandler,
  getFriends,
  removeFriendHandler,
  getFriendsCitiesPlacesHandler,
} from "./controller/friends/friends.controller";
import { createFriendSchema } from "./schema/friend.schema";
import { createSearchUserSchema } from "./schema/searchUser.schema";
import { sendAllSearchedUsers } from "./controller/searchUser/searchUser.controller";
import { addSavedPlaceSchema } from "./schema/savedPlaces.schema";
import {
  addSavedPlaceHandler,
  getSavedPlaces,
  removeSavedPlaceHandler,
} from "./controller/savedPlaces/savedPlaces.controller";
import { removeSavedPlaceSchema } from "./schema/removeSavedPlace.schema";
import { removeMyPlaceSchema } from "./schema/removeMyPlace.schema";

function routes(app: Express) {
  app.get("/healthCheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post("/register", validateResource(createUserSchema), registerUser);
  app.post("/login", validateResource(createSessionSchema), createUserSession);
  app.delete("/logout", deserializeUser, requireUser, deleteUserSession);

  //places
  // Create a place
  app.post(
    "/add/place",
    validateResource(createPlaceSchema),
    deserializeUser,
    requireUser,
    createPlaceHandler
  );

  // Remove a place
  app.delete(
    "/remove/myplace",
    validateResource(removeMyPlaceSchema),
    deserializeUser,
    requireUser,
    removeMyPlaceHandler
  );

  // Get my places
  app.get("/my/places", deserializeUser, requireUser, getMyPlacesHandler);

  // Get my places, cities and friends
  app.get(
    "/friendsCitiesPlaces",
    deserializeUser,
    requireUser,
    getFriendsCitiesPlacesHandler
  );

  // Add to saved places
  app.post(
    "/add/savedplace",
    validateResource(addSavedPlaceSchema),
    deserializeUser,
    requireUser,
    addSavedPlaceHandler
  );

  // Remove saved place
  app.delete(
    "/remove/savedplace",
    validateResource(removeSavedPlaceSchema),
    deserializeUser,
    requireUser,
    removeSavedPlaceHandler
  );

  // Get saved places
  app.get("/my/savedplaces", deserializeUser, requireUser, getSavedPlaces);

  //friends
  // Get all friends
  app.get("/my/friends", deserializeUser, requireUser, getFriends);

  // Remove/unfollow friend
  app.delete(
    "/remove/friend",
    validateResource(createFriendSchema),
    deserializeUser,
    requireUser,
    removeFriendHandler
  );
  // Add/follow friend
  app.post(
    "/add/friend",
    validateResource(createFriendSchema),
    deserializeUser,
    requireUser,
    addFriendHandler
  );
  // Searched user
  app.post(
    "/searched/user",
    validateResource(createSearchUserSchema),
    deserializeUser,
    requireUser,
    sendAllSearchedUsers
  );
}

export default routes;
