import { Request, Response } from "express";
import { CreatePlaceInput } from "../../schema/place.schema";
import {
  createPlace,
  getMyCitiesPlaces,
  removeMyPlace,
} from "../../services/place.service";
import { getMyPlaces } from "../../services/place.service";
import { RemoveMyPlaceInput } from "../../schema/removeMyPlace.schema";
import { OtherUsInput } from "../../schema/otherUserInfo.schema";

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

export async function getMyCitiesPlacesHandler(req: Request, res: Response) {
  try {
    const user = res.locals.user.dataValues;

    const myCitiesPlaces = await getMyCitiesPlaces(user);
    return res.status(200).send(myCitiesPlaces);
  } catch (e) {
    res.sendStatus(404);
  }
}

export async function getOtherUserCitiesPlacesHandler(
  req: Request<{}, {}, OtherUsInput["body"]>,
  res: Response
) {
  try {
    const otherUser = { id: req.body.userId };

    const myCitiesPlaces = await getMyCitiesPlaces(otherUser);
    return res.status(200).send(myCitiesPlaces);
  } catch (e) {
    res.sendStatus(404);
  }
}

export async function removeMyPlaceHandler(
  req: Request<{}, {}, RemoveMyPlaceInput["body"]>,
  res: Response
) {
  try {
    const user = res.locals.user.dataValues;
    // const myCities = await getMyCities(user);
    await removeMyPlace(user, req.body);
    return res.sendStatus(204);
  } catch (e: any) {
    return res.sendStatus(500);
  }
}
