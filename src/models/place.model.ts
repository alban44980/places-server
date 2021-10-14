import { Model, Optional, DataTypes, UUIDV4 } from "sequelize";
import { sequelize } from "./index";
import { PlaceAttributes } from "../interfaces";
import { Tag } from "./tags.model";

interface PlaceCreationAttributes extends Optional<PlaceAttributes, "id"> {}

export class Place
  extends Model<PlaceAttributes, PlaceCreationAttributes>
  implements PlaceAttributes
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

Place.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
      defaultValue: UUIDV4,
    },
    name: {
      type: new DataTypes.STRING(),
      allowNull: false,
      unique: false,
    },
    img: {
      type: new DataTypes.STRING(),
      allowNull: true,
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
    tableName: "places",
    sequelize,
  }
);

Place.belongsToMany(Tag, { through: "places_tag_junction" });
Tag.belongsToMany(Place, { through: "places_tag_junction" });

export default Place;
