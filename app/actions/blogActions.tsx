"use server";
import { prisma } from "../../utils/prisma";
import { cloudinary } from "@/utils/cloudinary";
import { redirect } from "next/navigation";

async function uploadImage(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  return await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, function (err, result) {
        if (err) {
          reject(err);
        } else {
          if (result && result.url) {
            resolve(result?.url);
          }
          reject(new Error("Upload failed, no URL returned"));
        }
      })
      .end(buffer);
  });
}

export async function create(formdata: FormData) {
  console.log("formdata", formdata);

  const title = formdata.get("title") as string;
  const subTitle = formdata.get("subTitle") as string;
  const content = formdata.get("content") as string;
  const imageUrl = formdata.get("imageUrl") as File;
  const createdBy = formdata.get("createdBy") as string;
  const createdByAvatar = formdata.get("createdByAvatar") as string;

  try {
    const cloudinaryImageUpload = await uploadImage(imageUrl);

    console.log("cloudinaryImageUpload", cloudinaryImageUpload);
    if (
      !title.trim() ||
      !subTitle.trim() ||
      !content.trim() ||
      !cloudinaryImageUpload.trim() ||
      !createdBy.trim() ||
      !createdByAvatar.trim()
    ) {
      return;
    }
    await prisma.blog.create({
      data: {
        title,
        subTitle,
        content,
        imageUrl: cloudinaryImageUpload,
        createdBy,
        createdByAvatar,
      },
    });
    console.log("Blog entry created successfully");
    redirect("/dashboard");
  } catch (error) {
    console.error("Error creating blog entry:", error);
    throw error;
  }
}

export const fetchData = async () => {
  return await prisma.blog.findMany({
    take: 10,
    select: {
      id: true,
      title: true,
      subTitle: true,
      content: true,
      imageUrl: true,
      createdBy: true,
      createdByAvatar: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};
