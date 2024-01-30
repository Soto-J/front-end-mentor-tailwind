"use client";

import Image from "next/image";

export const ShareButton = () => {
  return (
    <div className="relative rounded-full bg-[#ecf2f8] p-2">
      <Image
        src="/cards/article-preview/images/icon-share.svg"
        alt="share"
        width={16}
        height={16}
      />

      <div className="absolute -top-14 left-0 right-0 flex items-center bg-red-500 p-4">
        <p className="uppercase">share</p>

        <div className="">
          <Image
            src="/cards/article-preview/images/icon-facebook.svg"
            alt="facebook"
            width={14}
            height={14}
          />
          <Image
            src="/cards/article-preview/images/icon-twitter.svg"
            alt="twitter"
            width={14}
            height={14}
          />
        </div>
      </div>
    </div>
  );
};
