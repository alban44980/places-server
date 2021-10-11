//when a request comes in, we are gong to provide a schema, it will validate the request against the schema
//example when a user logging, we are going to vlidate that there is an email and password, that the values are string, that the email has an email format
// using zo

import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      //allows use to validate the body, query and params of the reques
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e: any) {
      return res.status(400).send(e.errors);
    }
  };

export default validate;
