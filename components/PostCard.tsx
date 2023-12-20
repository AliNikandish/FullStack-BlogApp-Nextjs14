import Link from "next/link";
import React from "react";

const PostCard = () => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-5">
      <img
        className="w-full h-56 object-cover object-center"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"
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

        <h1 className="mx-3 text-white font-semibold text-lg">عنوان</h1>
      </div>
      <div className="py-4 px-6">
        <p className="text-lg text-gray-700 line-clamp-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
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

          <h1 className="px-2 text-sm bg-blue-600 p-0.5 rounded text-white">سرگرمی</h1>
        </div>
        <div className="mt-4 flex justify-center">
            <Link href='' className=" bg-gray-900 text-white py-1 px-2 rounded">مشاهده پست </Link> 
        </div>
      </div>
    </div>
  );
};

export default PostCard;
