"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";

const links = [
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/",
    title: "Home",
  },
  // {
  //   path: "/gear",
  //   title: "Gear",
  // },
  {
    path: "/contact",
    title: "Contact",
  },
] as const;

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`;
  const { resolvedTheme } = useTheme();
  const isHomePage = pathname === "/";

  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex max-w-[700px] items-center justify-center gap-3 px-4 py-3 md:px-6">

        <div className="flex items-center justify-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.path;
            
            // Special logic for homepage in light mode
            let textColor, hoverColor, hoverOpacity;
            if (resolvedTheme === 'dark') {
              textColor = 'text-white';
              hoverColor = 'hover:text-white';
              hoverOpacity = 'text-white/80';
            } else {
              // Light mode
              if (isHomePage) {
                // Homepage in light mode - use white text
                textColor = 'text-white';
                hoverColor = 'hover:text-white';
                hoverOpacity = 'text-white/80';
              } else {
                // Other pages in light mode - use black text
                textColor = 'text-primary';
                hoverColor = 'hover:text-secondary';
                hoverOpacity = 'text-primary/80';
              }
            }
            
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`${
                  isActive 
                    ? `${textColor} font-semibold shadow-lg drop-shadow-md` 
                    : `${hoverOpacity} ${hoverColor} transition-all duration-200`
                } relative rounded-lg px-3 py-1.5 text-sm`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {pathname === link.path && (
                  <>
                    <motion.span
                      layoutId="bubble"
                      className={`absolute inset-0 -z-10 rounded-lg bg-white/20 backdrop-blur-sm border ${
                        resolvedTheme === 'light' ? 'border-black' : 'border-white/30'
                      }`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                    <motion.div
                      className="absolute inset-0 -z-20 rounded-lg bg-white/30 dark:bg-black/30 backdrop-blur-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  </>
                )}
                {link.title}
              </Link>
            );
          })}
        </div>

        <div className="flex h-8 w-8 items-center justify-center">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}