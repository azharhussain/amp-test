import { Room as TRoom } from "../api/room/Room";

export const ROOM_TITLE_FIELD = "name";

export const RoomTitle = (record: TRoom): string => {
  return record.name?.toString() || String(record.id);
};
