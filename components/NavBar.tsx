"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {

  return (
    <>
      <div className="flex flex-wrap place-items-center">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-gray-900 text-white w-screen px-3 items-center">
            <div className="px-5 xl:px-12 py-4 flex w-full items-center">
              <Link className="text-3xl font-bold font-heading" href="#">
                بلاگ
              </Link>
              <ul className="flex px-4 mx-auto font-semibold font-heading space-x-12 gap-x-2">
                <li>
                  <Link className="hover:text-gray-200" href="#">
                    خانه
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200" href="#">
                    داشبورد
                  </Link>
                </li>
              </ul>
            </div>

            <Link href='/' className=" flex gap-x-2 mr-6 items-center bg-blue-600 text-white px-3 py-2 rounded">
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
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <p>ورود</p>
              <span>/</span>
              <p>عضو</p>
            </Link>
          </nav>
        </section>
      </div>
      <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Follow me on twitter"
            href="https://www.twitter.com/asad_codes"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
