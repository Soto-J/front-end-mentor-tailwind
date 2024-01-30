import { cn } from "@/lib/utils";
import { Avatar } from "@nextui-org/react";
import { Manrope } from "next/font/google";
import Image from "next/image";
import { ShareButton } from "./_components/share-button";
import { DeskImage } from "./_components/desk-image";

const manRope = Manrope({ subsets: ["latin"], weight: ["500", "700"] });

export default function ArticlePage() {
  return (
    <div
      className={cn(
        "flex min-h-screen items-center justify-center bg-[#ecf2f8] py-10 text-[13px] text-[#6d7f97]",
        manRope.className,
      )}
    >
      {/* <div className="grid max-w-xs grid-cols-1 grid-rows-2 overflow-hidden rounded-lg shadow-lg md:max-w-3xl md:grid-cols-3 md:grid-rows-1"> */}
      <div className="flex w-[98%] max-w-sm flex-col overflow-hidden rounded-lg shadow-lg md:max-w-3xl md:flex-row">
        <DeskImage />

        <section className="space-y-3 bg-white p-8 md:pr-10">
          <h1 className="text-lg font-bold">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="font-[500]">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>

          <div className="pt-4 flex items-center gap-4">
            <Avatar />

            <div className="flex flex-col">
              <div className="font-bold">Michelle Appleton</div>
              <div className="font-[500]">28 Jun 2020</div>
            </div>

            <div className="ml-auto">
              <ShareButton />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
