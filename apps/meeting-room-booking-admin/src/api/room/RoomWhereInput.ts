import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";

export type RoomWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  capacity?: IntNullableFilter;
  location?: StringNullableFilter;
  bookings?: BookingListRelationFilter;
};
