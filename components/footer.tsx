import { cva } from "class-variance-authority";
import Link from "next/link";
import { CustomLink } from "./ui/custom-link";

export const Footer = () => {
  return (
    <footer>
      Challenge by <CustomLink href="/" label="Frontend Mentor" />
      . Coded by <CustomLink href="/" label="John Soto" targetBlank />.
    </footer>
  );
};
