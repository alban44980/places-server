export interface UserAttributes {
  id: string;
  user_name: string;
  bio?: string;
  profile_pic?: string;
  following_count?: number;
  followers_count?: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PlaceAttributes {
  id: string;
  name: string;
  img?: string;
  description: string;
  location: string;
  address: string;
  city: string;
  country: string;
  city_id: string;
  user_id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CityAttributes {
  id: string;
  user_id: string;
  name: string;
  country: string;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FollowingAttributes {
  id: string;
  user_id: string;
  friend_id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SavedPlaceAttributes {
  id: string;
  name: string;
  img?: string;
  description: string;
  location: string;
  address: string;
  city: string;
  country: string;
  city_id: string;
  user_id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SessionAttributes {
  id: string;
  valid?: boolean;
  user_agent: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TagAttributes {
  id: string;
  tag_name: string;
  createdAt?: Date;
  updatedAt?: Date;
}
