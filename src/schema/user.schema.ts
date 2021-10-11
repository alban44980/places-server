import { object, string, TypeOf } from "zod";
//schema of the information expected when creating user
export const createUserSchema = object({
  body: object({
    firstName: string({
      required_error: "Name is required",
    }),
    lastName: string({
      required_error: "Name is required",
    }),
    password: string({
      required_error: "Password is required",
    }).min(8, "Password too short, should be 8 characters minimum"),
    passwordConfirmation: string({
      required_error: "Password confirmation is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }).refine((data) => data.password === data.passwordConfirmation, {
    //error message if passwords do not match
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

//allows for the creation of a type that matches the validation schema
//this schema will be used on the create user call to the db. must ommit the passwordConfirmation as the db does not have that column
export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;
