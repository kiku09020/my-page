import { z } from "zod";

export default function zodErrorMap() {
  const zodErrorMap: z.ZodErrorMap = (issue, ctx) => {
    switch (issue.code) {
      case z.ZodIssueCode.too_small:
        return { message: "必須項目です。" };

      case z.ZodIssueCode.too_big:
        return { message: `${issue.maximum}文字以内で入力してください。` };

      case z.ZodIssueCode.invalid_string:
        if (issue.validation === "email") {
          return { message: "メールアドレスの形式で入力してください。" };
        }
    }

    return { message: ctx.defaultError };
  };

  z.setErrorMap(zodErrorMap);
}
