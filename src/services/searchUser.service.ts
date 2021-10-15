import { omit } from "lodash";
import { UserAttributes } from "../interfaces";
import { User } from "../models/user.model";
const { Op } = require("sequelize");

export async function getAllUsers(user: UserAttributes, searchValue: string) {
  try {  
    const userSearched = await User.findAll({
      where: { 
            user_name: {
              [Op.ne]:  user.user_name,
              [Op.like]: searchValue 
            } 
          }
    });
    return omit(userSearched[0].dataValues, "password");
  } catch (e: any) {
    console.log(e);
    throw new Error(e);
  }
}