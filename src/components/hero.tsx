import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Hero() {
  const [email, setEmail] = useState("");

  function handleContact() {
    setEmail(atob("amFuQGdyYWRpYy5uZXQ="));
  }

  function handleCopy() {
    navigator.clipboard.writeText(email);
    toast.success("Copied to clipboard!");
  }

  const logo: Variants = {
    start: {
      pathLength: 0,
    },
    finished: {
      pathLength: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main className="flex flex-col justify-center items-center px-8 py-6">
      <svg
        className="sm:w-64 w-60"
        viewBox="0 0 6 7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Logo</title>
        <motion.path
          style={{
            fill: "none",
            stroke: "#70c4cf",
            strokeWidth: ".264583px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeOpacity: 1,
          }}
          d="m6.928 14 1.732 1v-4l-.866-.5v3l-.866-.5zM8.66 15l2.598-1.5v-2l-.866.5v1l-.866.5v-2l1.732-1v-1L8.66 11M6.928 13l.866-.5M7.794 10.5 10.392 9l.866.5M11.258 11.5l-.866-.5M10.392 12l-.866-.5M10.392 13l-.866-.5"
          transform="translate(-6.062 -8.5)"
          variants={logo}
          initial="start"
          animate="finished"
        />
      </svg>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">
          Hey!
          <br />
          I'm Jan,
          <br />a full-stack{" "}
          <span className="[text-shadow:_5px_5px_#70c4cf] dark:[text-shadow:_5px_5px_#558ABB]">
            web developer.
          </span>
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
          React / Next.js / NestJS / Linux / Docker / AWS
        </p>
        {email ? (
          <div className="flex text-lg text-center p-4 bg-slate-200 dark:bg-gray-800 w-full justify-between items-center">
            <code>{email}</code>
            <button onClick={handleCopy} className="btn px-2 py-1 rounded">
              Copy
            </button>
          </div>
        ) : (
          <button onClick={handleContact} className="btn px-8 py-4 text-lg">
            Contact me
          </button>
        )}
      </div>
      <Toaster position="bottom-center" />
    </main>
  );
}
