import { object, string, TypeOf } from "zod";

export const createAddFriendSchema = object({
  body: object({
    FriendId: string({
      //Id of other user
      required_error: "Friend id require",
    }),
  }),
});

export type AddFriendInput = TypeOf<typeof createAddFriendSchema>;
