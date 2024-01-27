import { Outfit, Young_Serif } from "next/font/google";
import { Nutrition } from "./_components/nutrition";
import { Instructions } from "./_components/instructions";
import { Ingredients } from "./_components/ingredients";
import { PreparationTime } from "./_components/preparation-time";
import { CustomSeparator } from "./_components/custom- separator";
import { RecipeImage } from "./_components/recipe-image";

export const outfit = Outfit({ subsets: ["latin"], weight: ["400"] });
export const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RecipePage() {
  return (
    <div
      className={`${outfit.className} h-full bg-[#f3e6d8] text-sm text-[#5f574e] sm:py-20`}
    >
      <div className="mx-auto max-w-2xl rounded-xl bg-white">
        <RecipeImage />

        <div className="space-y-5 p-8 sm:pt-0">
          <h1 className={`${youngSerif.className} text-3xl font-bold`}>
            Simple Omelette Recipe
          </h1>
          <p className="text-sm">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <PreparationTime />
          <Ingredients />
          <div className="h-[1px] rounded-full bg-[#5f574e]/20" />
          <Instructions />
          <div className="h-[1px] rounded-full bg-[#5f574e]/20" />
          <Nutrition />
        </div>
      </div>
    </div>
  );
}
