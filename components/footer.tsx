import Link from "next/link";
import React from "react";

type FooterProps = {};

export const Footer = () => {
  return (
    <footer>
      Challenge by{" "}
      <Link href="/" target="_blank">
        Frontend Mentor
      </Link>
      . Coded by <Link href="#">John Soto</Link>.
    </footer>
  );
};
