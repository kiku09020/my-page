import { TextField } from "@mui/material";
import { useContext } from "react";
import { Controller } from "react-hook-form";
import { FormContext } from "../../models/form/formContext";
import { FormData } from "../../models/form/formSchema";
import { FromFieldProps } from "../../models/form/formField";

export default function FormField({ name, label, isRequired = false }: FromFieldProps<FormData>) {
  const formContext = useContext(FormContext);

  return (
    <Controller
      name={name}
      control={formContext.control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          fullWidth
          required={isRequired}
          error={fieldState.error ? true : false}
          helperText={fieldState.error ? fieldState.error.message : ""}
        />
      )}
    />
  );
}
