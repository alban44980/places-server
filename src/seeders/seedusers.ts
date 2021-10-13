import users from "./usersdata";
import followings from "./followingdata";
import sessions from "./sessionsdata";
import cities from "./citiesdata";
import places from "./placesdata";

import User from "../models/user.model";
import Following from "../models/following.model";
import Session from "../models/session.model";
import City from "../models/city.model";
import Place from "../models/place.model";
import SavedPlace from "../models/savedPlaces.model";
import Tag from "../models/tags.model";

const modelsSeed = [User, Following, Session, City, Place, SavedPlace, Tag];

const populate = async () => {
  try {
    // for each mock data
    for (let x of users) {
      await User.create(x);
    }

    // for (let user of users) {
    //   await User.create(user);
    // }
  } catch (err) {
    console.log(err);
  }
};

populate();
