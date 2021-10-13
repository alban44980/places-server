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
