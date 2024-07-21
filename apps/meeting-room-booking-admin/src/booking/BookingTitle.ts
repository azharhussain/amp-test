import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "id";

export const BookingTitle = (record: TBooking): string => {
  return record.id?.toString() || String(record.id);
};
