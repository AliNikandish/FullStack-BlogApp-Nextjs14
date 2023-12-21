"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <>
      <div className="flex flex-wrap place-items-center">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-gray-900 text-white w-screen px-3 items-center">
            <div className="px-5 xl:px-12 py-4 flex w-full items-center">
              <Link className="text-3xl font-bold font-heading" href="/">
                بلاگ
              </Link>
              <ul className="flex px-4 mx-auto font-semibold font-heading space-x-4 md:space-x-8 gap-x-2">
                <li>
                  <Link className="hover:text-gray-200" href="/">
                    خانه
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200" href="/dashboard">
                    داشبورد
                  </Link>
                </li>
              </ul>
            </div>

            {status === "authenticated" ? 
            
            (
              <button onClick={() => signOut()}  className=" flex gap-x-2  items-center bg-blue-600 text-white px-3 py-2 rounded">
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
              <p>خروج</p>
            </button>
            ) 
            
            :
            
            (<Link href='/sign-in' className=" flex gap-x-2  items-center bg-blue-600 text-white px-3 py-2 rounded">
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
            </Link>)
            
            }

            
          </nav>
        </section>
      </div>
    </>
  );
};

export default NavBar;
