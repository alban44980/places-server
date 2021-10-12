// import session model

import { verifyJwt } from "../utils/jwt.utils";
import { signJwt } from "../utils/jwt.utils";
import { get } from "lodash";
import Session from "../models/session.model";
import User from "../models/user.model";

export async function createSession(userId: string, userAgent: string) {
  const session = await Session.create({ id: userId, user_agent: userAgent });

  return session;
  // return session.toJSON();
}

export async function reIssueAccessToken({
  refreshToken,
}: {
  refreshToken: string;
}) {
  //validate refresh token
  const { decoded } = verifyJwt(refreshToken);

  //we need session id to make sure the session is still valid before re issusing session token
  if (!decoded || !get(decoded, "id")) return false;

  const session = await Session.findByPk(get(decoded, "session"));

  if (!session || !session.valid) return false;

  //
  const user = await User.findOne({ where: { id: session.id } });

  if (!user) return false;

  //create an access token
  const accesToken = signJwt(
    { ...user, session: session.id },
    { expiresIn: process.env.accessTokenTtl } //access token time to live 15 minutes
  );

  return accesToken;
}

// export async function findSessions(query: FilterQuery<SchemaDocument>) {
//   return sessionModel.find(query);
// }
