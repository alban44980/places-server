import { object, string, TypeOf } from "zod";

export const tagsSchema = object({
  tag_name: string(),
});
