import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "./index";
import { SavedPlaceAttributes } from "../interfaces";


interface SavedPlaceCreationAttributes extends Optional<SavedPlaceAttributes, 'id'> {}

export class SavedPlace extends Model<SavedPlaceAttributes, SavedPlaceCreationAttributes>
  implements SavedPlaceAttributes 
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

SavedPlace.init(
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
    tableName: 'saved_places',
    sequelize,
  }
);

export default SavedPlace;
