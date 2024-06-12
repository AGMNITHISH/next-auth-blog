"use server";
import { prisma } from "../../utils/prisma";

export async function create(formdata: FormData) {
  console.log("formdata", formdata);

  const title = formdata.get("title") as string;
  const subTitle = formdata.get("subTitle") as string;
  const content = formdata.get("content") as string;
  const imageUrl = formdata.get("imageUrl") as string;
  const createdBy = formdata.get("createdBy") as string;
  const createdByAvatar = formdata.get("createdByAvatar") as string;

  if (
    !title.trim() ||
    !subTitle.trim() ||
    !content.trim() ||
    !imageUrl.trim() ||
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
      imageUrl,
      createdBy,
      createdByAvatar,
    },
  });
}
