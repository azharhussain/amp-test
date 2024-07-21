import { User } from "../user/User";
import { Room } from "../room/Room";

export type Booking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startTime: Date | null;
  endTime: Date | null;
  status?: "Option1" | null;
  user?: User | null;
  room?: Room | null;
};
