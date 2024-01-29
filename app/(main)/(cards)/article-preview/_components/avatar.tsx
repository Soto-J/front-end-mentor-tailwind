import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="relative rounded-full">
      <Image
        src="/cards/article-preview/images/avatar-michelle.jpg"
        alt="avatar"
        fill
      />
    </div>
  );
};
