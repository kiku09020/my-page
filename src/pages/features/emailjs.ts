import emailjs from "@emailjs/browser";

export default function sendEmail(formRef: React.RefObject<HTMLFormElement>) {
  const serviceId = `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`;
  const templateId = `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`;
  const publicKey = `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`;

  if (!formRef.current) {
    alert("Form reference is not set");
    return;
  }

  emailjs
    .sendForm(serviceId, templateId, formRef?.current, {
      publicKey: publicKey,
    })
    .then(
      () => {
        alert("Email sent successfully!");
      },
      (error) => {
        alert("Email failed to send");
      }
    );
}
