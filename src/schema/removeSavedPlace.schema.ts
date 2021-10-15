import { object, string, TypeOf, array } from "zod";

export const removeSavedPlaceSchema = object({
  body: object({
    name: string({
      required_error: "Name required",
    }),
    UserId: string({
      required_error: "UserId required",
    }),
    id: string({
      required_error: "id required",
    }),
  }),
});

export type RemoveSavedPlaceInput = TypeOf<typeof removeSavedPlaceSchema>;
