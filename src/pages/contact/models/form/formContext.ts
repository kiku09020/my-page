import { createContext } from "react";
import { Control, FieldErrors, FieldValues } from "react-hook-form";
import { FormData } from "./formSchema";

type FormContextProps<TFieldValue extends FieldValues> = {
  control: Control<TFieldValue, any> | undefined;
  errors: FieldErrors<TFieldValue>;
};

export const FormContext = createContext<FormContextProps<FormData>>({
  control: undefined,
  errors: {},
});
