import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BookingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Bookings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="start_time" source="startTime" />
        <TextField label="end_time" source="endTime" />
        <TextField label="status" source="status" />
        <TextField label="User ID" source="userId" />
        <TextField label="Room ID" source="roomId" />
      </Datagrid>
    </List>
  );
};
