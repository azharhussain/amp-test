import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "userId";

export const BookingTitle = (record: TBooking): string => {
  return record.userId?.toString() || String(record.id);
};
