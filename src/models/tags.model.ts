import { Model, Optional, DataTypes, UUIDV4 } from "sequelize";
import { sequelize } from "./index";
import { TagAttributes } from "../interfaces";

interface TagCreationAttributes extends Optional<TagAttributes, "name"> {}

export class Tag
  extends Model<TagAttributes, TagCreationAttributes>
  implements TagAttributes
{
  public name!: string;

  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
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
