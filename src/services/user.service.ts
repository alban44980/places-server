import { omit } from "lodash";

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  //get user by email
  // const user = await userModel.findOne({email})

  //if user does not exists, return false
  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  //if password is not valid, return false
  if (!isValid) {
    return false;
  }

  return omit(user.toJSON(), "password");
}
