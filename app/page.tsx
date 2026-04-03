import { Metadata } from "next";
import { allBlogs } from "contentlayer/generated";
import { allProjects } from "contentlayer/generated";
import HomePage from "@/app/components/HomePage";

export const metadata: Metadata = {
  title: "Home | Brendan Lambrecht",
};

export default function Home() {
  const blogs = allBlogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((_, i) => i < 3);

  const projects = allProjects
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((_, i) => i < 2);

  return <HomePage blogs={blogs} projects={projects} />;
}