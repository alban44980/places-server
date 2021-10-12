import { Model, Optional, DataTypes, Association, HasManyAddAssociationMixin, HasManyCreateAssociationMixin } from "sequelize";
import { sequelize } from "./index";
import { UserAttributes } from "../interfaces";
import { Place } from "./place.model"
import { City } from "./city.model"
import { SavedPlace } from "./savedPlaces.model"
import { Following } from "./following.model"


interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: string;
  public user_name!: string;
  public bio?: string;
  public profile_pic?: string;
  public following_count?: number;
  public followers_count?: number;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public password!: string;

    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;

    public addPlace!: HasManyAddAssociationMixin<Place, number>;
    public createPlace!: HasManyCreateAssociationMixin<Place>;
    public readonly places?: Place[];

    public addCity!: HasManyAddAssociationMixin<City, number>;
    public createCity!: HasManyCreateAssociationMixin<City>;
    public readonly cities?: City[];

    public addSavedPlace!: HasManyAddAssociationMixin<SavedPlace, number>;
    public createSavedPlace!: HasManyCreateAssociationMixin<SavedPlace>;
    public readonly saved_places?: SavedPlace[];

    public addFollowing!: HasManyAddAssociationMixin<Following, number>;
    public createFollowing!: HasManyCreateAssociationMixin<Following>;
    public readonly followings?: Following[];

    public static associations: {
    places: Association<User, Place>;
    cities: Association<User, City>;
    saved_places: Association<User, SavedPlace>;
    followings: Association<User, Following>;
    };
  }

User.init(
  {
    id: {
      // figure out the associations
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    user_name: {
      type: new DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
    bio: {
      type: new DataTypes.STRING(),
      allowNull: true,
    },
    profile_pic: {
      type: new DataTypes.STRING(),
      allowNull: true,
    },
    following_count: {
      type: new DataTypes.INTEGER(),
      allowNull: true,
      defaultValue: 0,
    },
    followers_count: {
      type: new DataTypes.INTEGER(),
      allowNull: true,
      defaultValue: 0,
    },
    first_name: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    last_name: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
    password: {
      type: new DataTypes.STRING(),
      allowNull: false,
      unique: false,
    },
  },
  {
    tableName: "users",
    sequelize,
  }
);

User.hasMany(Place, {
  sourceKey: 'id',
  foreignKey: 'user_id',
  as: 'places',
});

User.hasMany(City, {
  sourceKey: 'id',
  foreignKey: 'user_id',
  as: 'cities',
});

User.hasMany(SavedPlace, {
  sourceKey: 'id',
  foreignKey: 'user_id',
  as: 'saved_places',
});

User.hasMany(Following, {
  sourceKey: 'id',
  foreignKey: 'user_id',
  as: 'followings',
});

export default User;
