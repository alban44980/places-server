import {
  Model,
  Optional,
  DataTypes,
  UUIDV4,
  Association,
  HasManyAddAssociationMixin,
} from "sequelize";
import { sequelize } from "./index";
import { SavedPlaceAttributes } from "../interfaces";
import { Tag } from "./tags.model";
import { SavedPlaces_Tag_Junction } from "./savedPlaces_tag_junction.model";

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

  public addTag!: HasManyAddAssociationMixin<Tag, string>;

  public static associations: {
    tags: Association<SavedPlace, Tag>;
  };
}

SavedPlace.init(
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

SavedPlace.belongsToMany(Tag, {
  through: SavedPlaces_Tag_Junction,
  onDelete: "cascade",
  hooks: true,
});
Tag.belongsToMany(SavedPlace, {
  through: SavedPlaces_Tag_Junction,
  onDelete: "cascade",
  hooks: true,
});

export default SavedPlace;
