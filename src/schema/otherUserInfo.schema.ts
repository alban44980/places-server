import { object, string, TypeOf } from "zod";

export const createOtherUserInfoSchema = object({
  body: object({
    userId: string({
      //Id of other user
      required_error: "User id require",
    }),
  }),
});

export type OtherUsInput = TypeOf<typeof createOtherUserInfoSchema>;
