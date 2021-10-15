import { Model, Optional, DataTypes, UUIDV4, Association } from "sequelize";
import { sequelize } from "./index";
import { TagAttributes } from "../interfaces";
import Place from "./place.model";
import SavedPlace from "./savedPlaces.model";

interface TagCreationAttributes extends Optional<TagAttributes, "name"> {}

export class Tag
  extends Model<TagAttributes, TagCreationAttributes>
  implements TagAttributes
{
  public name!: string;

  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;

  public static associations: {
    places: Association<Tag, Place>;
    saved_places: Association<Tag, SavedPlace>;
  };
}
Tag.init(
  {
    name: {
      type: new DataTypes.STRING(),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "tags",
    sequelize,
  }
);

export default Tag;
