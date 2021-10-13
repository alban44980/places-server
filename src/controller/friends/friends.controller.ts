import { Request, Response } from "express";
import { getUserFriends } from "../../services/friend.service";
export async function getFriends(req: Request, res: Response) {
  try {
    const user = res.locals.user.dataValues;

    const friends = getUserFriends(user);

    return res.send(friends);
  } catch (e) {
    res.status(404);
  }
}
