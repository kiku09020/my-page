import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { FormContext } from "../../models/form/formContext";
import { FormData, formSchema } from "../../models/form/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import zodErrorMap from "../../models/zodErrorMap";
import { FromFieldProps } from "../../models/form/formField";
import { Box, Button } from "@mui/material";
import sendEmail from "../../../../features/emailjs/emailjs";
import { useRef } from "react";
import Recaptcha, { executeRecaptcha } from "../Racaptcha";

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

  // スキーマのエラーメッセージのマッピング
  zodErrorMap();

  const onSubmit = handleSubmit(async (_data: FormData) => {
    await executeRecaptcha(); // reCAPTCHA実行

    await sendEmail(formRef);
  });

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", px: 4, pt: 4 }}
      onSubmit={onSubmit}
      ref={formRef}
    >
      {/* フィールド */}
      <FormContext.Provider value={{ control, errors }}>
        {formFields.map((props) => (
          <FormField key={props.name} {...props} />
        ))}
      </FormContext.Provider>

      {/* 送信ボタン */}
      <Button type="submit" variant="contained" disabled={!isValid} sx={{ m: "0 auto" }}>
        送信
      </Button>

      {/* reCAPTCHA */}
      <Recaptcha />
    </Box>
  );
}
