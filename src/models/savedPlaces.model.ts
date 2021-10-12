import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "./index";
import { SavedPlaceAttributes } from "../interfaces";
import { Tag } from "./tags.model";

interface SavedPlaceCreationAttributes
  extends Optional<SavedPlaceAttributes, "id"> {}

export class SavedPlace
  extends Model<SavedPlaceAttributes, SavedPlaceCreationAttributes>
  implements SavedPlaceAttributes
{
  public id!: string;
  public name!: string;
  public img?: string;
  public description!: string;
  public location!: string;
  public address!: string;
  public city!: string;
  public country!: string;
  public CityId?: string;
  public UserId?: string;

  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

SavedPlace.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: new DataTypes.STRING(),
      allowNull: false,
      unique: false,
    },
    img: {
      type: new DataTypes.STRING(),
      allowNull: false,
      unique: false,
    },
    description: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    location: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    address: {
      type: new DataTypes.STRING(),
      allowNull: false,
      unique: false,
    },
    city: {
      type: new DataTypes.STRING(),
      allowNull: false,
      unique: false,
    },
    country: {
      type: new DataTypes.STRING(),
      allowNull: false,
      unique: false,
    },
  },
  {
    tableName: "saved_places",
    sequelize,
  }
);

SavedPlace.belongsToMany(Tag, { through: "saved_places_tag_junction" });

export default SavedPlace;
