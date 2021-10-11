// import session model

import { verifyJwt } from "../utils/jwt.utils";
import { signJwt } from "../utils/jwt.utils";
import { get } from "lodash";
import { findUser } from "./user.service";

// import { FilterQuery } from mongoose // it is the type of find query

export async function createSession(userId: string, userAgent: string) {
  const session = await SessionModel.create({ userId, userAgent });

  return session.toJSON();
}

export async function reIssueAccessToken({
  refreshToken,
}: {
  refreshToken: string;
}) {
  //validate refresh token
  const { decoded } = verifyJwt(refreshToken);

  //we need session id to make sure the session is still valid before re issusing session token
  if (!decoded || !get(decoded, "_id")) return false;

  const session = await SessionModel.findById(get(decoded, "session"));

  if (!session || !session.valid) return false;

  //
  const user = await findUser({ _id: session.user });

  if (!user) return false;

  //create an access token
  const accesToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: process.env.accessTokenTtl } //access token time to live 15 minutes
  );

  return accesToken;
}

// export async function findSessions(query: FilterQuery<SchemaDocument>) {
//   return sessionModel.find(query);
// }
