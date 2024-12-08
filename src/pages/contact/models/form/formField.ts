import { FieldValues, Path } from "react-hook-form";

export type FromFieldProps<TFieldValue extends FieldValues> = {
  name: Path<TFieldValue>;
  label: string;
  isRequired?: boolean;
};
