const list = [
  { label: "Total", value: "Approximately 10 minutes" },
  { label: "Preparation", value: "5 minutes" },
  { label: "Cooking", value: "5 minutes" },
];

export const PreparationTime = () => {
  return (
    <section className="rounded bg-[#7b284f]/10 p-4">
      <h2 className="font-bold text-[#7b284f]">Preparation time</h2>
      <ol className="list-inside list-disc p-2">
        {list.map(({ label, value }) => (
          <li key={label} className="flex gap-x-2">
            <span>{label}:</span>
            <span>{value}</span>
          </li>
        ))}

        <li >
          <span>Total:</span>
          Approximately 10 minutes
        </li>

        <li>
          <span>Preparation:</span>5 minutes
        </li>
        <li>
          <span>Cooking:</span>5 minutes
        </li>
      </ol>
    </section>
  );
};
