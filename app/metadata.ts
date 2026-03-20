import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Brendan Lambrecht - Software Engineer',
    template: '%s | Brendan Lambrecht'
  },
  description: 'Portfolio website showcasing projects, skills, and experience of Brendan Lambrecht, a software engineer.',
  keywords: ['Brendan Lambrecht', 'Software Engineer', 'Portfolio', 'Developer', 'Full Stack'],
  authors: [{ name: 'Brendan Lambrecht' }],
  creator: 'Brendan Lambrecht',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blambrechtcodes.github.io',
    title: 'Brendan Lambrecht - Software Engineer',
    description: 'Portfolio website showcasing projects, skills, and experience of Brendan Lambrecht, a software engineer.',
    siteName: 'Brendan Lambrecht Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brendan Lambrecht - Software Engineer',
    description: 'Portfolio website showcasing projects, skills, and experience of Brendan Lambrecht, a software engineer.',
    creator: '@BlambrechtCodes',
  },
  icons: {
    icon: '/logo/favicon.ico',
    shortcut: '/logo/favicon-16x16.png',
    apple: '/logo/apple-touch-icon.png',
  },
  manifest: '/logo/site.webmanifest',
}