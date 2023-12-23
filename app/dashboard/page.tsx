import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Post } from "@/types";
import PostCard from "@/components/PostCard";

const getPosts = async (email: string) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/authors/${email}`);
    const { posts } = await res.json();
    return posts;
  } catch (error) {
    return null;
  }
};

const page = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  let posts = [];

  if (!session) {
    redirect("/sign-in");
  }

  if (email) {
    posts = await getPosts(email);
  }
  return (
    <div className="max-w-7xl mx-auto px-2">
      <h3 className="mt-4">پست های شما </h3>
      <div className="my-5 flex justify-center">
        <Link
          className="mt-4 bg-blue-500 text-white px-2 py-1 rounded flex gap-x-2"
          href={"/posts/new"}
        >
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
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <p>ساخت پست</p>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5">
        {posts && posts.length > 0 ? (
          posts.map((post: Post) => (
            <PostCard
              key={post.id}
              id={post.id}
              author={""}
              authorEmail={post.authorEmail}
              date={post.createdAt}
              thumbnail={post.imageUrl}
              category={post.catName}
              title={post.title}
              content={post.content}
            />
          ))
        ) : (
          <div className="py-6 flex  items-center flex-col">
            <p>هیچ پستی وجود ندارد.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
