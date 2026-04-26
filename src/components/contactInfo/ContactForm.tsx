import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
          formRef.current?.reset();
        }
      );
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 flex justify-center">
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-2xl bg-white dark:bg-[#111] shadow-xl rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white">
          Contact Us
        </h2>

        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            required
            placeholder="Mike John"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2952E3]"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="from_email"
            required
            placeholder="mike@example.com"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2952E3]"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your message here..."
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2952E3] resize-none"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-2 w-full py-3 rounded-lg bg-[#2952E3] text-white font-semibold text-sm sm:text-base hover:bg-[#1f3fd1] transition duration-200"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;