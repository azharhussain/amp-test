import * as graphql from "@nestjs/graphql";
import { BookingResolverBase } from "./base/booking.resolver.base";
import { Booking } from "./base/Booking";
import { BookingService } from "./booking.service";

@graphql.Resolver(() => Booking)
export class BookingResolver extends BookingResolverBase {
  constructor(protected readonly service: BookingService) {
    super(service);
  }
}
