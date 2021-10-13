import { Request, Response } from "express";
import { CreatePlaceInput } from "../../schema/place.schema";
import { createPlace } from "../../services/place.service";

export async function createPlaceHandler(
  req: Request<{}, {}, CreatePlaceInput["body"]>,
  res: Response
) {
  try {
    const user = res.locals.user.dataValues;
    const place = await createPlace(req.body, user);
    if (place) {
      return res.status(201).send(place);
    }
  } catch (e: any) {
    return res.status(500).send(e.message);
  }
}
