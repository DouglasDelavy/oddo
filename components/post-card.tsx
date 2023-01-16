import Image from "next/image";
import { format, parseISO } from "date-fns";

import { Post } from "contentlayer/generated";
import { DateLocale, Locale } from "@/i18n-config";

type PostCardProps = {
  post: Post;
  lang: Locale;
};

export const PostCard = ({ post, lang }: PostCardProps) => {
  return (
    <div className="mt-4 p-4 max-w-[20rem] md:max-w-[34rem] bg-zinc-700 rounded-lg">
      <a
        href={post.url}
        className="w-full text-neutral-200 hover:brightness-125"
      >
        {post.image && (
          <div className="relative w-[18rem] h-[8rem] md:w-[32rem] md:h-[16rem]">
            <Image
              src={post.image}
              alt="Post image"
              className="object-cover rounded"
              fill
              unoptimized
              priority
            />
          </div>
        )}

        <h2 className="mt-2 text-lg font-semibold leading-none">
          {post.title}
        </h2>

        <p className="mt-1 line-clamp-2 text-neutral-400">{post.summary}</p>

        <div className="mt-4 flex gap-1 text-xs text-neutral-400">
          <p>{post.author}</p> -
          <time dateTime={post.date}>
            {format(parseISO(post.date), "LLLL d, yyyy", {
              locale: DateLocale[lang],
            })}
          </time>
        </div>
      </a>
    </div>
  );
};
