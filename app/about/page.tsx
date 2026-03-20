import Image from "next/image";
import { Metadata } from "next";
import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import ConnectLinks from "@/app/components/ConnectLinks";
import Workplaces from "@/app/about/components/Workplaces";
import Gallery from "@/app/about/components/Gallery";
import TechStack from "@/app/about/components/TechStack";
import Resume from "@/app/about/components/Resume";
import Greeting from "./components/Greeting";

async function getYoutubeStats() {
  // Skip fetch entirely - call YouTube API directly (most reliable)
  try {
    if (!process.env.YOUTUBE_API_KEY) {
      return 21;
    }

    const channelId = "UCVjG5MG2AKlT-rXry0YgEwQ";
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${process.env.YOUTUBE_API_KEY}`,
      { next: { revalidate: 86400 } }
    );

    if (!response.ok) {
      return 21;
    }

    const data = await response.json();
    return parseInt(data.items?.[0]?.statistics?.subscriberCount || 0) || 0;
  } catch (error) {
    console.error("YouTube API error:", error);
    return 21; // Your fallback
  }
}

export const metadata: Metadata = {
  title: "About | Brendan Lambrecht",
  description:
    "Software Engineering student at UW-La Crosse, aspiring full-stack developer and content creator.",
};

export default async function About() {
  const subscribers = await getYoutubeStats();

  // Format the number only once
  const formattedSubscribers = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumSignificantDigits: 3,
  }).format(subscribers);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          A glimpse into my story.
        </p>
      </div>

      {/* Mobile Gallery Images */}
      <div className="mb-8 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src="/gallery/beach.jpg"
            alt="Beach Day"
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-52 w-60 -rotate-6 rounded-xl bg-neutral-400 object-cover object-right shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src="/gallery/bluffs.jpg"
            alt="Bluffs"
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-44 left-[40%] w-48 rotate-6 rounded-xl bg-neutral-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>

      {/* Desktop Gallery */}
      <div className="hidden md:block">
        <Gallery />
      </div>

      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              <Greeting /> I&#39;m Brendan Lambrecht! I&#39;m a Software engineering student at
              UW-La Crosse, living in La Crosse, Wisconsin.
            </p>
            <p>
              My curiosity for computers began during my youth, leading me to pursue
              software engineering. I&#39;m active in CODERS club, building fun projects,
              and working my first internship.
            </p>
            <p>
              Alongside coding, I run a{" "}
              <Link className="underline" href="https://www.youtube.com/@BrenDeveloper">
                YouTube
              </Link>{" "}
              channel to share my vlogs, tech insights, and my journey so far.{" "}
              <span className="text-tertiary">
                ({formattedSubscribers} subscribers!)
              </span>
            </p>
            <p>
              When not coding, you&#39;ll find me hiking, chilling on the beack, hanging downtown with friends,
              or planning events at my university!
            </p>
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section heading="Experience" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              I&#39;ve had the opportunity to work on some exciting projects and hold leadershiproles, both in and out of the classroom.
              Here are a few highlights:
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>

        <Section heading="Resume" headingAlignment="left">
          <Resume />
        </Section>

        <Section heading="Tech Stack" headingAlignment="left">
          <TechStack />
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Software Controls Test Intern", 
    company: "TRANE Technologies",
    date: "2025 - Present",
    imageSrc: "/work/trane.png",
    link: "https://www.tranetechnologies.com/en/index/company.html",
  },
  {
    title: "Club President", 
    company: "CODERS Club",
    date: "2024 - Present",
    imageSrc: "/work/logo.png",
    link: "https://coders.cs.uwlax.edu",
  },
  {
    title: "Computer Science [CYB] [MSE]",
    company: "University of Wisconsin La Crosse",
    date: "2023 - Present",
    imageSrc: "/work/uwl.png",
    link: "https://www.cs.uwlax.edu",
  },
];
