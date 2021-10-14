import { FollowingAttributes, UserAttributes } from "../interfaces";
import User from "../models/user.model";
import Following from "../models/following.model";
import { omit } from "lodash";

export async function getUserFriends(user: UserAttributes) {
  try {
    //get user
    const userM = await User.findAll({
      where: { id: user.id },
      include: { model: Following },
    });
    //this works, dont touch for now
    return omit(userM[0].dataValues, "password");
    //get all friends that appear in followings table
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function addFriend(user: UserAttributes, friend: string) {
  try {
    Following.create({
      FriendId: friend,
      UserId: user.id,
    });
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function removeFriend(user: UserAttributes, friend: string) {
  try {
    console.log("friend", friend);
    await Following.destroy({
      where: {
        FriendId: friend,
        UserId: user.id,
      },
    });
  } catch (e: any) {
    throw new Error(e);
  }
}
