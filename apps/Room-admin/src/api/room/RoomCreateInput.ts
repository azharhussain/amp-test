import { InputJsonValue } from "../../types";

export type RoomCreateInput = {
  name?: string | null;
  capacity?: number | null;
  location?: string | null;
  bookings?: InputJsonValue;
};
