import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "./index";
import { FollowingAttributes } from "../interfaces";

interface FollowingCreationAttributes extends Optional<FollowingAttributes, 'id'> {}

export class Following extends Model<FollowingAttributes, FollowingCreationAttributes>
  implements FollowingAttributes 
  {
    public id!: string;
    public user_id!: string;
    public friend_id!: string;

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
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: false,
    },
    friend_id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: false,
    },
  },
  {
    tableName: 'followings',
    sequelize,
  }
);

export default Following;