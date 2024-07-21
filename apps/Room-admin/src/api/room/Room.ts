import { JsonValue } from "type-fest";

export type Room = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  capacity: number | null;
  location: string | null;
  bookings: JsonValue;
};
