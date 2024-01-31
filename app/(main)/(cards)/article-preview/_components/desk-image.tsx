import React from "react";
import Image from "next/image";

export const DeskImage = () => {
  return (
    <div className="relative h-56 flex-shrink-0 overflow-hidden  rounded-t-lg md:h-auto md:w-64 md:rounded-l-lg md:rounded-tr-none">
      <Image
        src="/cards/article-preview/images/drawers.jpg"
        alt="Desk"
        priority
        quality={100}
        fill
        className="object-cover md:object-left"
      />
    </div>
  );
};
