import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type BookingUpdateInput = {
  startTime?: Date | null;
  endTime?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  room?: RoomWhereUniqueInput | null;
};
