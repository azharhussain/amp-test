import { BookingCreateNestedManyWithoutRoomsInput } from "./BookingCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  name?: string | null;
  capacity?: number | null;
  location?: string | null;
  bookings?: BookingCreateNestedManyWithoutRoomsInput;
};
