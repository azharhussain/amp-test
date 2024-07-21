import { RoomWhereInput } from "./RoomWhereInput";
import { RoomOrderByInput } from "./RoomOrderByInput";

export type RoomFindManyArgs = {
  where?: RoomWhereInput;
  orderBy?: Array<RoomOrderByInput>;
  skip?: number;
  take?: number;
};
