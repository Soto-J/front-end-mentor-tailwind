import Image from "next/image";

import { Outfit } from "next/font/google";

import { cn } from "@/lib/utils";

import { Footer } from "@/components/footer";

const outFit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export default function QrCodePage() {
  return (
    <div
      className={cn(
        "bg-gray-300 h-full flex items-center justify-center flex-col leading-5 gap-3",
        outFit.className
      )}
    >
      <div className="max-w-[275px] rounded-xl text-center bg-white p-3">
        <Image
          src="/cards/qr-code/images/image-qr-code.png"
          alt="qr-code"
          width={250}
          height={250}
          className="rounded-lg mx-auto"
        />

        <div className="p-1">
          <h1 className="font-semibold text-blue-950 text-[18px] py-2">
            Improve your front-end skills by building projects
          </h1>

          <p className="text-gray-400 text-[15px] py-2 font-light">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
