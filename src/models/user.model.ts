import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "./index";
import { UserAttributes } from "../interfaces";

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes 
  {
    public id!: number;
    public user_name!: string;
    public bio!: string;
    public profile_pic!: string;
    public following!: number;
    public followers!: number;
    public first_name!: string;
    public last_name!: string;
    public email!: string;
    public password!: string;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
  }

User.init(
  {
    id: {
    // figure out the associations
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    user_name: {
      type: new DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    bio: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    profile_pic: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    following: {
      type: new DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    followers: {
      type: new DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    first_name: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: new DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'users',
    sequelize,
  }
);

export default User;