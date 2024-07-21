import { JsonValue } from "type-fest";
import { Booking } from "../booking/Booking";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  name: string | null;
  role?: "Option1" | null;
  bookings?: Array<Booking>;
};
