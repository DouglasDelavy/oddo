import { allPosts } from "contentlayer/generated";

import { SEO } from "@/components/SEO";

export default function Head({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

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
