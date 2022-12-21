import { compareDesc } from "date-fns";

import { allPosts } from "contentlayer/generated";

import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import { Posts } from "../../components/posts";

export default function Post() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <div className="w-screen h-screen px-4 py-8 flex flex-col items-center">
      <NavBar />

      <main className="flex-grow">
        <Posts posts={posts} />
      </main>

      <Footer />
    </div>
  );
}
