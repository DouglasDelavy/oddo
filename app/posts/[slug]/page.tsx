import { Footer } from "components/footer";
import { NavBar } from "components/navbar";
import { allPosts } from "contentlayer/generated";

import { PostLayout } from "@/components/post";

type PostProps = {
  params: { slug: string };
};

export const dynamicParams = false;

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export default function Post({ params }: PostProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    return null;
  }

  return (
    <div className="w-screen h-screen px-4 py-8 flex flex-col items-center overflow-x-hidden">
      <NavBar />

      <main className="w-full py-8 flex-grow">
        <PostLayout post={post} />
      </main>

      <Footer />
    </div>
  );
}
