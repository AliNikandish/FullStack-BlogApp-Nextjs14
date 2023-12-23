import { FormatTime } from "@/utils/Helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import noImage from '../public/thumbnail.jpg'

interface PostProps {
  id: string;
  author: string;
  date: string;
  thumbnail?: string;
  authorEmail?: string;
  title: string;
  content: string;
  category?: string;
}

const PostCard = async ({
  id,
  author,
  date,
  thumbnail,
  title,
  content,
  category,
}: PostProps) => {
  
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-5">
      <Image
        className="w-full h-56 object-center"
        src={thumbnail ? thumbnail : noImage}
        alt="avatar"
        width={500}
        height={500}
      />
      <div className="flex items-center px-6 py-3 bg-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          color="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
          />
        </svg>
        <h1 className="mx-3 text-white font-semibold text-lg">{title}</h1>
      </div>
      <div className="mt-2 px-6 flex items-center gap-x-1 text-xs">
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
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>

        <p>نوشته شده توسط : {author} در {FormatTime(date)}</p>
      </div>
      <div className="py-2 px-6">
        <p className="text-lg text-gray-700 line-clamp-3">{content}</p>
        <div className="flex items-center mt-4 text-gray-700 gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6h.008v.008H6V6Z"
            />
          </svg>

          <p className="px-2 text-sm bg-blue-600 p-0.5 rounded text-white">
            {category}
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <Link href={`/posts/${id}`} className=" bg-gray-900 text-white py-1 px-2 rounded">
            مشاهده پست{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
