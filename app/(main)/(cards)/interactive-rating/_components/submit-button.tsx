type SubmitButtonProps = {
  onSubmit: () => void;
};

export const SubmitButton = ({ onSubmit }: SubmitButtonProps) => {
  return (
    <button
      onClick={onSubmit}
      type="submit"
      className="w-full rounded-full bg-[#fb7413] py-3 pt-4 font-bold uppercase tracking-widest text-white hover:bg-[#fb7413]/80 hover:text-white/80 active:bg-white active:text-[#fb7413]"
    >
      Submit
    </button>
  );
};
