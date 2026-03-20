"use client";

// Keep this for future use! Not needed for now but a potential addition

import { FormEventHandler, useCallback, useState, useEffect } from "react";
import clsx from "clsx";

import Halo from "@/app/components/Halo";
import FlipNumber from "@/app/components/FlipNumber";

export default function NewsletterSignupForm({
  contained = true,
}: {
  contained?: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  const [subscriberCount] = useState(26); // Static placeholder count
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit: FormEventHandler = useCallback(async (event) => {
    event.preventDefault();
    
    // Simple email validation
    if (!email.includes('@') || !email.includes('.')) {
      setStatus('error');
      return;
    }

    // Since we're not using ConvertKit, just show success
    setStatus('success');
    setEmail('');
  }, [email]);

  // Don't render on server to avoid hydration mismatch
  if (!mounted) {
    return (
      <Card contained={contained}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto mb-4"></div>
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full max-w-md mx-auto"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48 mx-auto mt-4"></div>
        </div>
      </Card>
    );
  }

  if (status === 'error') {
    return (
      <Card contained={contained}>
        <p className="text-red-600 dark:text-red-400">Something went wrong...</p>
        <p className="max-w-md text-secondary">
          Please try again later or use a valid email address.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          Try again
        </button>
      </Card>
    );
  }

  if (status === 'success') {
    return (
      <Card contained={contained}>
        <p className="text-primary text-green-600 dark:text-green-400">You&#39;re in!</p>
        <p className="max-w-md text-secondary">
          Thanks for subscribing! (Newsletter feature coming soon)
        </p>
      </Card>
    );
  }

  return (
    <Card contained={contained}>
      <p className="text-primary">Newsletter</p>
      <p className="max-w-md text-secondary">
        Get personal updates and readings on topics like tech, design,
        productivity, programming, and more!
      </p>
      <form className="mt-2 w-full max-w-md" onSubmit={onSubmit}>
        <div className="flex w-full rounded-md border border-primary bg-contrast py-1 pl-3 pr-1">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent outline-none placeholder:text-tertiary"
            placeholder="you@example.com"
            required
          />
          <button className="h-full w-fit whitespace-nowrap rounded bg-neutral-800 px-4 py-1 text-sm text-white hover:bg-neutral-900 focus:ring-inset focus:ring-blue-600 focus-visible:outline focus-visible:outline-2 dark:bg-neutral-300 dark:text-black hover:dark:bg-neutral-100">
            Sign up
          </button>
        </div>
      </form>
      <p className="text-sm text-tertiary">
        Join the <FlipNumber>{subscriberCount}</FlipNumber> other
        readers (demo count).
      </p>
    </Card>
  );
}

function Card({
  children,
  contained,
}: {
  children: React.ReactNode;
  contained?: boolean;
}) {
  return (
    <Halo strength={contained ? 5 : 0}>
      <div
        className={clsx(
          "flex flex-col gap-6",
          contained
            ? "items-center justify-center rounded-lg bg-secondary p-6 text-center md:p-8"
            : "",
        )}
      >
        {children}
      </div>
    </Halo>
  );
}