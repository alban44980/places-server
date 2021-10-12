import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "./index";
import { PlaceAttributes } from "../interfaces";

interface PlaceCreationAttributes extends Optional<PlaceAttributes, 'id'> {}

export class Place extends Model<PlaceAttributes, PlaceCreationAttributes>
  implements PlaceAttributes 
  {
    public id!: string;
    public name!: string;
    public img?: string;
    public description!: string;
    public location!: string;
    public address!: string;
    public city!: string;
    public country!: string;
    public city_id!: string;
    public user_id!: string;

    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;

    // public static associations(models:any) {
    //   Place.belongsToMany(models.User, {
    //     through: 'place_tag_junction'
    //   })
    // };
    
    // Place.belongsToMany(User: any, { through: "place_tag_junction" }: {
    //   through: any;
    //   place_tag_junction: any;
    // }): any 
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
    type: new DataTypes.STRING(),
    allowNull: false,
    unique: false,
  },
  img: {
    type: new DataTypes.STRING(),
    allowNull: true,
    unique: false,
  },
  description: {
    type: new DataTypes.STRING(),
    allowNull: false,
  },
  location: {
    type: new DataTypes.STRING(),
    allowNull: false,
  },
  address: {
    type: new DataTypes.STRING(),
    allowNull: false,
    unique: false,
  },
  city: {
    type: new DataTypes.STRING(),
    allowNull: false,
    unique: false,
  },
  country: {
    type: new DataTypes.STRING(),
    allowNull: false,
    unique: false,
  },
  city_id: {
    type: new DataTypes.STRING(),
    allowNull: false,
    unique: false,
  },
  user_id: {
    type: new DataTypes.STRING(),
    allowNull: false,
    unique: false,
  },
},
  {
    tableName: 'places',
    sequelize,
  }
);

export default Place;
