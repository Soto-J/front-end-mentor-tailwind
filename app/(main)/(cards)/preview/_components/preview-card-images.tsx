import Image from "next/image";

export const PreviewCardImages = () => {
  return (
    <div className="relative">
      <Image
        src="/cards/preview-card/images/image-product-desktop.jpg"
        alt="logo"
        fill
        className="hidden object-cover sm:block"
      />
      <Image
        src="/cards/preview-card/images/image-product-mobile.jpg"
        alt="logo"
        width={400}
        height={400}
        // fill
        className="block object-cover sm:hidden"
      />
    </div>
  );
};
