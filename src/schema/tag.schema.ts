import { object, string, TypeOf } from "zod";

export const tagsSchema = object({
  name: string(),
});
