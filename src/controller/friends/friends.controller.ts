import { Request, Response } from "express";
import { getUserFriends, addFriend } from "../../services/friend.service";
import { AddFriendInput } from "../../schema/addFriend.schema";

export async function getFriends(req: Request, res: Response) {
  try {
    const user = res.locals.user.dataValues;

    const friends = getUserFriends(user);

    return res.send(friends);
  } catch (e) {
    res.status(404);
  }
}

export async function addFriendHandler(
  req: Request<{}, {}, AddFriendInput["body"]>,
  res: Response
) {
  try {
    const user = res.locals.user.dataValues;

    await addFriend(user, req.body.FriendId);

    res.sendStatus(201);
  } catch (e) {
    res.status(401);
  }
}
