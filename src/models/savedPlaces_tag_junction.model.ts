import { Model } from "sequelize";
import { sequelize } from "./index";
import { SavedPlaces_Tag_JunctionAttributes } from "../interfaces";

interface SavedPlacesCreation_Tag_JunctionAttributes {}

export class SavedPlaces_Tag_Junction
  extends Model<
    SavedPlaces_Tag_JunctionAttributes,
    SavedPlacesCreation_Tag_JunctionAttributes
  >
  implements SavedPlaces_Tag_JunctionAttributes
{
  public SavedPlaceId?: string;
  public TagName?: string;

  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

SavedPlaces_Tag_Junction.init(
  {},
  {
    tableName: "saved_places_tag_junction",
    sequelize,
  }
);
