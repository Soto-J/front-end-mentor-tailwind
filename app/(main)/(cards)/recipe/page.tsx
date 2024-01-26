import { Outfit, Young_Serif } from "next/font/google";
import Image from "next/image";
import { Nutrition } from "./_components/nutrition";
import { Instructions } from "./_components/instructions";
import { Ingredients } from "./_components/ingredients";
import { PreparationTime } from "./_components/preparation-time";

export const outfit = Outfit({ subsets: ["latin"], weight: ["400"] });
export const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RecipePage() {
  return (
    <div
      className={`${outfit.className} h-full bg-[#f3e6d8] text-[#5f574e] sm:py-4`}
    >
      <div className="mx-auto max-w-2xl rounded-xl bg-white">
        <div className="sm:p-8">
          <div className="relative h-60 rounded-lg sm:overflow-hidden">
            <Image
              src="/cards/recipe/images/image-omelette.jpeg"
              alt="Food"
              quality={100}
              fill
            />
          </div>
        </div>

        <div className="p-8 sm:px-8 sm:py-0">
          <h1 className={`${youngSerif.className} text-3xl font-bold`}>
            Simple Omelette Recipe
          </h1>
          <p className="py-4 text-sm">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <PreparationTime />

          <Ingredients />

          <br />

          <Instructions />

          <br />

          <Nutrition />
        </div>
      </div>
    </div>
  );
}
