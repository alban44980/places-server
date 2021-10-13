import { Request, Response } from "express";
import { validatePassword } from "../../services/user.service";
import { createSession } from "../../services/session.service";
import { signJwt } from "../../utils/jwt.utils";
import { updateSession } from "../../services/session.service";
import config from "config";

//create session on logging
export async function createUserSession(req: Request, res: Response) {
  //validate user passsword
  const user = await validatePassword(req.body);
  if (!user) {
    return res.status(401).send("Invalid email or password");
  }

  //create a session
  const session = await createSession(user.id, req.get("user-agent") || "");

  //create an access token
  const accesToken = signJwt(
    //payload contains a user and a reference to the session
    { ...user, session: session.id },
    //options
    { expiresIn: process.env.accessTokenTtl } //access token time to live 15 minutes
  );

  //create a refresh token
  const refreshToken = signJwt(
    { ...user, session: session.id },
    { expiresIn: process.env.refreshTokenTtl } //access token time to live 1 year
  );

  //return access and refrsh token

  return res.send({ accesToken, refreshToken });
}

export async function deleteUserSession(req: Request, res: Response) {
  //it's safe to access res.locals do to the requireUser middleware
  const sessionId = res.locals.user.session;
  //expire session as the user has logged out
  await updateSession(sessionId, false);
  return res.send({
    accessToken: null,
    refreshToken: null,
  });
}
