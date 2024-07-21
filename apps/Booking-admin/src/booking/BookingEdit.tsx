import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="start_time" source="startTime" />
        <DateTimeInput label="end_time" source="endTime" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="User ID" source="userId" />
        <TextInput label="Room ID" source="roomId" />
      </SimpleForm>
    </Edit>
  );
};
