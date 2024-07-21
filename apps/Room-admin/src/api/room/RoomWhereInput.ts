import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RoomWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  capacity?: IntNullableFilter;
  location?: StringNullableFilter;
  bookings?: JsonFilter;
};
