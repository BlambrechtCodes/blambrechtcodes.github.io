'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import * as path from 'path';

type SmartImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
  className?: string;
  hover?: boolean;
  themeSwitch?: boolean;
};

export default function SmartImage({
  src,
  width,
  height,
  alt,
  priority,
  className,
  hover = false,
  themeSwitch = false,
}: SmartImageProps) {
  const { theme, resolvedTheme, systemTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | null>(null);
  const [isThemeReady, setIsThemeReady] = useState(false);

  // Initialize theme state
  useEffect(() => {
    if (resolvedTheme) {
      setCurrentTheme(resolvedTheme as 'light' | 'dark');
      setIsThemeReady(true);
    }
  }, [resolvedTheme]);

  // FIXED: Clean theme switching logic
  const getThemeVariantSrc = (baseSrc: string, variant: 'light' | 'dark') => {
    // Remove any existing _light/_dark suffixes first
    let cleanSrc = baseSrc
      .replace(/_light\.(png|webp|jpg|jpeg)$/i, '.$1')
      .replace(/_dark\.(png|webp|jpg|jpeg)$/i, '.$1');

    // Split path and get filename
    const pathParts = cleanSrc.split('/');
    const filename = pathParts.pop() || '';
    const basePath = pathParts.join('/');

    // Add correct theme suffix
    const lastDotIndex = filename.lastIndexOf('.');
    if (lastDotIndex === -1) return cleanSrc;
    
    const basename = filename.substring(0, lastDotIndex);
    const extension = filename.substring(lastDotIndex);
    const themedFilename = `${basename}_${variant}${extension}`;

    return `${basePath}/${themedFilename}`;
  };

  // Check if the image has theme variants (contains _light or _dark)
  const hasThemeVariants = /_(light|dark)\.(png|webp|jpg|jpeg)$/i.test(src);
  
  const lightSrc = themeSwitch && hasThemeVariants ? getThemeVariantSrc(src, 'light') : src;
  const darkSrc = themeSwitch && hasThemeVariants ? getThemeVariantSrc(src, 'dark') : src;

  const currentSrc = isThemeReady && themeSwitch && hasThemeVariants
    ? (currentTheme === 'dark' ? darkSrc : lightSrc)
    : src;

  return (
    <div
      onMouseEnter={() => hover && setIsHovered(true)}
      onMouseLeave={() => hover && setIsHovered(false)}
      className={className}
    >
      <Image
        src={currentSrc}
        width={width}
        height={height}
        alt={alt}
        priority={priority}
        className="h-auto w-full object-cover rounded"
      />
    </div>
  );
}
