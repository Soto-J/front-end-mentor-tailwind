import Image from "next/image";
import { Fraunces, Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "700"] });

export default function PreviewPage() {
  return (
    <div
      className={`${montserrat.className} flex h-full items-center justify-center bg-[#f2ebe3]`}
    >
      <div className="flex max-w-xs flex-col overflow-hidden rounded-lg bg-white sm:grid sm:max-w-lg sm:grid-cols-2">
        <div className="relative">
          <Image
            src="/cards/preview-card/images/image-product-desktop.jpg"
            alt="logo"
            fill
            className="hidden object-cover sm:block"
          />
          <Image
            src="/cards/preview-card/images/image-product-mobile.jpg"
            alt="logo"
            width={400}
            height={400}
            // fill
            className="block object-cover sm:hidden"
          />
        </div>

        <div className="space-y-4 p-6">
          <p className="text-xs font-[500] uppercase tracking-[4px] text-[#6c7289]">
            Perfume
          </p>
          <h1
            className={`${fraunces.className} captialize text-3xl font-bold leading-8 text-[#1c232b]`}
          >
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-xs font-[500] text-[#6c7289] leading-5">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div className="flex items-center gap-x-4">
            <div
              className={`${fraunces.className} text-3xl font-bold text-[#3c8067]`}
            >
              $149.99
            </div>
            <div className="text-xs font-[500] text-[#6c7289] line-through">
              $169.99
            </div>
          </div>

          <button className="flex w-full items-center justify-center gap-x-2 rounded-lg bg-[#3c8067] py-3 text-sm text-white active:brightness-75">
            <Image
              src="/cards/preview-card/images/icon-cart.svg"
              alt="Cart Logo"
              height={14}
              width={14}
            />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
