import { object, string, TypeOf } from "zod";

export const createSearchUserSchema = object({
  body: object({
    searchValue: string({
      required_error: "search value require",
    }),
  }),
});

export type SearchUserInput = TypeOf<typeof createSearchUserSchema>;
