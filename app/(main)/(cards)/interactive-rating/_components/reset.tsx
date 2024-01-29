type ResetProps = {
  isSubmitted: boolean;
  setIsSubmitted: (isSubmitted: boolean) => void;
  setSelected: (selected: number | undefined) => void;
};

export const Reset = ({
  isSubmitted,
  setIsSubmitted,
  setSelected,
}: ResetProps) => {
  if (!isSubmitted) return null;

  return (
    <p
      onClick={() => {
        setIsSubmitted(false);
        setSelected(undefined);
      }}
      className="mt-4 cursor-pointer font-bold text-white hover:text-blue-500"
    >
      Reset
    </p>
  );
};
