import { format, parseISO } from "date-fns";

import { useMDXComponent } from "next-contentlayer/hooks";

import { type Post } from "contentlayer/generated";
import { MDXComponents } from "./mdx-components";
import { DateLocale, Locale } from "@/i18n-config";

type PostLayoutProps = {
  post: Post;
  lang: Locale;
};

export const PostLayout = ({ post, lang }: PostLayoutProps) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="flex flex-col justify-start items-start max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
        <div className="flex gap-1 text-xs text-neutral-400">
          <p>{post.author}</p> -
          <time dateTime={post.date}>
            {format(parseISO(post.date), "LLLL d, yyyy", {
              locale: DateLocale[lang],
            })}
          </time>
        </div>
      </div>
      <div className="w-full max-w-3xl prose prose-sm prose-custom">
        <MDXContent components={MDXComponents} />
      </div>
    </article>
  );
};
