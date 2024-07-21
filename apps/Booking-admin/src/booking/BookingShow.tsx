import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BookingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="start_time" source="startTime" />
        <TextField label="end_time" source="endTime" />
        <TextField label="status" source="status" />
        <TextField label="User ID" source="userId" />
        <TextField label="Room ID" source="roomId" />
      </SimpleShowLayout>
    </Show>
  );
};
