import { get } from "lodash"; //makes it safer to access a property that might not exist
import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt.utils";
import { reIssueAccessToken } from "../services/session.service";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //at the start of auth token, there will be the word Bearer. This means that the bearer of the token gets access to the system
  //below we will be removing this from the reques
  const accessToken = get(
    req,
    "headers.authorization",
    "".replace(/^Bearer\s/, "")
  );

  const refreshToken = get(req, "headers.x-refresh");

  if (!accessToken) {
    return next();
  }

  const { decoded, expired } = verifyJwt(accessToken);

  //this is going to attach the user to the res.local.user so the next function can have access to it
  if (decoded) {
    res.locals.user = decoded;
    return next();
  }

  //if the token has expired and there is a refresh token, then we can create a new accessToken token

  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken });

    if (newAccessToken) {
      res.setHeader("x-access-token", newAccessToken);
    }

    const result = verifyJwt(newAccessToken as string);

    res.locals.user = result.decoded;

    return next();
  }

  return next();
};

export default deserializeUser;
