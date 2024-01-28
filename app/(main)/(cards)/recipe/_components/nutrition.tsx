import { Young_Serif } from "next/font/google";
import { CustomSeparator } from "./custom- separator";

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: ["400"],
});
const nutrition = [
  { label: "Calories", value: "227kcal" },
  { label: "Carbs", value: "0g" },
  { label: "Protein", value: "20g" },
  { label: "Fat", value: "22g" },
];

export const Nutrition = () => {
  return (
    <section>
      <h2
        className={`${youngSerif.className} py-2 text-2xl font-bold text-[#854632]`}
      >
        Nutrition
      </h2>
      <p className="py-3">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>

      <ul className="">
        {nutrition.map(({ label, value }, idx) => (
          <li key={label}>
            <div className="grid grid-cols-2 px-6 py-3">
              <div>{label}</div>
              <div className="font-bold text-[#854632]">{value}</div>
            </div>

            {idx !== nutrition.length - 1 && <CustomSeparator />}
          </li>
        ))}
      </ul>
    </section>
  );
};
