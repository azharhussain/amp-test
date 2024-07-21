import { Module } from "@nestjs/common";
import { BookingModuleBase } from "./base/booking.module.base";
import { BookingService } from "./booking.service";
import { BookingController } from "./booking.controller";
import { BookingResolver } from "./booking.resolver";

@Module({
  imports: [BookingModuleBase],
  controllers: [BookingController],
  providers: [BookingService, BookingResolver],
  exports: [BookingService],
})
export class BookingModule {}
