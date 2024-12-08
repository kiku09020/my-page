import { createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Recaptcha() {
  const siteKey = `${import.meta.env.REACT_APP_RECAPTCHA_SITE_KEY}`;
  const recaptchaRef = createRef<ReCAPTCHA>();

  const onSubmit = () => {
    recaptchaRef.current?.execute();
  };

  return <ReCAPTCHA ref={recaptchaRef} sitekey={siteKey} />;
}
