"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function Contact() {
  const [loadingMessage, setLoadingMessage] = useState({
    loading: false,
    message: "",
    success: false,
  });
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const { firstName, lastName, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!firstName || !lastName || !email || !message) {
        toast.error("Please fill all fields", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }

      setLoadingMessage({
        loading: true,
        message: "",
        success: false,
      });

      const formData = {
        name: `${firstName} ${lastName}`,
        email: email,
        message,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const res = await response.json();

      if (res?.message) {
        setformData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        setLoadingMessage({
          loading: false,
          message: res?.message,
          success: true,
        });
        toast.success(res.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        setLoadingMessage({
          loading: false,
          message: "Failed to send message!",
          success: false,
        });
        toast.error("Failed to send message!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      setLoadingMessage({
        loading: false,
        message: "Failed to send message!",
        success: false,
      });
      toast.error("Failed to send message!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.error("Contact form error:", error);
    }
  };

  return (
    <div
      className="max-w-2xl  w-full mx-auto rounded-none md:rounded-2xl md:p-8 shadow-input bg-white dark:bg-black px-4 pt-20"
      id="contact"
    >
      <div className="mx-auto flex flex-col items-center mb-12">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Get in Touch
        </h2>
        <p className="text-neutral-600 text-base max-w-sm mt-2 dark:text-neutral-300 text-center">
          Whether you have a question, need support, or want to discuss a
          project, I’d love to hear from you. Reach out anytime, and let’s bring
          your ideas to life.
        </p>
      </div>
      {/* {loadingMessage?.message && (
        <p
          className={`mt-5 text-base ${
            loadingMessage?.success ? "bg-green-500" : "bg-red-500"
          } p-4 rounded text-center text-white`}
        >
          *{loadingMessage?.message}
        </p>
      )} */}
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="First Name"
              type="text"
              className={"p-6"}
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Last Name"
              type="text"
              className={"p-6"}
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="youremail@email.com"
            type="email"
            className={"p-6"}
            name="email"
            value={email}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className={"mb-8"}>
          <Label htmlFor="message">Enter Your Message</Label>
          <textarea
            className=" w-full outline-none bg-zinc-800 p-6 rounded-lg mb-4 placeholder:text-zinc-neutral-700 text-white resize-none"
            rows={5}
            placeholder="Write a message..."
            name="message"
            value={message}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-900 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] p-6 mb-2 flex items-center justify-center"
          type="submit"
        >
          {!loadingMessage?.loading ? "Submit" : "Sending..."}
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
      <ToastContainer />
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full ", className)}>
      {children}
    </div>
  );
};
