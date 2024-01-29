"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import { Overpass } from "next/font/google";

import { StarLogo } from "./_components/star-logo";
import { RatingButtons } from "./_components/rating-buttons";
import { SubmitButton } from "./_components/submit-button";
import { DisplaySubmitted } from "./_components/display-submitted";
import { Reset } from "./_components/reset";

const overPass = Overpass({ subsets: ["latin"], weight: ["400", "700"] });

export default function InteractiveRatingPage() {
  const [selected, setSelected] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-center bg-[#121417] text-sm font-[400]",
        overPass.className,
      )}
    >
      <div className="max-w-sm space-y-4 rounded-3xl bg-[#252d37] p-8 pr-9">
        {!isSubmitted ? (
          <>
            <StarLogo />

            <div className="pt-5">
              <h1 className="text-2xl font-bold text-white">How did we do?</h1>
              <p className="mt-4 text-[#959eac]">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <RatingButtons
              selected={selected}
              setSelected={setSelected}
              rating={5}
            />
            <SubmitButton onSubmit={() => setIsSubmitted(true)} />
          </>
        ) : (
          <DisplaySubmitted selected={selected} />
        )}
      </div>

      <Reset
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        setSelected={setSelected}
      />
    </div>
  );
}
