import { Outfit, Young_Serif } from "next/font/google";

import { Nutrition } from "./_components/nutrition";
import { Instructions } from "./_components/instructions";
import { Ingredients } from "./_components/ingredients";
import { PreparationTime } from "./_components/preparation-time";
import { RecipeImage } from "./_components/recipe-image";
import { CustomSeparator } from "./_components/custom- separator";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"], weight: ["400"] });
const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RecipePage() {
  return (
    <div
      className={cn(
        `$h-full bg-[#f3e6d8] text-sm text-[#5f574e]/75 sm:py-20`,
        outfit.className,
      )}
    >
      <div className="mx-auto max-w-[736px] rounded-2xl bg-white">
        <RecipeImage />

        <div className="space-y-5 p-10 pb-6 sm:pt-0">
          <h1
            className={`${youngSerif.className} text-3xl font-bold text-[#302d2c]`}
          >
            Simple Omelette Recipe
          </h1>
          <p className="text-sm">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <PreparationTime />
          <Ingredients />
          <CustomSeparator />
          <Instructions />
          <CustomSeparator />
          <Nutrition />
        </div>
      </div>
    </div>
  );
}
