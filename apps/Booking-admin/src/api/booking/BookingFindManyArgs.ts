import { BookingWhereInput } from "./BookingWhereInput";
import { BookingOrderByInput } from "./BookingOrderByInput";

export type BookingFindManyArgs = {
  where?: BookingWhereInput;
  orderBy?: Array<BookingOrderByInput>;
  skip?: number;
  take?: number;
};
