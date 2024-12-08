import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { FormContext } from "../../models/form/formContext";
import { FormData, formSchema } from "../../models/form/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import zodErrorMap from "../../models/zodErrorMap";
import { FromFieldProps } from "../../models/form/formField";
import { Box, Button } from "@mui/material";
import sendEmail from "../../../features/emailjs";
import { useRef } from "react";

//------------------------------------------------------------

const formFields: FromFieldProps<FormData>[] = [
  { name: "name", label: "名前", isRequired: true },
  { name: "email", label: "メールアドレス", isRequired: true },
  { name: "message", label: "メッセージ", isRequired: true, isMultiline: true },
];

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "onChange", resolver: zodResolver(formSchema) });

  zodErrorMap();

  const onSubmit = handleSubmit(async (data: FormData) => {
    try {
      await sendEmail(formRef);
      console.log("Email sent successfully");
      alert("送信に成功しました");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("送信に失敗しました");
    }
  });

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", px: 4, pt: 4 }}
      onSubmit={onSubmit}
      ref={formRef}
    >
      <FormContext.Provider value={{ control, errors }}>
        {formFields.map((props) => (
          <FormField key={props.name} {...props} />
        ))}
      </FormContext.Provider>

      <Button type="submit" variant="contained" disabled={!isValid} sx={{ m: "0 auto" }}>
        送信
      </Button>
    </Box>
  );
}
