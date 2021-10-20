import SavedPlace from "../models/savedPlaces.model";
import User from "../models/user.model";
import { UserAttributes, SavedPlaceAttributes } from "../interfaces";

import { omit } from "lodash";
import Tag from "../models/tags.model";

export async function addSavedPlace(
  place: Omit<
    SavedPlaceAttributes,
    "createdAt" | "updatedAt" | "id" | "city_info"
  >,
  //| "UserId" | "CityId"
  user: UserAttributes
) {
  try {
    //if user already has this place added then return false
    if (
      await SavedPlace.findOne({ where: { name: place.name, UserId: user.id } })
    ) {
      return false;
    }
    //omit city_info from place object
    place = {
      ...place,
      UserId: user.id,
    };
    const newSavedPlace = omit(place, "city_info");

    const createdSavedPlace = await SavedPlace.create(newSavedPlace);
    for (let tag of place.tag_list) {
      await createdSavedPlace.addTag(tag.tag_name);
    }

    return createdSavedPlace;
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function removeSavedPlace(
  user: UserAttributes,
  savedPlaceId: any
) {
  try {
    await SavedPlace.destroy({
      where: {
        id: savedPlaceId.id,
        UserId: user.id,
      },
    });
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function getUserSavedPlaces(user: User) {
  try {
    //get user
    const userM = await User.findAll({
      where: { id: user.id },
      include: [
        {
          model: SavedPlace,
          include: [
            {
              model: Tag,
            },
          ],
        },
      ],
    });
    return omit(userM[0].dataValues, "password");
    // get places
  } catch (e: any) {
    throw new Error(e);
  }
}
