import Image from "next/image";

export default function PreviewPage() {
  return (
    <div className="flex h-full items-center justify-center bg-[#f2ebe3]">
      <div className="grid max-w-lg grid-cols-2 overflow-hidden rounded-lg bg-white">
        <div className="relative">
          <Image
            src="/cards/preview-card/images/image-product-desktop.jpg"
            alt="logo"
            objectFit="cover"
            width={400}
            height={400}
          />
        </div>

        <div className="p-4">
          <p>Perfume</p>
          <h1 className="text-lg font-bold">Gabrielle Essence Eau De Parfum</h1>
          <p className="text-sm font-light">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div>$149.99 $169.99 Add to Cart</div>

          <button className="w-full rounded-lg bg-[#3c8067] py-2 text-white active:brightness-75">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
