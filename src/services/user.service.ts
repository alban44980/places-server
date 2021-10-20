import { omit } from "lodash";
import bcrypt from "bcrypt";

import { UserAttributes } from "../interfaces";
import User from "../models/user.model";

export async function createUser(
  input: Omit<
    UserAttributes,
    | "createdAt"
    | "updatedAt"
    | "id"
    | "img"
    | "following_count"
    | "followers_count"
  >
) {
  try {
    //hash password

    const hash = await bcrypt.hash(
      input.password,
      process.env.saltWorkfactor || 10
    );
    //rewrite password with hash version
    input.password = hash;
    input.user_name = input.user_name.toLowerCase();
    input.email = input.email.toLowerCase();
    //return created user
    return await User.create(input);
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
  email = email.toLowerCase();
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

  return omit(user, "password");
  // return omit(user.toJSON(), "password");
}
