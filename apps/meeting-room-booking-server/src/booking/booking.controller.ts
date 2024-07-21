import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BookingService } from "./booking.service";
import { BookingControllerBase } from "./base/booking.controller.base";

@swagger.ApiTags("bookings")
@common.Controller("bookings")
export class BookingController extends BookingControllerBase {
  constructor(
    protected readonly service: BookingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
