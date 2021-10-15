import { object, string } from "zod";

export const tagsSchema = object({
  tag_name: string(),
});
