"use client";

import Image from "next/image";
import clsx from "clsx";

export default function Resume() {
  return (
    <div className="space-y-8">
      <div className="text-center">
      </div>

      <div className="relative group">
        {/* Resume Preview Card */}
        <div className="relative bg-secondary/50 border border-secondary/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-primary/10">
          
          {/* Animated Border Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          {/* Resume Preview Image */}
          <div className="relative aspect-[3/4] max-w-md mx-auto rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/resume/resume.png"
              alt="Resume Preview"
              fill
              className="object-cover"
              priority
            />
            
            {/* Overlay for hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Floating Corner Effect */}
            <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Download Button */}
          <div className="mt-8 text-center">
            <a 
              href="/resume/resume.png"
              download="Brendan_Lambrecht_Resume.pdf"
              className="group/btn relative inline-flex items-center gap-3 px-6 py-3 bg-primary text-contrast rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/20 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-y-[-2px]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              
              {/* Text */}
              <span className="relative z-10">Download Resume</span>
              
              {/* Download Animation */}
              <svg 
                className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}