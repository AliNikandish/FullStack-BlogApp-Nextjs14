import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="mt-5">
      <h3>موضوعات:</h3>

      <div className="flex gap-x-2 mt-2">
        <Link href='' className="bg-blue-500 text-blue-100 py-2 px-4 rounded-full text-xs font-bold flex items-center">
          سرگرمی
        </Link>
        <Link href='' className="bg-blue-500 text-blue-100 py-2 px-4 rounded-full text-xs font-bold flex items-center">
          ورزشی
        </Link>
        <Link href='' className="bg-blue-500 text-blue-100 py-2 px-4 rounded-full text-xs font-bold flex items-center">
          برنامه نویسی
        </Link>
        <Link href='' className="bg-blue-500 text-blue-100 py-2 px-4 rounded-full text-xs font-bold flex items-center">
          شبکه
        </Link>
        <Link href='' className="bg-blue-500 text-blue-100 py-2 px-4 rounded-full text-xs font-bold flex items-center">
          دیگر
        </Link>
      </div>
    </div>
  );
};

export default Categories;
