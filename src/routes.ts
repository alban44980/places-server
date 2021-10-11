<<<<<<< HEAD
import { Express, Request, Response } from "express";
=======
import {Express, Request, Response} from "express";
>>>>>>> d699c01c1a88c5041d08f979afc0fab837958e74

function routes(app: Express) {
  app.get("/healthCheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });
}

export default routes;
