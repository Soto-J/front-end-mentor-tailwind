import Image from "next/image";

export const RecipeImage = () => {
  return (
    <div className="sm:p-10">
      <div className="relative h-[300px] rounded-xl sm:overflow-hidden">
        <Image
          src="/cards/recipe/images/image-omelette.jpeg"
          alt="Food"
          quality={100}
          fill
        />
      </div>
    </div>
  );
};
