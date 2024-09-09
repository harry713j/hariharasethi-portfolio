import { useEffect, useState } from "react";
import ErrorIcon from "/error-svgrepo-com.svg";
import SuccessIcon from "/success-svgrepo-com.svg";
import { motion } from "framer-motion";

type AlertProps = {
  message: string;
  messageType: "ERROR" | "SUCCESS";
  className?: string;
};

function Alert({ message, messageType, className }: AlertProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);

      const id = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      return () => {
        clearTimeout(id);
      };
    }
  }, [message, messageType]);

  if (!message) return null;

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, bottom: 100, left: 0 }}
          whileInView={{ opacity: 1, bottom: 0, left: 50 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`${className} fixed bottom-0 left-1/2 transform -translate-x-1/2  transition-transform duration-500 ease-in-out ${
              isVisible ? "translate-y-0" : "translate-y-full"
            } bg-[#414141] max-w-xs sm:p-2 p-1.5 rounded-lg shadow-lg border ${
              messageType === "ERROR" ? "border-red-300" : "border-green-300"
            }`}
          >
            <div className="w-full flex items-center gap-6 md:p-4 p-2">
              <span className="w-5">
                <img
                  src={messageType === "ERROR" ? ErrorIcon : SuccessIcon}
                  alt={messageType === "ERROR" ? "error" : "success"}
                  className="w-full"
                />
              </span>
              <p className="font-JetMono font-light text-sm text-gray-200 capitalize ">
                {message}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Alert;
