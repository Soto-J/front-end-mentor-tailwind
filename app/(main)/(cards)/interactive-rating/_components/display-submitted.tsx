import React from "react";
import Image from "next/image";

type DisplaySubmittedProps = {
  selected?: number;
};

export const DisplaySubmitted = ({ selected }: DisplaySubmittedProps) => {
  return (
    <div className="mt-4">
      <Image
        src="/cards/interactive-rating/images/illustration-thank-you.svg"
        alt="Thank you!"
        width={150}
        height={150}
        className="mx-auto"
      />
      <p className="mx-auto my-6 max-w-fit rounded-full bg-[#7c8798]/10 p-1 px-5 text-[#fb7413]">
        You selected {selected} out of 5
      </p>

      <div className="text-center">
        <h1 className="text-2xl font-bold text-white">Thank you!</h1>
        <p className="py-4 text-[#7c8798]">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};
