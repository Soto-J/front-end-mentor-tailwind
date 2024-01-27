const list = [
  { label: "Total", value: "Approximately 10 minutes" },
  { label: "Preparation", value: "5 minutes" },
  { label: "Cooking", value: "5 minutes" },
];

export const PreparationTime = () => {
  return (
    <section className="rounded-lg p-6 pr-20 bg-[#fff5fa]">
      <h2 className="font-bold text-[#7b284f]">Preparation time</h2>

      <ul className="mt-1 space-y-2 p-1">
        {list.map(({ label, value }) => (
          <li key={label} className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-[#7b284f]"></span>

            <div className="ml-4">
              <span className="font-bold">{label}: </span>
              <span>{value}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
