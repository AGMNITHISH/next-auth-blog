import { signIn } from "@/auth";
import React from "react";

const LoginForm = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <button
        className="bg-black py-2 px-4 text-white rounded-3xl hover:bg-gray-800 text-[13px] bottom-1"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
