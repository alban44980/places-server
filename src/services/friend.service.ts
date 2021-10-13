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

    return omit(userM, "password");
    //get all friends that appear in followings table
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function addFriend(user: UserAttributes, friend: string) {
  try {
    console.log(user);
    Following.create(
      {
        FriendId: friend,
      },

      { include: { model: User }, where: { id: user.id } }
    );

    // Following.update({ UserId: user.id }, { where: { FriendId: friend } });
  } catch (e: any) {
    throw new Error(e);
  }
}
