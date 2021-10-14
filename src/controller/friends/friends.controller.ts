import { Request, Response } from "express";
import {
  getUserFriends,
  addFriend,
  removeFriend,
} from "../../services/friend.service";
import { FriendInput } from "../../schema/friend.schema";

export async function getFriends(req: Request, res: Response) {
  try {
    const user = res.locals.user.dataValues;

    const friends = await getUserFriends(user);

    return res.send(friends);
  } catch (e) {
    res.status(404);
  }
}

export async function addFriendHandler(
  req: Request<{}, {}, FriendInput["body"]>,
  res: Response
) {
  try {
    const user = res.locals.user.dataValues;

    await addFriend(user, req.body.FriendId);

    res.sendStatus(201);
  } catch (e: any) {
    res.sendStatus(401);
  }
}

export async function removeFriendHandler(
  req: Request<{}, {}, FriendInput["body"]>,
  res: Response
) {
  try {
    const user = res.locals.user.dataValues;

    await removeFriend(user, req.body.FriendId);
    res.sendStatus(204);
  } catch (e: any) {
    res.sendStatus(500);
  }
}
