import { Request, Response } from "express";
import { SearchUserInput } from "../../schema/searchUser.schema";
import { getAllUsers } from "../../services/searchUser.service";

export async function sendAllSearchedUsers(
  req: Request<{}, {}, SearchUserInput["body"]>,
  res: Response
) {
  try {
    const user = res.locals.user.dataValues;

    const results = await getAllUsers(user, req.body.searchValue);
    return res.status(200).send(results);
  } catch (e: any) {
    res.status(404);
  }
}
