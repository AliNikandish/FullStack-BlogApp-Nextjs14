import Form from '@/components/Form'
import React from 'react'
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  if (!session) {
    redirect("/sign-in");
  }
  return (
    <Form isEdit={false}/>
  )
}

export default page