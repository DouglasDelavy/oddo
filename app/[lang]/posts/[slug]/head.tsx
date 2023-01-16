import { allPosts } from "contentlayer/generated";

import { SEO } from "@/components/SEO";

type Props = {
  params: { slug: string; lang: string };
};

export default function Head({ params }: Props) {
  const post = allPosts.find(
    (post) => post.slug === params.slug && post.lang === params.lang
  );

  if (!post) {
    return <SEO />;
  }

  return (
    <SEO
      title={post.title}
      description={post.summary}
      image={post.image}
      date={new Date(post.date).toISOString()}
      type="article"
    />
  );
}
