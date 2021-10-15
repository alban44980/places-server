import Place from "../models/place.model";
import User from "../models/user.model";
import { UserAttributes, PlaceAttributes } from "../interfaces";
import City from "../models/city.model";
import { omit } from "lodash";
import Tag from "../models/tags.model";

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
      await createdPlace.addTag(tag.tag_name);
    }

    return createdPlace;
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function getMyPlaces(user: User) {
  try {
    const userM = await User.findAll({
      where: { id: user.id },
      include: { model: Place },
    });
    return omit(userM[0].dataValues, "password");
    // get places
  } catch (e: any) {
    throw new Error(e);
  }
}

// will be used to delete if city has no more places
export async function getMyCitiesPlaces(user: any) {
  try {
    const userM = await User.findOne({
      attributes: { exclude: ["password"] },
      where: { id: user.id },
      include: [
        {
          model: City,
          include: [
            {
              model: Place,
              include: [
                {
                  model: Tag,
                },
              ],
            },
          ],
        },
      ],
    });

    return userM;
    //get all cities that appear in cities table
  } catch (e: any) {
    throw new Error(e);
  }
}

// does not yet remove city if it has no more places assosciated with it
export async function removeMyPlace(user: UserAttributes, myPlaceId: any) {
  try {
    const cityList = await City.findOne({
      where: { id: myPlaceId.CityId },
      include: { model: Place },
    });
    // if there is only one place for the city delete the city as well and cascading relations
    if (cityList.dataValues.Places.length === 1) {
      await City.destroy({
        where: {
          id: myPlaceId.CityId,
        },
      });
    } else {
      await Place.destroy({
        where: {
          id: myPlaceId.id,
          UserId: user.id,
        },
      });
    }
  } catch (e: any) {
    throw new Error(e);
  }
}
