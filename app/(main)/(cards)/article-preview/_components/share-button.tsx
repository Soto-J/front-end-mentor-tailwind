"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "rounded-full bg-[#ecf2f8] p-2",
          isOpen && "bg-[#48556a] fill-blue-500",
        )}
      >
        <Image
          src="/cards/article-preview/images/icon-share.svg"
          alt="share"
          width={16}
          height={16}
          className="fill-white"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 flex w-56 items-center justify-center gap-4 rounded-lg bg-[#48556a] px-10 py-3.5 text-sm md:-right-28 md:-top-16">
          <p className="font-bold uppercase tracking-[3px]">share</p>

          <Image
            src="/cards/article-preview/images/icon-facebook.svg"
            alt="facebook"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/cards/article-preview/images/icon-twitter.svg"
            alt="twitter"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/cards/article-preview/images/icon-pinterest.svg"
            alt="twitter"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};
