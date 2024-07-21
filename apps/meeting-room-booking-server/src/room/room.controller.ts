import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RoomService } from "./room.service";
import { RoomControllerBase } from "./base/room.controller.base";

@swagger.ApiTags("rooms")
@common.Controller("rooms")
export class RoomController extends RoomControllerBase {
  constructor(
    protected readonly service: RoomService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
