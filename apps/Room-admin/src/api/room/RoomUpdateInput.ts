import { InputJsonValue } from "../../types";

export type RoomUpdateInput = {
  name?: string | null;
  capacity?: number | null;
  location?: string | null;
  bookings?: InputJsonValue;
};
