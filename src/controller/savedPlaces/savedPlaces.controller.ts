import { Request, Response } from "express";
import { RemoveSavedPlaceInput } from "../../schema/removeSavedPlace.schema";
import { AddSavedPlaceInput } from "../../schema/savedPlaces.schema";
import {
  addSavedPlace,
  getUserSavedPlaces,
} from "../../services/savedPlaces.service";
import { removeSavedPlace } from "../../services/savedPlaces.service";

export async function addSavedPlaceHandler(
  req: Request<{}, {}, AddSavedPlaceInput["body"]>,
  res: Response
) {
  try {
    const user = res.locals.user.dataValues;
    const place = await addSavedPlace(req.body, user);
    if (place) {
      return res.status(201).send(place);
    } else {
      //the savedPlace already exists for this user
      return res.status(400);
    }
  } catch (e: any) {
    return res.status(500).send(e.message);
  }
}

export async function removeSavedPlaceHandler(
  req: Request<{}, {}, RemoveSavedPlaceInput["body"]>,
  res: Response
) {
  try {
    const user = res.locals.user.dataValues;
    await removeSavedPlace(user, req.body);
    return res.sendStatus(204);
  } catch (e: any) {
    return res.sendStatus(500);
  }
}

export async function getSavedPlaces(req: Request, res: Response) {
  try {
    const user = res.locals.user.dataValues;

    const savedPlaces = await getUserSavedPlaces(user);

    return res.send(savedPlaces);
  } catch (e) {
    res.status(404);
  }
}
