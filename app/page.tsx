import Categories from "@/components/Categories";
import PostCard from "@/components/PostCard";
import { Post } from "@/types";

const getAllPosts = async (): Promise<Post[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
      cache: "no-store",
    });

    if (res.ok) {
      const posts = await res.json();
      return posts;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export default async function Home() {
  const allPosts = await getAllPosts();
  return (
    <div className="max-w-7xl mx-auto px-2">
      <Categories />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5">
        {allPosts && allPosts.length > 0 ? (
          allPosts.map((post: Post) => (
            <PostCard
              key={post.id}
              id={post.id}
              author={post.author.name}
              authorEmail={post.authorEmail}
              date={post.createdAt}
              thumbnail={post.imageUrl}
              category={post.catName}
              title={post.title}
              content={post.content}
            />
          ))
        ) : (
          <div className="py-6">No posts to display</div>
        )}
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div> */}
    </div>
  );
}
