import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BookingWhereInput = {
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  status?: "Option1";
  userId?: StringNullableFilter;
  roomId?: StringNullableFilter;
};
