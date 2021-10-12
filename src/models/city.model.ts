import { Model, Optional, DataTypes, Association, HasManyAddAssociationMixin, HasManyCreateAssociationMixin } from "sequelize";
import { sequelize } from "./index";
import { CityAttributes } from "../interfaces";
import { SavedPlace } from "./savedPlaces.model";
import { Place } from "./place.model";

interface CityCreationAttributes extends Optional<CityAttributes, 'id'> {}

export class City extends Model<CityAttributes, CityCreationAttributes>
  implements CityAttributes 
  {
    public id!: string;
    public user_id!: string;
    public name!: string;
    public country!: string;
    public location!: string;

    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;

    public addPlace!: HasManyAddAssociationMixin<Place, number>;
    public createPlace!: HasManyCreateAssociationMixin<Place>;
    public readonly places?: Place[];

    public addSavedPlace!: HasManyAddAssociationMixin<SavedPlace, number>;
    public createSavedPlace!: HasManyCreateAssociationMixin<SavedPlace>;
    public readonly saved_places?: SavedPlace[];

    public static associations: {
    places: Association<City, Place>;
    saved_places: Association<City, SavedPlace>;
    };

  }
City.init(
  {
    id: {
    // figure out the associations
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: new DataTypes.STRING(),
      allowNull: false,
      unique: false,
    },
    country: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    location: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    tableName: 'cities',
    sequelize,
  }
);

City.hasMany(Place, {
  sourceKey: 'id',
  foreignKey: 'city_id',
  as: 'places',
});

City.hasMany(SavedPlace, {
  sourceKey: 'id',
  foreignKey: 'city_id',
  as: 'saved_places',
});

export default City;
