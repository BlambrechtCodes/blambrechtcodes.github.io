"use client";

import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import SmartImage from "@/app/components/SmartImage";

type TechItem = {
  name: string;
  category: string;
  icon: string;
};

const getIconUrl = (name: string) => 
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name.toLowerCase().replace(/[^a-z0-9]/g, '')}/${name.toLowerCase()}-original.svg`;

const techStack: TechItem[] = [
  // Languages
  { name: "C", category: "Languages", icon: getIconUrl("C") || "/tech/c.png" },
  { name: "C#", category: "Languages", icon: getIconUrl("csharp") || "/tech/csharp.png" },
  { name: "Java", category: "Languages", icon: getIconUrl("java") || "/tech/java.png" },
  { name: "Python", category: "Languages", icon: getIconUrl("python") || "/tech/python.png" },
  { name: "JavaScript", category: "Languages", icon: getIconUrl("javascript") || "/tech/javascript.png" },
  { name: "TypeScript", category: "Languages", icon: getIconUrl("typescript") || "/tech/typescript.png" },
  { name: "HTML", category: "Languages", icon: getIconUrl("html5") || "/tech/html.png" },
  { name: "CSS", category: "Languages", icon: getIconUrl("css3") || "/tech/css.png" },
  { name: "SQL", category: "Languages", icon: getIconUrl("mysql") || "/tech/sql.png" }, // Use mysql as SQL proxy

  // Frameworks / Libraries
  { name: "Angular", category: "Frameworks", icon: getIconUrl("angularjs") || "/tech/angular.png" },
  { name: "React", category: "Frameworks", icon: getIconUrl("react") || "/tech/react.png" },
  { name: "Robot Framework", category: "Frameworks", icon: "/tech/robotframework_light.png" },

  // Tools
  { name: "Linux", category: "Tools", icon: getIconUrl("linux") || "/tech/linux.png" },
  { name: "VS Code", category: "Tools", icon: getIconUrl("vscode") || "/tech/vscode.png" },
  { name: "Visual Studio", category: "Tools", icon: getIconUrl("visualstudio") || "/tech/visualstudio.png" },
  { name: "Jupyter Notebook", category: "Tools", icon: getIconUrl("jupyter") || "/tech/jupyter.png" },
  { name: "Selenium", category: "Tools", icon: getIconUrl("selenium") || "/tech/selenium.png" },
  { name: "Wireshark", category: "Tools", icon: "/tech/wireshark.png" }, // No Devicon
  { name: "WinSCP", category: "Tools", icon: "/tech/WinSCP.png" }, // No Devicon
  { name: "TortoiseSVN", category: "Tools", icon: "/tech/tortoisesvn.png" }, // SVN proxy

  // Certifications (use generic or custom)
  { name: "Microsoft Office Specialist", category: "Certifications", icon: "/tech/microsoft-office.jpg" },
  { name: "Machine Learning Specialization", category: "Certifications", icon: "/tech/coursera.webp" },
  { name: "Deep Learning Specialization", category: "Certifications", icon: "/tech/coursera.webp" },
];



export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [animationKey, setAnimationKey] = useState<number>(0);

  const categories = ["All", ...new Set(techStack.map(item => item.category))];
  const filteredTech = selectedCategory === "All" 
    ? techStack 
    : techStack.filter(item => item.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Force re-animation by changing the key
    setAnimationKey(prev => prev + 1);
  };

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={clsx(
              "px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200",
              selectedCategory === category
                ? "bg-primary text-contrast"
                : "bg-secondary text-primary hover:bg-primary/10"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tech List with Smooth Height Transition */}
      <div 
        key={animationKey} 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
        style={{
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          minHeight: '120px', // Minimum height to prevent sudden jumps
        } as React.CSSProperties}
      >
        {filteredTech.map((tech, index) => (
          <div
            key={`${tech.name}-${animationKey}`}
            className="flex items-center gap-4 p-4 rounded-lg border border-secondary/50 transition-all duration-500 ease-in-out hover:border-primary/50 hover:bg-primary/5 animate-in"
            style={{ 
              animationDelay: `${index * 50}ms`,
              animationFillMode: 'both'
            } as React.CSSProperties}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
              {tech.name === "Robot Framework" ? (
                <SmartImage
                  src={tech.icon}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                  themeSwitch={true}
                />
              ) : (
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-primary text-sm md:text-base truncate">{tech.name}</h3>
              <p className="text-xs md:text-sm text-secondary truncate">{tech.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
