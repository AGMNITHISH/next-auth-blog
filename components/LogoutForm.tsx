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
        className="bg-green-600 p-2 text-white rounded hover:bg-gray-700 bottom-1"
        type="submit"
      >
        Sign out
      </button>
    </form>
  );
};

export default LogoutForm;
