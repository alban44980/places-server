import { object, string, TypeOf, array } from "zod";

export const removeMyPlaceSchema = object({
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
    CityId: string({
      required_error: "id required",
    }),
  }),
});

export type RemoveMyPlaceInput = TypeOf<typeof removeMyPlaceSchema>;
