"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className=" bg-gradient-to-r from-[#feda75] via-[#fa7e1e] to-[#d62976] h-screen w-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className=" row-start-2  ">
        <div className="backdrop-blur-lg bg-white/15 border flex flex-col gap-8 items-center border-white/30 rounded-2xl shadow-lg p-10 w-100 text-center">
          <h1 className="text-2xl font-bold sm:text-4xl">
            Download Instagram Photos,
            <br />
            Videos, and Reels Instantly!
          </h1>
          <p>
            Fast, free, and easy-to-use Instagram downloader. Get your favorite
            content in just a few clicks.
          </p>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="./v1.2.0.apk"
            target="_blank"
            rel="noopener noreferrer"
            download={true}
          >
            Download Now
          </a>
        </div>
      </main>
    </div>
  );
}
