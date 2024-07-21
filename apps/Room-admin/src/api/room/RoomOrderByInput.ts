import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  capacity?: SortOrder;
  location?: SortOrder;
  bookings?: SortOrder;
};
