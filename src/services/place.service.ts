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
    console.log("place", place);
    // place {
    // name: "Sandy's",
    // description: 'great place for drinks',
    // tag_list: [ { tag_name: 'bars' }, { tag_name: 'music' } ],
    // img: 'https://13144adksfjhafakjfhjkhfa.com',
    // location: '{lat:131313,lng:1313134}',
    // address: '134avc 53st, barc, MW, 33193',
    // city: 'Lagos',
    // country: 'Japan'
    //}

    console.log("user", user);
    //  user {
    //   id: '44c54ce5-1d1c-4312-b864-3fd18fcc6927',
    //   user_name: 'test1UN',
    //   bio: 'test1BIO',
    //   img: null,
    //   following_count: 0,
    //   followers_count: 0,
    //   first_name: 'test1FN',
    //   last_name: 'test1LN',
    //   email: 'test1EM@EM.com',
    //   password: '$2b$10$mAuLPqIIkqzxgk82T06.HeKE9dtRNVTEhU0ZLHu4sXDEy4GOEkETO',
    //   createdAt: '2021-10-14T08:24:46.671Z',
    //   updatedAt: '2021-10-14T08:24:46.671Z'
    //  }

    //PLACE has a relation of many to many with TAGS
    //a CITY can have many places
    //a USER can many cities
    //first we need to find if a user has a city that matches the new place's city
    //if it does not, we create a new city with a relation to the user
    //if it does we move forward

    //get user Model
    const userM = await User.findOne({ where: { id: user.id } });

    return true;
  } catch (e: any) {
    throw new Error(e);
  }
}
