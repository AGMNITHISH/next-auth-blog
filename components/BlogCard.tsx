import { getFormDataInterface } from "@/app/page";
import Image from "next/image";
import React from "react";
import moment from "moment";

interface BlogCardProps {
  item: getFormDataInterface;
}

const BlogCard: React.FC<BlogCardProps> = ({ item }) => {
  const {
    id,
    title,
    subTitle,
    imageUrl,
    content,
    createdBy,
    createdByAvatar,
    createdAt,
  } = item;
  return (
    <div className="mx-auto m-5 w-4/5 bg-gray-200 p-2 rounded">
      <div className="flex items-center space-x-3">
        <span className="rounded-full">
          <Image
            src={createdByAvatar || ""}
            alt={`${createdBy}-avatar`}
            width={50}
            height={30}
            className="rounded-full"
          />
        </span>

        <div className="flex flex-col">
          <div className="text-[14] font-semibold">{createdBy}</div>
          <div className="text-gray-600 text-sm">
            {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="text-[20px]">
          {title}{" "}
          <span className="text-[14px] text-gray-600">({subTitle})</span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Image
          src={imageUrl || ""}
          alt={`${createdBy}-imageUrl`}
          className="h-1/4 w-full rounded"
          width={1000}
          height={10}
        />
      </div>
      <div className="p-2">{content}</div>
    </div>
  );
};

export default BlogCard;
