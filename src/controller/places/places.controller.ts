import { Request, Response } from "express";
import Place from "../../models/place.model";
import { CreatePlaceInput } from "../../schema/place.schema";
import {
  createPlace,
  getMyCities,
  removeMyPlace,
} from "../../services/place.service";
import { getMyPlaces } from "../../services/place.service";
import { RemoveMyPlaceInput } from "../../schema/removeMyPlace.schema";

export async function createPlaceHandler(
  req: Request<{}, {}, CreatePlaceInput["body"]>,
  res: Response
) {
  try {
    const user = res.locals.user.dataValues;
    const place = await createPlace(req.body, user);
    if (place) {
      return res.status(201).send(place);
    } else {
      //the place already exists for this user
      return res.status(400);
    }
  } catch (e: any) {
    return res.status(500).send(e.message);
  }
}

export async function getMyPlacesHandler(req: Request, res: Response) {
  try {
    const user = res.locals.user.dataValues;

    const myPlaces = await getMyPlaces(user);

    return res.send(myPlaces);
  } catch (e) {
    res.status(404);
  }
}

// does not yet remove city if it has no more places assosciated with it
export async function removeMyPlaceHandler(
  req: Request<{}, {}, RemoveMyPlaceInput["body"]>,
  res: Response
) {
  try {
    const user = res.locals.user.dataValues;
    const myCities = await getMyCities(user);
    console.log("POOP", myCities);
    await removeMyPlace(user, req.body);
    return res.sendStatus(204);
  } catch (e: any) {
    return res.sendStatus(500);
  }
}
