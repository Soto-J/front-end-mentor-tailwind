import Image from "next/image";

export const StarLogo = () => {
  return (
    <div className="max-w-fit rounded-full bg-[#7c8798]/10 p-4">
      <Image
        src="/cards/interactive-rating/images/icon-star.svg"
        alt="star"
        width={15}
        height={15}
      />
    </div>
  );
};
