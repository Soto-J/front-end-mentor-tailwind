import { youngSerif } from "../page";

export const Nutrition = () => {
  return (
    <section>
      <h2
        className={`${youngSerif.className} text-2xl font-bold text-[#854632]`}
      >
        Nutrition
      </h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>

      <div>
        <div>Calories 277kcal</div>
        <div>Carbs 0g</div>
        <div>Protein 20g</div>
        <div>Fat 22g</div>
      </div>
    </section>
  );
};
