export type BookingCreateInput = {
  startTime?: Date | null;
  endTime?: Date | null;
  status?: "Option1" | null;
  userId?: string | null;
  roomId?: string | null;
};
