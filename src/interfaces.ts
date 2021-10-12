export interface UserAttributes {
  id?: number;
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
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CityAttributes {
  id: number;
  user_id: number;
  user_name: string;
  country: string;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FollowingAttributes {
  id: number;
  user_id: string;
  friend_id: number;
  createdAt?: Date;
  updatedAt?: Date;
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
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SessionAttributes {
  id: number;
  valid?: boolean;
  user_agent: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TagAttributes {
  id: number;
  tag_name: string;
  createdAt?: Date;
  updatedAt?: Date;
}
