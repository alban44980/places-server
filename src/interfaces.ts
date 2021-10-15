export interface UserAttributes {
  id: string;
  user_name: string;
  bio?: string;
  img?: string;
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
  CityId?: string;
  UserId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CityAttributes {
  id: string;
  UserId?: string;
  name: string;
  country: string;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FollowingAttributes {
  id: string;
  UserId?: string;
  FriendId?: string;
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
  CityId?: string;
  UserId?: string;
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
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Places_Tag_JunctionAttributes {
  PlaceId?: string;
  TagName?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface SavedPlaces_Tag_JunctionAttributes {
  SavedPlaceId?: string;
  TagName?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
