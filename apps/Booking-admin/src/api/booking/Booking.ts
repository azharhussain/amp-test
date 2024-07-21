export type Booking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startTime: Date | null;
  endTime: Date | null;
  status?: "Option1" | null;
  userId: string | null;
  roomId: string | null;
};
