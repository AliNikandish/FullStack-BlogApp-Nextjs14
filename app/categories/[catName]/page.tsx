import PostCard from '@/components/PostCard'
import { Post } from '@/types';
import React from 'react'

const getPosts = async (catName: string): Promise<Post[] | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/categories/${catName}`,
      { cache: "no-store" }
    );

    if (res.ok) {
      const categories = await res.json();
      const posts = categories.posts;
      return posts;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

const page = async ({
  params,
}: {
  params: { catName: string };
}) => {

  const category = params.catName;
  const posts = await getPosts(category);
  return (
    <div className="max-w-7xl mx-auto px-2">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5">
        {posts && posts.length > 0 ? (
          posts.map((post: Post) => (
            <PostCard
              key={post.id}
              id={post.id}
              author={post.author.name}
              authorEmail={post.authorEmail}
              date={post.createdAt}
              thumbnail={post.imageUrl}
              category={post.catName }
              title={post.title}
              content={post.content}
            />
          ))
        ) : (
          <div className="py-6">No posts to display</div>
        )}
      </div>
      </div>

  )
}

export default page