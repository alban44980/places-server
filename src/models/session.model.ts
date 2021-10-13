import { Model, Optional, DataTypes, UUIDV4 } from "sequelize";
import { sequelize } from "./index";
import { SessionAttributes } from "../interfaces";

interface SessionCreationAttributes extends Optional<SessionAttributes, "id"> {}

export class Session
  extends Model<SessionAttributes, SessionCreationAttributes>
  implements SessionAttributes
{
  public id!: string;
  public valid?: boolean;
  public user_agent!: string;

  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}
Session.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
      defaultValue: UUIDV4,
    },
    valid: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    user_agent: {
      type: new DataTypes.STRING(),
      allowNull: true,
      unique: false,
    },
  },
  {
    tableName: "sessions",
    sequelize,
  }
);

// Session.belongsTo(User);

export default Session;
