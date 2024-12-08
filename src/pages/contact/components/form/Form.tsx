import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { FormContext } from "../../models/form/formContext";
import { FormData, formSchema } from "../../models/form/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import zodErrorMap from "../../models/zodErrorMap";
import { FromFieldProps } from "../../models/form/formField";

//------------------------------------------------------------

const FormFields: FromFieldProps<FormData>[] = [
  { name: "name", label: "名前", isRequired: true },
  { name: "email", label: "メールアドレス", isRequired: true },
  { name: "message", label: "メッセージ", isRequired: true },
];

export default function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "onChange", resolver: zodResolver(formSchema) });

  zodErrorMap();

  const onSubmit = handleSubmit((data: FormData) => {});

  return (
    <>
      <form onSubmit={onSubmit} aria-label="">
        <FormContext.Provider value={{ control, errors }}>
          {FormFields.map((props) => (
            <FormField key={props.name} {...props} />
          ))}
        </FormContext.Provider>
        <button type="submit" disabled={!isValid}>
          送信
        </button>
      </form>
    </>
  );
}
