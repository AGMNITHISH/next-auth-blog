import React from "react";
import { fetchData } from "./actions/blogActions";
import BlogCard from "@/components/BlogCard";
import LoginForm from "@/components/LoginForm";
export interface getFormDataInterface {
  id: string;
  title: string;
  subTitle: string | null;
  imageUrl: string;
  content: string;
  createdBy: string;
  createdByAvatar: string;
  createdAt: Date;
}

const Main: React.FC<getFormDataInterface> = async () => {
  const getTop10Data: getFormDataInterface[] = await fetchData();

  return (
    <div className="flex flex-col mt-6">
      {getTop10Data.map((item) => {
        return <BlogCard item={item} key={item.id} />;
      })}
      <div className="my-2 flex justify-center items-center space-x-2">
        <span>Sigin to see more contents</span>

        <LoginForm />
      </div>
    </div>
  );
};

export default Main;
