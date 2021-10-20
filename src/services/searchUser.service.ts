import { omit } from "lodash";
import { UserAttributes } from "../interfaces";
import { User } from "../models/user.model";
const { Op } = require("sequelize");

export async function getAllUsers(user: UserAttributes, searchValue: string) {
  try {
    searchValue = searchValue.toLowerCase();
    const userSearched = await User.findAll({
      attributes: { exclude: ["password"] },
      where: {
        user_name: {
          [Op.ne]: user.user_name,
          [Op.like]: `${searchValue}%`,
        },
      },
      limit: 20,
    });
    return userSearched;
  } catch (e: any) {
    throw new Error(e);
  }
}
