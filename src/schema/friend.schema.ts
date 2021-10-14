import { object, string, TypeOf } from "zod";

export const createFriendSchema = object({
  body: object({
    FriendId: string({
      //Id of other user
      required_error: "Friend id require",
    }),
  }),
});

export type FriendInput = TypeOf<typeof createFriendSchema>;
