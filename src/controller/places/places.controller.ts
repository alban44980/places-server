import { Request, Response } from "express";

export async function createPlace(req: Request, res: Response) {
  console.log(res.locals.user);
  res.send("poop from controller");
}
