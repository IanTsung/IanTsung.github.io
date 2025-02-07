"use client";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github.svg";
import LinkedInIcon from "../../../public/linkedin.svg";

const EmailSection = () => {
  const darkMode = useSelector((state) => state.darkMode);

  const form = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Check for empty fields
    const formFields = {
      name: form.current.from_name.value,
      email: form.current.from_email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
    };

    const emptyFields = Object.entries(formFields).filter(([_, value]) => !value.trim());

    if (emptyFields.length > 0) {
      emptyFields.forEach(([fieldName]) => {
        toast.warn(`Please enter your ${fieldName}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
      return;
    }

    if (isSubmitting || cooldown) {
      if (cooldown) {
        toast.warn(
          "You just sent an email, please wait 1 minute before sending another.",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID }
      )
      .then(
        (result) => {
          toast.success("Thank you for reaching out!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          toast.error(
            "An error occurred sending your message, please try again",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setCooldown(true);

        // Set a 1-minute cooldown
        setTimeout(() => {
          setCooldown(false);
        }, 60000);
      });
  };

  const textColor = darkMode ? "text-white" : "text-slate-800";
  const iconColor = darkMode
    ? "invert(100%) brightness(2)"
    : "invert(0%) brightness(0)";
  const barColor = darkMode ? "bg-[#18191E]" : "bg-gray-200";
  const contentColor = darkMode ? "text-[#ADB7BE]" : "text-gray-700";
  const placeholderColor = darkMode
    ? "placeholder-[#9CA2A9]"
    : "placeholder-gray-400";

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className={`text-xl font-bold my-2 ${textColor}`}>Let's Connect</h5>
        <p className={`${contentColor} mb-4 max-w-md`}>
          {" "}
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-6">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/IanTsung"
            style={{ filter: `${iconColor}` }}
          >
            <Image src={GithubIcon} alt="github icon" width={25} height={25} />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/zhaoyancong/"
          >
            <Image
              src={LinkedInIcon}
              alt="linkedin icon"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="name"
              className={`block mb-2 text-sm font-medium ${textColor}`}
            >
              Your Name
            </label>
            <input
              type="text"
              name="from_name"
              id="name"
              placeholder="John Doe"
              className={`block w-full p-2.5 ${textColor} text-sm rounded-lg border border-[#33353F] ${placeholderColor} ${barColor}`}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className={`block mb-2 text-sm font-medium ${textColor}`}
            >
              Your Email
            </label>
            <input
              type="email"
              name="from_email"
              id="email"
              placeholder="JohnDoe@abc.com"
              className={`block w-full p-2.5 ${textColor} text-sm rounded-lg border border-[#33353F] ${placeholderColor} ${barColor}`}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className={`block mb-2 text-sm font-medium ${textColor}`}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Just to say hi"
              className={`block w-full p-2.5 ${textColor} text-sm rounded-lg border border-[#33353F] ${placeholderColor} ${barColor}`}
            />
          </div>
          <div className="mb-12">
            <label
              htmlFor="message"
              className={`block mb-2 text-sm font-medium ${textColor}`}
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              className={`block w-full p-2.5 ${textColor} text-sm rounded-lg border border-[#33353F] ${placeholderColor} ${barColor}`}
              placeholder="Hi Ian, I'd like to talk about..."
            />
          </div>
          <button
            type="submit"
            className={`bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full sm:w-1/3 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default EmailSection;
