import Link from "@/app/components/Link";
import { Metadata } from "next";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export const metadata: Metadata = {
  title: "404 | Brendan Lambrecht",
  description: "Uh oh! This page does not exist",
};

const Custom404 = (): JSX.Element => (
  <div className="relative min-h-screen w-full home-page">
    {/* Animated wave background */}
    <div className="fixed inset-0 -z-10">
      <div className="h-screen w-full relative">
        <div className="h-full w-full"></div>
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
                404 - Page Not Found
              </h1>
              <p className="max-w-lg animate-in text-gray-700 dark:text-gray-200 drop-shadow-xl text-sm md:text-base">
                Uh oh! This page does not exist! Maybe you clicked an old link or
                misspelled it. Please try again or return to the homepage.
              </p>
            </div>
            <div className="flex animate-in gap-2 md:gap-3 text-xs md:text-sm flex-wrap">
              <Link href="/"
                className="flex w-fit items-center rounded-full bg-gray-200/80 dark:bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 no-underline hover:bg-gray-300/80 dark:hover:bg-white/20 shadow-xl text-gray-800 dark:text-white text-xs md:text-sm">
                Return Home
                <ArrowUpRightIcon className="h-3 w-3 md:h-4 md:w-4 text-gray-600 dark:text-gray-200 ml-1 md:ml-2" />
              </Link>
              <Link href="/about"
                className="flex w-fit items-center rounded-full bg-gray-200/80 dark:bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 no-underline hover:bg-gray-300/80 dark:hover:bg-white/20 shadow-xl text-gray-800 dark:text-white text-xs md:text-sm">
                About Me
                <ArrowUpRightIcon className="h-3 w-3 md:h-4 md:w-4 text-gray-600 dark:text-gray-200 ml-1 md:ml-2" />
              </Link>
              <Link href="/blog"
                className="flex w-fit items-center rounded-full bg-gray-200/80 dark:bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 no-underline hover:bg-gray-300/80 dark:hover:bg-white/20 shadow-xl text-gray-800 dark:text-white text-xs md:text-sm">
                Latest Blogs
                <ArrowUpRightIcon className="h-3 w-3 md:h-4 md:w-4 text-gray-600 dark:text-gray-200 ml-1 md:ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Custom404;
