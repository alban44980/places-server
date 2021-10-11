import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "./index";
import { PlaceAttributes } from "../interfaces";

interface PlaceCreationAttributes extends Optional<PlaceAttributes, 'id'> {}

export class Place extends Model<PlaceAttributes, PlaceCreationAttributes>
  implements PlaceAttributes 
  {
    public id!: number;
    public name!: string;
    public img!: string;
    public description!: string;
    public location!: string;
    public address!: string;
    public city!: string;
    public country!: string;
    public city_id!: string;
    public user_id!: number;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
  }

Place.init(
  {
    id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  city_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
},
  {
    tableName: 'places',
    sequelize,
  }
);

export default Place;
