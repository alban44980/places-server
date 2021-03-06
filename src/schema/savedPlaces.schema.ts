import { object, string, TypeOf, array } from "zod";
import { tagsSchema } from "./tag.schema";
import { createCitySchema } from "./city.schema";

export const addSavedPlaceSchema = object({
  body: object({
    name: string({
      required_error: "Name required",
    }),
    description: string({
      required_error: "description required",
    }),
    tag_list: array(tagsSchema),
    img: string({
      required_error: "img", //could be from google maps
    }),
    location: string({
      required_error: "Location required",
    }),
    address: string({
      required_error: "Address required",
    }),
    city: string({
      required_error: "City required",
    }),
    country: string({
      required_error: "Country required",
    }),
  }),
});

export type AddSavedPlaceInput = TypeOf<typeof addSavedPlaceSchema>;
