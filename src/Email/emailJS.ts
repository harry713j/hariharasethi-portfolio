import emailJS, { EmailJSResponseStatus } from "@emailjs/browser";

export async function sendEmail(name: string, email: string, message: string) {
  try {
    await emailJS.send(
      import.meta.env.VITE_GMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        user_email: email,
        user_name: name,
        message: message,
      },
      import.meta.env.VITE_EMAILJS_API_KEY
    );
    console.log("SUCCESS!");
  } catch (error: any) {
    if (error instanceof EmailJSResponseStatus) {
      console.log("EMAILJS FAILED...", error);
      throw new Error(error.text || "Failed to send email");
    } else {
      console.log("ERROR", error.message);
      throw new Error(error.message || "Failed to send message");
    }
  }
}
