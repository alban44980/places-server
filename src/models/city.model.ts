import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "./index";
import { CityAttributes } from "../interfaces";

interface CityCreationAttributes extends Optional<CityAttributes, 'id'> {}

export class City extends Model<CityAttributes, CityCreationAttributes>
  implements CityAttributes 
  {
    public id!: number;
    public user_id!: number;
    public user_name!: string;
    public country!: string;
    public location!: string;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
  }
City.init(
  {
    id: {
    // figure out the associations
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      // foreignKey: true,
    },
    user_name: {
      type: new DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    country: {
      type: new DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    location: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'cities',
    sequelize,
  }
);

export default City;
