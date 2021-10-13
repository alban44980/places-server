import { Model, Optional, DataTypes, UUIDV4 } from "sequelize";
import { sequelize } from "./index";
import { TagAttributes } from "../interfaces";

interface TagCreationAttributes extends Optional<TagAttributes, "id"> {}

export class Tag
  extends Model<TagAttributes, TagCreationAttributes>
  implements TagAttributes
{
  public id!: string;
  public tag_name!: string;

  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}
Tag.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
      defaultValue: UUIDV4,
    },
    tag_name: {
      type: new DataTypes.STRING(),
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
