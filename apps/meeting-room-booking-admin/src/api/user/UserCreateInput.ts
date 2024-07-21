import { InputJsonValue } from "../../types";
import { BookingCreateNestedManyWithoutUsersInput } from "./BookingCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  name?: string | null;
  role?: "Option1" | null;
  bookings?: BookingCreateNestedManyWithoutUsersInput;
};
