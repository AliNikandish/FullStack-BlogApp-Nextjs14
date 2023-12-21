import { FormatTime } from "@/utils/Helpers";
import Image from "next/image";
import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
interface PostProps {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  catName: string;
  authorEmail: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}
const PostInfoCard = async ({
  id,
  title,
  content,
  imageUrl,
  catName,
  authorEmail,
  createdAt,
  updatedAt,
}: PostProps) => {

  const session = await getServerSession(authOptions);

  const IsAdmin = session && session?.user?.email === authorEmail;
  return (
    <div className="max-w-7xl mx-auto px-2 mt-8">
      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
          <Image src={imageUrl} alt="" width={1000} height={1000} />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div className="flex  item-center">
            <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
              {catName}
            </div>
          </div>
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">
            {title}
          </h3>
          <p className="md:text-lg text-gray-500 text-base">{content}</p>
          <div className="flex gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <p className="text-sm">نویسنده : {authorEmail}</p>
          </div>
          <div className="flex gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>

            <p className="text-sm">تاریخ ایجاد : {FormatTime(String(createdAt))}</p>
          </div>
          <div className="flex gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>

            <p className="text-sm">تاریخ آخرین آپدیت : {FormatTime(String(updatedAt))}</p>
          </div>
          {IsAdmin && (

            <>
            
            <div className="flex items-center gap-x-4">

              <DeleteButton id={id}/>
              <Link href={`${id}/edit`} className="bg-blue-500 text-white px-2 py-1 rounded">ویرایش پست</Link>
            </div>
            
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostInfoCard;
