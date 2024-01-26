import Link from "next/link";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const linkVariants = cva("", {
  variants: {
    variant: {
      default: `relative after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:rounded-xl after:content-[''] hover:after:w-full hover:after:duration-300 hover:after:ease-in-out`,
    },
    size: {
      default: "",
    },
    underLineColor: {
      default: "hover:text-blue-500 hover:after:bg-blue-500",
      red: "hover:text-red-500 hover:after:bg-red-500",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    underLineColor: "default",
  },
});

export interface LinkProps
  extends React.LinkHTMLAttributes<HTMLLinkElement>,
    VariantProps<typeof linkVariants> {
  label: string;
  href: string;
  className?: string;
  targetBlank?: boolean;
}

export const CustomLink = ({
  label,
  href,
  className,
  targetBlank,
  variant,
  size,
  underLineColor,
}: LinkProps) => {
  return (
    <Link
      href={href}
      className={cn(linkVariants({ variant, size, underLineColor, className }))}
      target={targetBlank ? "_blank" : "_self"}
    >
      {label}
    </Link>
  );
};
