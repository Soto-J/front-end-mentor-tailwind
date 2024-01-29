import { ChallengeTabs } from "./_components/tabs";

export default function Home() {
  return (
    <div className="min-h-screen py-20">
      <h1 className="text-center text-xl font-bold">
        Front-End Mentor Challenges (Tailwind)
      </h1>

      <p className="mx-auto max-w-xl py-8 text-center text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        excepturi deleniti quibusdam tempore, quo porro laudantium odit
        perferendis. Sunt, ipsam. Nobis necessitatibus eos odit quasi laudantium
        ad, hic sunt atque?
      </p>
      <div className="mx-auto max-w-fit">
        <ChallengeTabs />
      </div>
    </div>
  );
}
