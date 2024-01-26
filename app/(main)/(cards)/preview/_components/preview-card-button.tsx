import Image from "next/image";

export const PreviewCardButton = () => {
  return (
    <button className="flex w-full items-center justify-center gap-x-2 rounded-lg bg-[#3c8067] py-3 text-sm text-white active:brightness-75">
      <Image
        src="/cards/preview-card/images/icon-cart.svg"
        alt="Cart Logo"
        height={14}
        width={14}
      />
      Add to Cart
    </button>
  );
};
