"use client";

import Image from "next/image";

export const ShareButton = () => {
  return (
    <div className="bg-[#ecf2f8] p-2 rounded-full">
      <Image
        src="/cards/article-preview/images/icon-share.svg"
        alt="share"
        width={16}
        height={16}
      />
    </div>
  );
  // THIS WORKED! COME BACK TO THIS LATER
  // return (
  //   <div className="relative rounded-full bg-[#ecf2f8] p-4">
  //     <Image
  //       src="/cards/article-preview/images/icon-share.svg"
  //       alt="share"
  //       fill
  //     />
  //   </div>
  // );
};
