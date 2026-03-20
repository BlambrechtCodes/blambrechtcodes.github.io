import Image from "next/image";
import type { Project } from "@/.contentlayer/generated";

import Link from "@/app/components/Link";
import Halo from "@/app/components/Halo";
import SmartImage from "@/app/components/SmartImage";

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="flex flex-col gap-6 w-full">
      {projects.map((project) => (
        <div
          key={project.slug}
          className="w-full transition-opacity"
        >
          <Link href={`/projects/${project.slug}`} className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
            <div className="w-full md:w-48 lg:w-64 aspect-video overflow-hidden rounded-md bg-secondary flex-shrink-0">
              <Halo strength={10}>
                {project.image ? (
                  <SmartImage
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover"
                    themeSwitch={true}
                  />
                ) : (
                  <div className="h-full w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">No image available</span>
                  </div>
                )}
              </Halo>
            </div>
            <div className="space-y-2 flex-1">
              <p className="font-medium leading-tight text-lg">{project.title}</p>
              <p className="text-secondary text-sm md:text-base">{project.summary}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}