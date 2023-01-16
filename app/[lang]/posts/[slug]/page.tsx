import { Footer } from "components/footer";
import { NavBar } from "components/navbar";
import { allPosts } from "contentlayer/generated";

import { PostLayout } from "@/components/post";
import { Locale } from "@/i18n-config";

type PostProps = {
  params: { lang: Locale; slug: string };
};

export const dynamicParams = false;

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }));

export default function Post({ params }: PostProps) {
  const post = allPosts.find(
    (post) => post.slug === params.slug && post.lang === params.lang
  );

  if (!post) {
    return null;
  }

  return (
    <div className="w-screen h-screen px-4 py-8 flex flex-col items-center overflow-x-hidden">
      <NavBar />

      <main className="w-full py-8 flex-grow">
        <PostLayout post={post} lang={params.lang} />
      </main>

      <Footer />
    </div>
  );
}
