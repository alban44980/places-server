import Place from "../models/place.model";
import User from "../models/user.model";
import { UserAttributes, PlaceAttributes } from "../interfaces";
import City from "../models/city.model";
import { omit } from "lodash";

export async function createPlace(
  place: Omit<PlaceAttributes, "createdAt" | "updatedAt" | "id" | "city_info">,
  //| "UserId" | "CityId"
  user: UserAttributes
) {
  try {
    //if user already has this place added then return false
    if (await Place.findOne({ where: { name: place.name, UserId: user.id } })) {
      return false;
    }

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
      console.log("new city", city);
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

    console.log("newly created place", createdPlace);

    return createdPlace;
  } catch (e: any) {
    console.log("place already exists");
    throw new Error(e);
  }
}
