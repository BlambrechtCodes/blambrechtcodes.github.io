'use client';

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "@/app/components/Link";
import PostList from "@/app/blog/components/PostList";
import ProjectList from "@/app/projects/components/ProjectList";
import { Waves } from "@/components/ui/wave-background";
import { useState, useEffect } from 'react';

interface HomePageProps {
  blogs: any[];
  projects: any[];
}

export default function HomePage({ blogs, projects }: HomePageProps) {
  const [wavesLoaded, setWavesLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Set a timeout to ensure fallback is shown if waves take too long
    const timeout = setTimeout(() => {
      if (!wavesLoaded) {
        setHasError(true);
      }
    }, 3000); // 3 seconds timeout

    return () => clearTimeout(timeout);
  }, [wavesLoaded]);

  return (
    <div className="relative min-h-screen w-full home-page">
      {/* Animated wave background with error boundary */}
      <div className="fixed inset-0 -z-10">
        <div className="h-screen w-full relative">
          {!hasError ? (
            <Waves 
              className="h-full w-full" 
              onLoaded={() => setWavesLoaded(true)}
              onError={() => setHasError(true)}
            />
          ) : (
            // CSS-only fallback when JavaScript fails
            <div className="waves-fallback h-full w-full"></div>
          )}
        </div>
      </div>

      {/* Glass card with proper light/dark mode styling */}
      <div className="relative z-10 px-6 py-12 md:py-16 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-white/90 to-white/70
                        dark:from-white/10 dark:via-white/5 dark:to-black/20
                        backdrop-blur-3xl border border-white/50 dark:border-white/30 
                        rounded-[3rem] shadow-2xl shadow-black/10 dark:shadow-2xl dark:shadow-black/40 
                        max-w-4xl mx-auto p-8 md:p-12 lg:p-16">
          
          <div className="flex flex-col gap-12 md:gap-20 px-4 md:px-8 py-12 md:py-16 max-w-3xl mx-auto">
            {/* Hero section */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="space-y-3 md:space-y-4">
                <h1 className="animate-in text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white drop-shadow-2xl">
                  Hello. Brendan Here.
                </h1>
                <p className="max-w-lg animate-in text-gray-700 dark:text-gray-200 drop-shadow-xl text-sm md:text-base"
                  style={{ "--index": 1 } as React.CSSProperties}>
                  {"I'm"} a Software Developer Intern. Building the future and working to become a Full-Stack Software Engineer. On the side, I create{" "}
                  <Link href="https://youtube.com/@BrenDeveloper" className="text-blue-600 dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-200">YouTube</Link> videos
                  about tech, productivity, and my journey through life.
                </p>
              </div>
              <div className="flex animate-in gap-2 md:gap-3 text-xs md:text-sm flex-wrap"
                style={{ "--index": 2 } as React.CSSProperties}>
                <Link href="https://www.linkedin.com/in/brendanlambrecht/"
                  className="flex w-fit items-center rounded-full bg-gray-200/80 dark:bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 no-underline hover:bg-gray-300/80 dark:hover:bg-white/20 shadow-xl text-gray-800 dark:text-white text-xs md:text-sm">
                  Linkedin
                  <ArrowUpRightIcon className="h-3 w-3 md:h-4 md:w-4 text-gray-600 dark:text-gray-200 ml-1 md:ml-2" />
                </Link>
                <Link href="https://github.com/BlambrechtCodes"
                  className="flex w-fit items-center rounded-full bg-gray-200/80 dark:bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 no-underline hover:bg-gray-300/80 dark:hover:bg-white/20 shadow-xl text-gray-800 dark:text-white text-xs md:text-sm">
                  Github
                  <ArrowUpRightIcon className="h-3 w-3 md:h-4 md:w-4 text-gray-600 dark:text-gray-200 ml-1 md:ml-2" />
                </Link>
                <Link className="flex w-fit items-center rounded-full bg-gray-200/80 dark:bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 no-underline hover:bg-gray-300/80 dark:hover:bg-white/20 shadow-xl text-gray-800 dark:text-white text-xs md:text-sm"
                  href="mailto:blambrecht04@gmail.com">
                  Email
                  <ArrowUpRightIcon className="h-3 w-3 md:h-4 md:w-4 text-gray-600 dark:text-gray-200 ml-1 md:ml-2" />
                </Link>
              </div>
            </div>

            {/* Pinned Projects */}
            <div className="flex animate-in flex-col gap-6 md:gap-8" style={{ "--index": 4 } as React.CSSProperties}>
              <p className="tracking-tight text-gray-600 dark:text-gray-300 drop-shadow-lg text-base md:text-lg font-medium">Pinned</p>
              <div className="text-gray-900 dark:text-white">
                <ProjectList projects={projects} />
              </div>
            </div>

            {/* Latest Blogs */}
            <div className="flex animate-in flex-col gap-6 md:gap-8" style={{ "--index": 5 } as React.CSSProperties}>
              <div className="space-y-3 md:space-y-4">
                <Link className="group flex items-center gap-2 tracking-tight text-gray-600 dark:text-gray-300 drop-shadow-lg text-base md:text-lg font-medium hover:text-gray-900 dark:hover:text-white transition-colors"
                  href="/blog">
                  Latest blogs
                  <ArrowUpRightIcon className="h-4 w-4 md:h-5 md:w-5 text-gray-500 dark:text-gray-400 transition-all group-hover:text-gray-700 dark:group-hover:text-white" />
                </Link>
                <p className="max-w-lg text-gray-600 dark:text-gray-400 text-pretty drop-shadow-md text-sm md:text-base">
                  I occasionally write about programming, my own research (for fun), productivity, and more.
                  Check out my articles to stay up to date.
                </p>
              </div>
              <div className="text-gray-900 dark:text-white">
                <PostList posts={blogs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}