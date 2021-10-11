import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "./index";
import { FollowingAttributes } from "../interfaces";

interface FollowingCreationAttributes extends Optional<FollowingAttributes, 'id'> {}

export class Following extends Model<FollowingAttributes, FollowingCreationAttributes>
  implements FollowingAttributes 
  {
    public id!: number;
    public user_id!: string;
    public friend_id!: number;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
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
      // Make sure the types is correct
      // or if we need to use new DataTypes.STRING
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
    },
    friend_id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'followings',
    sequelize,
  }
);

export default Following;