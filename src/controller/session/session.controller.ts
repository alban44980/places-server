import { Request, Response } from "express";
import { validatePassword } from "../../services/user.service";

export async function createUserSession(req: Request, res: Response) {
  //validate user passsword
  const user = await validatePassword(req.body);
  if(!user){
    return res.status(401).send("Invalid email or password");
  }
  //create a session
  //createSession is required. 
  const session = createSession(user._id, req.get("user-agent" || "")
  //create an access token
  //create a refresh token
  //return access and refrsh token
}

// export async function createSession(userId: string, userAgent: string) {

//   // const session = await SessionModel.create(user_id: userId, userAgent);

// }
