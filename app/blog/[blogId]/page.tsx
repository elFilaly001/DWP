import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogPost, getAllBlogIds } from "@/lib/blogData";
import BlogPostPage from "@/components/V1/BlogPostPage";

interface Props {
  params: Promise<{ blogId: string }>;
}

export async function generateStaticParams() {
  return getAllBlogIds().map((id) => ({ blogId: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { blogId } = await params;
  const post = getBlogPost(blogId);

  if (!post) {
    return { title: "DWP - Blog" };
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    keywords: post.metadata.keywords,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      url: `https://dwp-seven.vercel.app/blog/${post.id}`,
      siteName: "DWP",
      images: [
        {
          url: "https://dwp-front.vercel.app/LOGO/logo.png",
          width: 800,
          height: 600,
          alt: "DWP Logo",
        },
      ],
      locale: "fr_FR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.description,
      images: ["https://dwp-front.vercel.app/LOGO/logo.png"],
    },
  };
}

export default async function Page({ params }: Props) {
  const { blogId } = await params;
  const post = getBlogPost(blogId);

  if (!post) {
    notFound();
  }

  return <BlogPostPage post={post} />;
}
