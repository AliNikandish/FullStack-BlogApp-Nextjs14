"use client"

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'

const SignInBtns = () => {
  return (
    <div>

<button
        type='button'
          onClick={() => {
            signIn("github")            
          }}
          className="flex items-center border p-4 rounded-full gap-4 hover:bg-slate-100/25 transition w-60"
        >
          <span>
            <Image
              src={"/github-logo.svg"}
              width={30}
              height={30}
              alt="GitHub Logo"
            />
          </span>
          ورود با اکانت گیت هاب
        </button>

        <button
        disabled
          className="mt-4 flex items-center border p-4 rounded-full gap-4 hover:bg-slate-100/25 transition w-60"
        >
          <span>
            <Image
              src={"/google-logo.svg"}
              width={30}
              height={30}
              alt="Google Logo"
            />
          </span>
          ورود با اکانت گوگل
        </button>


    </div>
  )
}

export default SignInBtns