import { FollowingAttributes, UserAttributes } from "../interfaces";
import User from "../models/user.model";
import Following from "../models/following.model";
import City from "../models/city.model";
import Place from "../models/place.model";
import Tag from "../models/tags.model";
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
    //increment following by one for the user
    User.increment({ following_count: +1 }, { where: { id: user.id } });
    //increment followers by one for the target friend
    User.increment({ followers_count: +1 }, { where: { id: friend } });
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function removeFriend(user: UserAttributes, friend: string) {
  try {
    await Following.destroy({
      where: {
        FriendId: friend,
        UserId: user.id,
      },
    });
    //decrement following by one for the user
    User.increment({ following_count: -1 }, { where: { id: user.id } });
    //decrement followers by one for the target friend
    User.increment({ followers_count: -1 }, { where: { id: friend } });
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function getFriendsCitiesPlaces(user: UserAttributes) {
  try {
    //get a list of friends this user has
    const userFriendList = await getUserFriends(user);

    //iterate through each friend and get their cities and places

    const everything = [];

    for (let friend of userFriendList.Followings) {
      //get a list of each friend's cties and place
      let value = await User.findOne({
        attributes: { exclude: ["password"] },
        where: { id: friend.dataValues.FriendId },
        include: [
          {
            model: City,
            include: [
              {
                model: Place,
                include: [
                  {
                    model: Tag,
                  },
                ],
              },
            ],
          },
        ],
      });

      everything.push(value);
    }

    return everything;
  } catch (e: any) {
    throw new Error(e);
  }
}
