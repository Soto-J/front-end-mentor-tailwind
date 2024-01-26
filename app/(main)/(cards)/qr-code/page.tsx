import Image from "next/image";

import { Outfit } from "next/font/google";

import { cn } from "@/lib/utils";

import { Footer } from "@/components/footer";

const outFit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export default function QrCodePage() {
  return (
    <div
      className={cn(
        "flex h-full flex-col items-center justify-center gap-3 bg-gray-300 leading-5",
        outFit.className,
      )}
    >
      <div className="max-w-[275px] rounded-xl bg-white p-3 text-center">
        <Image
          src="/cards/qr-code/images/image-qr-code.png"
          alt="qr-code"
          width={250}
          height={250}
          className="mx-auto rounded-lg"
        />

        <div className="p-1">
          <h1 className="py-2 text-[18px] font-semibold text-blue-950">
            Improve your front-end skills by building projects
          </h1>

          <p className="py-2 text-[15px] font-light text-gray-400">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
