import React from "react";
import LogoutForm from "./LogoutForm";
import { headers } from "next/headers";
import LoginForm from "./LoginForm";
import { auth } from "@/auth";
import Image from "next/image";

const Header = async () => {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const session = await auth();
  return (
    <div className="h-16 w-full flex items-center justify-between p-2">
      <div className="text-2xl font-bold ">Next blog</div>
      <div className="">
        {pathname === "/" ? (
          <>
            <LoginForm />
          </>
        ) : (
          <div className="flex space-x-2">
            <div>
              <Image
                src={session?.user?.image || ""}
                alt={session?.user?.name || ""}
                width={40}
                height={40}
                className="rounded-full border-red-500"
              />
            </div>
            <LogoutForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
