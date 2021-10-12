import { omit } from "lodash";
import bcrypt from "bcrypt";

import { UserAttributes } from "../interfaces";
import User from "../models/user.model";

export async function createUser(
  input: Omit<
    UserAttributes,
    "createdAt" | "updatedAt" | "id" | "profile_pic" | "following" | "followers"
  >
) {
  try {
    //hash password
    if (process.env.saltWorkFactor) {
      var hash = await bcrypt.hash(input.password, process.env.saltWorkFactor);
      //rewrite password with hash version
      input.password = hash;
      //return created user
      return await User.create(input);
    }
  } catch (e: any) {
    throw new Error(e);
  }
}

//checks email and password
//if password is correct, it returns the user object
//if password is inccorect, returns false

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  //get user by email
  const user = await User.findOne({ where: { email } });

  //if user does not exists, return false
  if (!user) {
    return false;
  }

  const isValid = await bcrypt.compare(password, user.password);

  //if password is not valid, return false
  if (!isValid) {
    return false;
  }

  return omit(user.toJSON(), "password");
}

// export async function findUser(query: FilterQuery<UserDocument>) {
//   return UserModel.findOne(query);
// }
