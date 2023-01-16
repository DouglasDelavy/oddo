import { defineDocumentType, makeSource } from "contentlayer/source-files";

import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

const getLocale = (path) => {
  const pathArray = path.split(".");

  return pathArray.length > 2 ? pathArray.slice(-2)[0] : "en";
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    summary: {
      type: "string",
      description: "Descriptions of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    author: {
      type: "string",
      description: "The Author of this porst",
      required: true,
    },
    image: {
      type: "string",
      description: "Image to be used with banner",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) =>
        `/posts/${post._raw.flattenedPath.replace(/(\.pt-br)/, "")}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/(\.pt-br)?\.mdx$/, ""),
    },
    lang: {
      type: "string",
      resolve: (doc) => {
        return getLocale(doc._raw.sourceFilePath);
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});
