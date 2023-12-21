import Form from '@/components/Form'
import { Post } from '@prisma/client';
import React from 'react'

const getPost = async (id: string): Promise<Post | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`, {
      cache: "no-store",
    });

    if (res.ok) {
      const post = await res.json();
      return post;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const post = await getPost(id);
  
  return (
    <div>
          <Form isEdit={true} {...post}/>
    </div>
  )
}

export default page