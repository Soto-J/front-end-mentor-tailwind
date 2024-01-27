import { Young_Serif } from "next/font/google";

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

const ingredients = [
  "2-3 large eggs",
  "Salt, to taste",
  "Pepper, to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];

export const Ingredients = () => {
  return (
    <section>
      <h2
        className={`${youngSerif.className} text-2xl font-bold text-[#854632]`}
      >
        Ingredients
      </h2>

      <ul className="mt-3 space-y-2 p-1">
        {ingredients.map((ingredient) => (
          <li key={ingredient} className="flex items-center gap-6">
            <span className="h-1 w-1 rounded-full bg-[#854632]"></span>
            <p>{ingredient}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
