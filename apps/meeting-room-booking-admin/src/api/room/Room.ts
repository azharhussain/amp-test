import { Booking } from "../booking/Booking";

export type Room = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  capacity: number | null;
  location: string | null;
  bookings?: Array<Booking>;
};
