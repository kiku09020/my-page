import { createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = createRef<ReCAPTCHA>();

export default function Recaptcha() {
  const siteKey = `${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;

  return <ReCAPTCHA ref={recaptchaRef} sitekey={siteKey} size="invisible" />;
}

export const executeRecaptcha = async () => {
  try {
    await recaptchaRef.current?.executeAsync();
  } catch (e) {
    console.error(e);
  }
};
