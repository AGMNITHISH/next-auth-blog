import React from "react";
import { signOut } from "@/auth";

const LogoutForm = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button
        className="bg-black py-2 px-4 text-white rounded-3xl hover:bg-gray-800 text-[13px] bottom-1"
        type="submit"
      >
        Sign out
      </button>
    </form>
  );
};

export default LogoutForm;
