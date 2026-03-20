import { Metadata } from "next";
import Image from "next/image";
import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import Me from "@/public/avatar.png";

export const metadata: Metadata = {
  title: "Contact | Brendan Lambrecht",
  description: "Get in touch with me for collaborations, questions, or just to say hello!",
  openGraph: {
    title: "Contact | Brendan Lambrecht",
    description: "Get in touch with me for collaborations, questions, or just to say hello!",
    type: "website",
    url: "https://blambrechtcodes.github.io/contact",
    images: [{ url: "https://blambrechtcodes.github.io/api/og?title=Contact", alt: "Contact" }],
  },
};

export default function Contact() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          Contact
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Let&#39;s connect and create something amazing together.
        </p>
      </div>

      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 2 } as React.CSSProperties}
      >

        <Section heading="Send me a Message" headingAlignment="left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p>
                I&#39;m always excited to connect with other developers, potential collaborators, 
                and anyone interested in making a fun project. Whether you have an idea, 
                a question about my work, or just want to chat about the latest in tech, I&#39;d love to hear from you.
              </p>
              <p>
                I typically respond via email within 24-48 hours.
              </p>
              <p>
                Email me at: <Link href="mailto:Blambrecht04@gmail.com">Blambrecht04@gmail.com</Link>
              </p>
              
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <Image
                  src={Me}
                  alt="Brendan Lambrecht"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-full h-full bg-primary/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </Section>

        <Section heading="FAQ" headingAlignment="left">
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-secondary/50 border border-secondary/50">
              <h3 className="font-semibold text-primary mb-2">What types of projects do you work on?</h3>
              <p className="text-secondary">
                I enjoy working on full-stack web applications, automation tools, and educational content. 
                Currently focusing on React, Node.js, and TypeScript projects, but always eager to learn new technologies.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-secondary/50 border border-secondary/50">
              <h3 className="font-semibold text-primary mb-2">Are you available for freelance work?</h3>
              <p className="text-secondary">
                Currently focusing on my software engineering internship and studies, but I&#39;m open to discussing 
                interesting projects that align with my schedule and interests.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-secondary/50 border border-secondary/50">
              <h3 className="font-semibold text-primary mb-2">How can I stay updated with your work?</h3>
              <p className="text-secondary">
                Follow me on GitHub for code updates, LinkedIn for professional updates, and YouTube for tech content. 
                I also regularly update my blog with project walkthroughs and learning experiences.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}