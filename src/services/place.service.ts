import Place from "../models/place.model";
import User from "../models/user.model";
import { UserAttributes, PlaceAttributes } from "../interfaces";

export async function createPlace(
  place: Omit<
    PlaceAttributes,
    "createdAt" | "updatedAt" | "id" | "UserId" | "CityId"
  >,
  user: UserAttributes
) {
  try {
    //PLACE has a relation of many to many with TAGS
    //a CITY can have many places
    //a USER can many cities
    //first we need to find if a user has a city that matches the new place's city
    //if it does not, we create a new city with a relation to the user
    //if it does we move forward

    //get user Model
    const userM = await User.findOne({ where: { id: user.id } });

    return false;
  } catch (e: any) {
    throw new Error(e);
  }
}
