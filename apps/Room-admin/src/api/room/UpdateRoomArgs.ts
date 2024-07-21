import { RoomWhereUniqueInput } from "./RoomWhereUniqueInput";
import { RoomUpdateInput } from "./RoomUpdateInput";

export type UpdateRoomArgs = {
  where: RoomWhereUniqueInput;
  data: RoomUpdateInput;
};
