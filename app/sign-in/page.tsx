import React from 'react'
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import SignInBtns from '@/components/SignInBtns';

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div  className="max-w-7xl mx-auto px-2">


<h1 className="text-center mt-8">ورود با</h1>
      <div className="mt-4 p-4 flex flex-col items-center justify-center gap-4">

       <SignInBtns/>
        <p className='text-xs text-red-500'>*در حال حاضر امکان ورود با گوگل نیست</p>

      </div>

    </div>
  )
}

export default page