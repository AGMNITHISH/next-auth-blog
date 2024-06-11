import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LogoutForm from "@/components/LogoutForm";
import Image from "next/image";

const Dßashboard = async () => {
  const session = await auth();
  if (!session?.user) redirect("/");
  return (
    <div>
      <LogoutForm />
      <div>
        {session?.user.name}
        <Image
          src={session?.user?.image || ""}
          alt={session?.user?.image || ""}
          width={72}
          height={72}
        />
      </div>
    </div>
  );
};

export default Dßashboard;
