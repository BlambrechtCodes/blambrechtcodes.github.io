import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, "");

const blogComputedFields: ComputedFields = {
  slug: { type: "string", resolve: (doc) => getSlug(doc) },
  image: {
    type: "string",
    resolve: (doc) => {
      const slug = getSlug(doc);
      switch(slug) {
        case 'MCP': return '/blog/mcp/image_light.png';
        case 'pages': return '/blog/pages/image_light.png';
        case 'phishguard': return '/blog/phishguard/image_light.png';
        case 'coders-website': return '/blog/CODERS_Website/image_light.png';
        default: return null;
      }
    },
  },
  og: { type: "string", resolve: (doc) => `/blog/${getSlug(doc)}/image.png` },
};

const projectComputedFields: ComputedFields = {
  slug: { type: "string", resolve: (doc) => getSlug(doc) },
  image: {
    type: "string",
    resolve: (doc) => {
      const slug = getSlug(doc);
      switch(slug) {
        case 'mcp': return '/projects/mcp/image_light.png';
        case 'pages': return '/projects/pages/image_light.png';
        case 'phishguard': return '/projects/phishguard/image_light.png';
        case 'coders-website': return '/projects/coders-website/image_light.png';
        default: return `/projects/${slug}/image_light.png`;
      }
    },
  },
};

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    date: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    tags: { type: "json", required: false },
  },
  computedFields: blogComputedFields,
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `project/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    longSummary: { type: "string", required: false },
    date: { type: "string", required: true },
    url: { type: "string", required: false },
    tags: { type: "json", required: false },
  },
  computedFields: projectComputedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, Project],
  mdx: {
    rehypePlugins: [rehypePrism, rehypeSlug],
  },
});
