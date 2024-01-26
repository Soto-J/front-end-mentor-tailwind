import Link from "next/link";

const pages = [
  { label: "qr-code", href: "/qr-code" },
  { label: "Preview-Card", href: "/preview" },
  { label: "Recipe", href: "/recipe" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <h1>Front-End Mentor Challenges</h1>

      <ul>
        {pages.map(({ label, href }) => (
          <li key={label}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
