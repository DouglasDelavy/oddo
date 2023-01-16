import { compareDesc } from "date-fns";

import { allPosts } from "contentlayer/generated";

import { Locale } from "@/i18n-config";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { Posts } from "@/components/posts";

type PostProps = {
  params: { lang: Locale };
};

export default function Post({ params }: PostProps) {
  const posts = allPosts
    .filter((post) => post.lang === params.lang)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <div className="w-screen h-screen px-4 py-8 flex flex-col items-center">
      <NavBar />

      <main className="flex-grow">
        <Posts posts={posts} lang={params.lang} />
      </main>

      <Footer />
    </div>
  );
}
