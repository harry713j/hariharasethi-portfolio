import { useState } from "react";
import { motion } from "framer-motion";
import {
  Input,
  Textarea,
  BorderGradientButton,
  GitHub,
  Instagram,
  LeetCode,
  LinkedIn,
  Alert,
} from "../ui";
import { sendEmail } from "../../Email/emailJS";

import LocationPin from "/location-pin-svgrepo-com.svg";
import Envelope from "/envelope-svgrepo-com.svg";

function Contact() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [alertKey, setAlertKey] = useState(0);

  const onSubmit = async () => {
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      if (!formValue.email || !formValue.name || !formValue.message) {
        setIsLoading(false);
        setError("Please provide all the fields");
        setAlertKey((key) => key + 1);
        return;
      }

      if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formValue.email)) {
        setIsLoading(false);
        setError("Please provide a valid email");
        setAlertKey((key) => key + 1);
        return;
      }

      await sendEmail(formValue.name, formValue.email, formValue.message);

      setSuccess("Email sent successfully");

      setFormValue({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error("Error sending email", err);
      setError("Error while sending email");
      setAlertKey((key) => key + 1);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeIn",
      }}
      viewport={{ once: true }}
      className="w-full flex justify-center"
    >
      <section
        id="contact"
        className="w-[96%] flex justify-center lg:mb-20 md:mb-16 sm:mb-14 mb-12"
      >
        <div className="w-full flex flex-col items-center xl:gap-10 lg:gap-9 md-gap-8 sm-gap-7 gap-6">
          <h2 className="font-JetMono capitalize font-bold text-turquoise xl:text-[28px] lg:text-[26px] md:text-2xl sm:text-xl text-lg">
            Connect with me
          </h2>
          <div className="min-[900px]:w-[45%] min-[900px]:self-start self-center ">
            <p className="select-none font-JetMono font-medium text-white/70 lg:text-base min-[900px]:text-[15px] md:text-sm sm:text-[13px] text-xs">
              If you want to know more about me or my work, or if you would just
              like to say hello, send me a message. I'd love to hear from you.
            </p>
          </div>
          <div className="w-full flex md:flex-row flex-col-reverse md:items-start items-center md:justify-between md:gap-0 sm:gap-8 gap-6">
            <div className="md:w-[45%] w-full flex flex-col justify-center lg:gap-16 min-[900px]:gap-12 md:gap-10 sm:gap-8 gap-6">
              <div className="w-full flex flex-col justify-center lg:gap-5 min-[900px]:gap-4 md:gap-4 sm:gap-3 gap-2">
                <span className="flex items-end lg:gap-5 min-[900px]:gap-4 md:gap-4 sm:gap-3 gap-2">
                  <span className="min-[900px]:w-[25px] md:w-5 w-4">
                    <img
                      src={LocationPin}
                      alt="location-pin"
                      title="Location"
                      className="w-full object-cover"
                    />
                  </span>
                  <span className="font-JetMono font-light text-white/60 lg:text-sm md:text-[13px] sm:text-xs text-[11px]">
                    Planet Earth&nbsp;🌎
                  </span>
                </span>
                <span className="flex items-center lg:gap-5 min-[900px]:gap-4 md:gap-4 sm:gap-3 gap-2">
                  <span className="min-[900px]:w-[25px] md:w-5 w-4">
                    <img
                      src={Envelope}
                      alt="envelope"
                      title="Send Email"
                      className="w-full object-cover"
                    />
                  </span>
                  <span className="font-JetMono font-light text-white/60 transition-colors duration-200 ease-linear hover:text-turquoise lg:text-sm md:text-[13px] sm:text-xs text-[11px]">
                    <a
                      href="mailto:hariharasethi89@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Send Email
                    </a>
                  </span>
                </span>
              </div>
              <div className="min-[900px]:w-[70%] md:w-[90%] md:mx-0 w-[60%] min-[320px]:w-full mx-auto flex items-center justify-center md:gap-0 gap-5 md:justify-around">
                <GitHub href="https://github.com/harry713j" />
                <LinkedIn href="https://www.linkedin.com/in/harihara-sethi/" />
                <LeetCode href="https://leetcode.com/u/Harry777/" />
                <Instagram href="https://www.instagram.com/harihara7007/" />
              </div>
            </div>
            <div className="md:w-[40%] w-full">
              <span className="w-full flex flex-col  justify-center lg:gap-5 md:gap-4 sm:gap-3.5 gap-3">
                <Input
                  value={formValue.name}
                  onChangeValue={(value) =>
                    setFormValue({ ...formValue, name: value })
                  }
                  placeholder="your name"
                />
                <Input
                  value={formValue.email}
                  onChangeValue={(value) =>
                    setFormValue({ ...formValue, email: value })
                  }
                  placeholder="your email"
                />
                <Textarea
                  value={formValue.message}
                  onChangeValue={(value) =>
                    setFormValue({ ...formValue, message: value })
                  }
                  placeholder="Message"
                />
                <BorderGradientButton
                  gradient="bg-button-gradient"
                  onClick={onSubmit}
                >
                  {isLoading ? (
                    <span className="animate-spin md:w-7 md:h-7 w-6 h-6 rounded-full bg-transparent border-[3px] border-current border-t-transparent text-white">
                      <span className="sr-only">loading...</span>
                    </span>
                  ) : (
                    "send message"
                  )}
                </BorderGradientButton>
              </span>
            </div>
          </div>
        </div>

        {success && (
          <Alert
            key={`success-${alertKey}`}
            message={success}
            messageType="SUCCESS"
          />
        )}
        {error && (
          <Alert
            key={`error-${alertKey}`}
            message={error}
            messageType="ERROR"
          />
        )}
      </section>
    </motion.div>
  );
}

export default Contact;
