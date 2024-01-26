import { youngSerif } from "../page";

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

      <ol className="space-y-1 p-2">
        {ingredients.map((ingredient) => (
          <li className="">{ingredient}</li>
        ))}
      </ol>
    </section>
  );
};
