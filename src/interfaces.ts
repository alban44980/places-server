<<<<<<< HEAD
/* 
    Interfaces for TS
*/
=======
export interface UserAttributes {
  id: number;
  user_name: string;
  bio: string;
  profile_pic: string;
  following: number;
  followers: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface PlaceAttributes {
  id: number;
  name: string;
  img: string;
  description: string;
  location: string;
  address: string;
  city: string;
  country: string;
  city_id: string;
  user_id: number;
}

export interface CityAttributes {
  id: number;
  user_id: number;
  user_name: string;
  country: string;
  location: string;
}

export interface FollowingAttributes {
  id: number;
  user_id: string;
  friend_id: number;
}

export interface SavedPlaceAttributes {
  id: number;
  name: string;
  img: string;
  description: string;
  location: string;
  address: string;
  city: string;
  country: string;
  city_id: string;
  user_id: number;
}

export interface SessionAttributes {
  id: number;
  valid: boolean;
  user_agent: string;
}

export interface TagAttributes {
  id: number;
  tag_name: string;
}
>>>>>>> d699c01c1a88c5041d08f979afc0fab837958e74
