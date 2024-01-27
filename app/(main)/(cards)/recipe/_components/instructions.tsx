import { youngSerif } from "../page";

const instructions = [
  {
    label: "Beat the eggs",
    value:
      "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    label: "Heat the pan",
    value:
      "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    label: "Cook the omelette",
    value:
      "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    label: "Add fillings (optional)",
    value:
      "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    label: "Fold and serve",
    value:
      "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    label: "Enjoy",
    value: "Serve hot, with additional salt and pepper if needed.",
  },
];

export const Instructions = () => {
  return (
    <section>
      <h2
        className={`${youngSerif.className} text-2xl font-bold text-[#854632]`}
      >
        Instructions
      </h2>

      <ul className="mt-2 space-y-2 p-1">
        {instructions.map(({ label, value }, idx) => (
          <li key={label} className="flex">
            <span className="font-bold text-[#854632]">{idx + 1}. </span>

            <div className="ml-5">
              <span className="font-bold">{label}: </span>
              <span>{value}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
