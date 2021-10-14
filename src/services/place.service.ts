import Place from "../models/place.model";

import { UserAttributes, PlaceAttributes } from "../interfaces";
import City from "../models/city.model";
import { omit } from "lodash";
import { Places_Tag_Junction } from "../models/places_tag_junction.model";

export async function createPlace(
  place: Omit<PlaceAttributes, "createdAt" | "updatedAt" | "id" | "city_info">,
  //| "UserId" | "CityId"
  user: UserAttributes
) {
  try {
    console.log("newPLSDASDAS", place);
    //if user already has this place added then return false
    // if (await Place.findOne({ where: { name: place.name, UserId: user.id } })) {
    //   return false;
    // }

    //extra tags for relation
    console.log("tags", place.tag_list);

    //check if user already has a city
    let city = await City.findOne({
      where: { name: place.city_info.name, UserId: user.id },
    });

    //if city does not exists create a new city for the user
    if (!city) {
      const newCity = {
        ...place.city_info,
        UserId: user.id,
      };
      city = await City.create(newCity);
    }
    //city exists
    //omit city_info from place object
    place = {
      ...place,
      CityId: city.dataValues.id,
      UserId: user.id,
    };
    const newPlace = omit(place, "city_info");

    const createdPlace = await Place.create(newPlace);

    //add tag relations

    for (let tag of place.tag_list) {
      console.log("tag", tag);
      const result = await Places_Tag_Junction.create({
        PlaceId: createdPlace.id,
        TagName: tag.tag_name,
      });
      console.log("res", result);
    }

    return createdPlace;
  } catch (e: any) {
    console.log(e);
    throw new Error(e);
  }
}
