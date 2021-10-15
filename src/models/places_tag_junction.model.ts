import { Model, DataTypes } from "sequelize";
import { sequelize } from "./index";
import { Places_Tag_JunctionAttributes } from "../interfaces";

interface PlacesCreation_Tag_JunctionAttributes {}

export class Places_Tag_Junction
  extends Model<
    Places_Tag_JunctionAttributes,
    PlacesCreation_Tag_JunctionAttributes
  >
  implements Places_Tag_JunctionAttributes
{
  public PlaceId?: string;
  public TagName?: string;

  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

Places_Tag_Junction.init(
  {},
  {
    tableName: "places_tag_junction",
    sequelize,
  }
);
