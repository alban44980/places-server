import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "./index";
import { SessionAttributes } from "../interfaces";

interface SessionCreationAttributes extends Optional<SessionAttributes, "id"> {}

export class Session
  extends Model<SessionAttributes, SessionCreationAttributes>
  implements SessionAttributes
{
  public id!: number;
  public valid?: boolean;
  public user_agent!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}
Session.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    valid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    user_agent: {
      type: new DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "sessions",
    sequelize,
  }
);

export default Session;
