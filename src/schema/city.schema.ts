import { object, string } from "zod";

export const createCitySchema = object({
  name: string({
    required_error: "City name required",
  }),
  country: string({
    required_error: "City's country required",
  }),
  location: string({
    required_error: "City's location required",
  }),
});
