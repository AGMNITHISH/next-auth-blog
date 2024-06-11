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
        className="bg-green-600 p-2 text-white rounded hover:bg-gray-700 bottom-1"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
