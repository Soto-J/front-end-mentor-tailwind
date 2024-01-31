import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-full">
      <Image
        src="/cards/article-preview/images/avatar-michelle.jpg"
        alt="avatar"
        fill
      />
    </div>
  );
};
