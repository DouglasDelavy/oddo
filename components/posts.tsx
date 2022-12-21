import { Post } from "contentlayer/generated";
import { PostCard } from "./post-card";

type PostsProps = {
  posts: Post[];
};

export const Posts = ({ posts }: PostsProps) => {
  return (
    <div className="mt-16">
      <header className="text-neutral-200">
        <h1 className="text-lg">Posts</h1>
      </header>

      <ul>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </ul>
    </div>
  );
};
