import { Request, Response } from "express";
import { CreateUserInput } from "../../schema/user.schema";
import { createUser } from "../../services/user.service";
import { omit } from "lodash";

export async function registerUser(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    if (user) {
      return res.status(201).send(omit(user.toJSON(), "password"));
    }
  } catch (e: any) {
    return res.status(409).send(e.message); //throw because it has vialotated uniq conflict of our User model.
  }
}
