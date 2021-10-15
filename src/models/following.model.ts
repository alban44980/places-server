import { Model, Optional, DataTypes, UUIDV4 } from "sequelize";
import { sequelize } from "./index";
import { FollowingAttributes } from "../interfaces";

interface FollowingCreationAttributes
  extends Optional<FollowingAttributes, "id"> {}

export class Following
  extends Model<FollowingAttributes, FollowingCreationAttributes>
  implements FollowingAttributes
{
  public id!: string;
  public UserId?: string;
  public FriendId!: string;

  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}
Following.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
      defaultValue: UUIDV4,
    },
    FriendId: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: false,
    },
  },
  {
    tableName: "followings",
    sequelize,
  }
);

export default Following;
