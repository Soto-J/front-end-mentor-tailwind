import { cn } from "@/lib/utils";

type RatingButtonProps = {
  rating: number;
  selected?: number;
  setSelected: (selected: number) => void;
};

export const RatingButtons = ({
  rating,
  selected,
  setSelected,
}: RatingButtonProps) => {
  return (
    <ul className="flex justify-between py-2">
      {[...Array(rating)].map((_, i) => (
        <li key={i} onClick={() => setSelected(i + 1)}>
          <button
            disabled={selected === i + 1}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full bg-[#7c8798]/10 text-[#7c8798]",
              selected === i + 1 && "bg-[#959eac] text-white",
              selected !== i + 1 && "hover:bg-[#fb7413] hover:text-white",
            )}
          >
            <div className="mt-1">{i + 1}</div>
          </button>
        </li>
      ))}
    </ul>
  );
};
