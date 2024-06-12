import React from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import FileUpload from "../../components/FileUpload";
import Button from "../../components/Button";
import { create } from "../actions/blogActions";
import { auth } from "@/auth";

const BlogForm = async () => {
  const session = await auth();
  return (
    <div className="max-w-2xl mx-auto my-auto  p-10 rounded-lg">
      <form action={create}>
        <Input
          label="createdBy"
          name="createdBy"
          value={session?.user?.name || ""}
          className="hidden"
        />
        <Input
          label="createdByAvatar"
          name="createdByAvatar"
          value={session?.user?.image || ""}
          className="hidden"
        />
        <Input label="Title" placeholder="Enter Title" name="title" />
        <Input
          label="Sub title"
          placeholder="Enter Sub title"
          name="subTitle"
        />
        <TextArea
          label="Blog content"
          placeholder="Enter blog content"
          name="content"
        />
        <FileUpload
          label="Upload image"
          name="imageUrl"
          placeholder="No file chosen"
        />
        <Button type="submit" label="Create post" />
      </form>
    </div>
  );
};

export default BlogForm;
