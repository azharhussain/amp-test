import { BookingUpdateManyWithoutRoomsInput } from "./BookingUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  name?: string | null;
  capacity?: number | null;
  location?: string | null;
  bookings?: BookingUpdateManyWithoutRoomsInput;
};
