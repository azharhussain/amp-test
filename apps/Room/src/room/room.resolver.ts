import * as graphql from "@nestjs/graphql";
import { RoomResolverBase } from "./base/room.resolver.base";
import { Room } from "./base/Room";
import { RoomService } from "./room.service";

@graphql.Resolver(() => Room)
export class RoomResolver extends RoomResolverBase {
  constructor(protected readonly service: RoomService) {
    super(service);
  }
}
