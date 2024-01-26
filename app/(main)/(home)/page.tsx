import Link from "next/link";

const pages = [{ label: "qr-code", href: "/qr-code" }];

export default function Home() {
  return (
    <div className="h-full">
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
