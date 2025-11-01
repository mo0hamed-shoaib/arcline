"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";

interface Tweet {
  text: string;
  handle: string;
  name: string;
  url: string;
  profileImage: string;
  isHighlighted?: boolean;
  isRetweet?: boolean;
  originalTweet?: {
    text: string;
    handle: string;
    name: string;
  };
  stats?: {
    views?: string;
    likes?: string;
    retweets?: string;
  };
}

const tweets: Tweet[] = [
  // Featured Tweet - Ben South's retweet with commentary (most viral)
  {
    text: "vibe coder: how do I save this version?\n\nthese guys: ok first git init && git remote add origin, create a feature branch, git add ., git commit -m 'feat: initial commit', push to create a PR, then later when you hit conflicts just git rebase -i HEAD~3, stash pop, resolve the...",
    handle: "@bnj",
    name: "Ben South",
    url: "https://t.co/Iip1owCIDe",
    profileImage: "/images/profiles/bnj.jpg",
    isRetweet: true,
    originalTweet: {
      text: 'Cursor/Windsurf need a way to "save" a checkpoint and name it—versioning for vibe coders',
      handle: "@bnj",
      name: "Ben South",
    },
    stats: {
      views: "88.9K",
      likes: "366",
      retweets: "22",
    },
  },
  // Second - Tom Dörr (389.6K views)
  {
    text: "The biggest mistake in vibe coding is prompting the agent to fix errors instead of rolling back",
    handle: "@tom_doerr",
    name: "Tom Dörr",
    url: "https://x.com/tom_doerr/status/1907293098557809124",
    profileImage: "/images/profiles/tom.jpg",
    stats: {
      views: "389.6K",
      likes: "3.8K",
      retweets: "219",
    },
  },
  // Third - Kitze (369.5K views)
  {
    text: "they should invent a tool where vibe code can be stored in the cloud so from time to time you do a 'checkin' of your code and you can always revert to it and go to a previous version\n\nlike a ... hub for code",
    handle: "@thekitze",
    name: "Kitze",
    url: "https://t.co/IPd6mRr7qI",
    profileImage: "/images/profiles/kitze.jpg",
    stats: {
      views: "369.5K",
      likes: "8.1K",
      retweets: "358",
    },
  },
  // Fourth - Ian Nuttall (31.4K views)
  {
    text: "cursor pro tip for vibe coders: use the git tab to save changes and roll back quickly if the ai messes up\n\nseeing too many stories of vibe coders unable to get back to a working version 😰\n\nwatch the video",
    handle: "@iannuttall",
    name: "Ian Nuttall",
    url: "https://t.co/ILoFbVkcDP",
    profileImage: "/images/profiles/ian.jpg",
    stats: {
      views: "31.4K",
      likes: "333",
      retweets: "28",
    },
  },
  // Fifth - Ben South's original tweet
  {
    text: 'Cursor/Windsurf need a way to "save" a checkpoint and name it—versioning for vibe coders',
    handle: "@bnj",
    name: "Ben South",
    url: "https://x.com/bnj/status/1902151456645640595",
    profileImage: "/images/profiles/bnj.jpg",
    stats: {
      views: "174.2K",
      likes: "1.1K",
      retweets: "62",
    },
  },
  // Sixth - CC Anuj (unknown views but included)
  {
    text: "Today was the worst day ever☹️\nThe project I had been working on for the last two weeks got corrupted, and everything was lost. Just like that, my SaaS was gone. Two weeks of hard work, completely ruined.",
    handle: "@vid_anuj",
    name: "CC Anuj",
    url: "https://x.com/vid_anuj/status/1902379748501880934",
    profileImage: "/images/profiles/anuj.jpg",
    stats: {
      likes: "121",
      retweets: "31",
    },
  },
  // Seventh - anushk (951 views)
  {
    text: "git scares people who just wanna code. give them the damn save button",
    handle: "@anushkmittal",
    name: "anushk",
    url: "https://x.com/anushkmittal/status/1902412183096717334",
    profileImage: "/images/profiles/anushk.jpg",
    stats: {
      views: "951",
      likes: "25",
    },
  },
];

export default function VibeCodingTweetsSection() {
  const [expandedTweets, setExpandedTweets] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedTweets((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const truncateText = (text: string, maxLength = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header - Outside gradient like other sections */}
        <div className="mb-6 px-4 text-center md:mb-12">
          <h2
            className="mb-6 font-semibold"
            style={{
              backgroundImage:
                "linear-gradient(rgb(245, 245, 245), rgb(245, 245, 245) 29%, rgb(153, 153, 153))",
              color: "transparent",
              fontFamily: "var(--font-geist-sans)",
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 600,
              letterSpacing: "clamp(-1.5px, -0.04em, -2.08px)",
              lineHeight: "1.15",
              textAlign: "center",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Client Feedback and Testimonials
          </h2>
          <p
            className="mx-auto mb-4 max-w-3xl text-white/80"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "clamp(14px, 3vw, 18px)",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            See what clients say about working with Arcline.
          </p>
        </div>

        {/* Gradient Container - Matching other sections */}
        <div className="flex justify-center">
          <div
            className="gradient-container relative w-full max-w-[1296px]"
            style={{ background: "linear-gradient(135deg, #22d3ee 0%, #ff5c28 50%, #ff5c9d 100%)" }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 rounded-[16px] bg-black/35"></div>

            {/* Noise Overlay */}
            <div className="noise-texture"></div>

            {/* Content */}
            <div className="relative z-10 px-4 pb-6 pt-6 sm:px-6 sm:pb-8 sm:pt-8 md:px-12 md:pb-12 md:pt-12">
              {/* Enhanced Tweets Layout - Making 7 tweets feel substantial */}
              <div className="space-y-6 sm:space-y-8">
                {/* Featured Tweet - Most relevant (Ben South retweet with commentary) */}
                <div className="mx-auto max-w-4xl">
                  <a
                    href={tweets[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block cursor-pointer rounded-[16px] border border-white/30 bg-white/15 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20 sm:rounded-[20px] sm:border-2 sm:p-6 md:p-10"
                  >
                    {/* Original Tweet (if retweet) */}
                    {tweets[0].isRetweet && tweets[0].originalTweet && (
                      <div className="mb-4 rounded-lg border border-white/10 bg-white/5 p-3 sm:p-4">
                        <p
                          className="mb-2 break-words text-xs leading-relaxed text-white/80 sm:text-sm"
                          style={{
                            fontFamily: "var(--font-geist-mono)",
                            fontSize: "clamp(12px, 2vw, 13px)",
                            lineHeight: "1.5",
                          }}
                        >
                          {tweets[0].originalTweet.text}
                        </p>
                        <p
                          className="text-xs text-white/50"
                          style={{
                            fontFamily: "var(--font-geist-mono)",
                          }}
                        >
                          {tweets[0].originalTweet.handle}
                        </p>
                      </div>
                    )}

                    {/* Tweet Content */}
                    <div className="mb-6 md:mb-8">
                      <p
                        className="break-words text-sm leading-relaxed text-white sm:text-base"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontSize: "clamp(13px, 2.5vw, 16px)",
                          lineHeight: "1.6",
                          textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                        }}
                      >
                        {expandedTweets.has(0)
                          ? tweets[0].text.split("\n").map((line, i) => (
                              <span key={i}>
                                {line}
                                {i < tweets[0].text.split("\n").length - 1 && <br />}
                              </span>
                            ))
                          : truncateText(tweets[0].text, 150)}
                        {tweets[0].text.length > 150 && (
                          <button
                            onClick={(e) => toggleExpanded(0, e)}
                            className="ml-2 text-sm text-white/70 underline hover:text-white"
                            style={{ fontFamily: "var(--font-geist-mono)" }}
                          >
                            {expandedTweets.has(0) ? "show less" : "read more"}
                          </button>
                        )}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-col gap-4">
                      {/* Engagement stats at top of author section */}
                      <div className="flex w-full flex-wrap items-center justify-center gap-2 text-white/60 sm:justify-start sm:gap-3 md:gap-4">
                        {tweets[0].stats?.views && (
                          <div className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">
                            <svg
                              className="h-3 w-3 sm:h-4 sm:w-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                            </svg>
                            <span className="font-mono text-xs font-bold text-white sm:text-sm">
                              88.9K
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">
                          <svg
                            className="h-3 w-3 sm:h-4 sm:w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <span className="font-mono text-xs font-bold text-white sm:text-sm">
                            366
                          </span>
                        </div>
                        <div className="hidden items-center gap-1 rounded-full bg-white/10 px-2 py-1 sm:flex">
                          <svg
                            className="h-3 w-3 sm:h-4 sm:w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.061 0s-.293.768 0 1.061l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767.001-1.06z" />
                          </svg>
                          <span className="font-mono text-xs font-bold text-white sm:text-sm">
                            22
                          </span>
                        </div>
                        <svg
                          className="h-4 w-4 flex-shrink-0 text-white opacity-50 transition-opacity group-hover:opacity-80 sm:h-5 sm:w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </div>

                      {/* Author info at bottom */}
                      <div className="flex w-full items-center gap-2 sm:gap-3">
                        <div className="h-8 w-8 flex-shrink-0 overflow-hidden rounded-full border border-white/30 bg-white/10 sm:h-10 sm:w-10 sm:border-2 md:h-12 md:w-12">
                          <Image
                            src={tweets[0].profileImage || "/placeholder.svg"}
                            alt={`${tweets[0].name} profile`}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <p
                            className="truncate text-sm font-semibold text-white sm:text-base"
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                            }}
                          >
                            {tweets[0].name}
                          </p>
                          <p
                            className="truncate text-xs text-white/70"
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                            }}
                          >
                            {tweets[0].handle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Enhanced Stats Bar with more prominent styling */}
                <div className="flex justify-center">
                  <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-white/15 px-3 py-3 shadow-xl backdrop-blur-sm sm:gap-4 sm:px-6 sm:py-4 md:gap-8 md:px-8 md:py-5">
                    <div className="text-center">
                      <div className="font-mono text-base font-bold text-white sm:text-lg md:text-2xl">
                        1M+
                      </div>
                      <div className="font-mono text-xs uppercase tracking-wider text-white/70">
                        Views
                      </div>
                    </div>
                    <div className="hidden h-6 w-px bg-white/40 sm:block sm:h-8"></div>
                    <div className="text-center">
                      <div className="font-mono text-base font-bold text-white sm:text-lg md:text-2xl">
                        13.7K+
                      </div>
                      <div className="font-mono text-xs uppercase tracking-wider text-white/70">
                        Likes
                      </div>
                    </div>
                    <div className="hidden h-6 w-px bg-white/40 sm:block sm:h-8"></div>
                    <div className="text-center">
                      <div className="font-mono text-base font-bold text-white sm:text-lg md:text-2xl">
                        689+
                      </div>
                      <div className="font-mono text-xs uppercase tracking-wider text-white/70">
                        Retweets
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                  {tweets.slice(1).map((tweet, index) => {
                    const actualIndex = index + 1;
                    return (
                      <a
                        key={actualIndex}
                        href={tweet.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block flex cursor-pointer flex-col rounded-[16px] border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/15 sm:p-6"
                      >
                        {/* Original Tweet (if retweet) */}
                        {tweet.isRetweet && tweet.originalTweet && (
                          <div className="mb-4 rounded-lg border border-white/10 bg-white/5 p-3">
                            <p
                              className="mb-2 break-words text-xs leading-relaxed text-white/80"
                              style={{
                                fontFamily: "var(--font-geist-mono)",
                                fontSize: "12px",
                                lineHeight: "1.5",
                              }}
                            >
                              {tweet.originalTweet.text}
                            </p>
                            <p
                              className="text-xs text-white/50"
                              style={{
                                fontFamily: "var(--font-geist-mono)",
                              }}
                            >
                              {tweet.originalTweet.handle}
                            </p>
                          </div>
                        )}

                        {/* Tweet Content with truncation */}
                        <div className="mb-4 flex-grow">
                          <p
                            className="break-words leading-relaxed text-white/95"
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                              fontSize: "clamp(13px, 2vw, 15px)",
                              lineHeight: "1.6",
                              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                            }}
                          >
                            {expandedTweets.has(actualIndex)
                              ? tweet.text.split("\n").map((line, i) => (
                                  <span key={i}>
                                    {line}
                                    {i < tweet.text.split("\n").length - 1 && <br />}
                                  </span>
                                ))
                              : truncateText(tweet.text, 120)}
                            {tweet.text.length > 120 && (
                              <button
                                onClick={(e) => toggleExpanded(actualIndex, e)}
                                className="ml-2 text-xs text-white/60 underline hover:text-white"
                                style={{ fontFamily: "var(--font-geist-mono)" }}
                              >
                                {expandedTweets.has(actualIndex) ? "less" : "more"}
                              </button>
                            )}
                          </p>
                        </div>

                        <div className="mt-auto space-y-3">
                          <div className="flex w-full flex-shrink-0 items-center justify-between gap-2">
                            {/* Author info on left */}
                            <div className="flex min-w-0 flex-1 items-center gap-2">
                              <div className="h-7 w-7 flex-shrink-0 overflow-hidden rounded-full border border-white/30 bg-white/10">
                                <Image
                                  src={tweet.profileImage || "/placeholder.svg"}
                                  alt={`${tweet.name} profile`}
                                  width={28}
                                  height={28}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="min-w-0">
                                <p
                                  className="truncate text-xs font-medium text-white"
                                  style={{
                                    fontFamily: "var(--font-geist-mono)",
                                    textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                                  }}
                                >
                                  {tweet.name}
                                </p>
                                <p
                                  className="truncate text-xs text-white/70"
                                  style={{
                                    fontFamily: "var(--font-geist-mono)",
                                    textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                                  }}
                                >
                                  {tweet.handle}
                                </p>
                              </div>
                            </div>

                            {/* Engagement stats on right */}
                            <div className="flex flex-shrink-0 items-center gap-2 text-white/50">
                              {tweet.stats?.likes && (
                                <div className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">
                                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                  </svg>
                                  <span className="font-mono text-xs font-bold text-white">
                                    {tweet.stats.likes}
                                  </span>
                                </div>
                              )}
                              <svg
                                className="h-4 w-4 flex-shrink-0 text-white opacity-40 transition-opacity group-hover:opacity-70"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
