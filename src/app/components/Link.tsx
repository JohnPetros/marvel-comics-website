"use client";
import NextLink from "next/link";

type LinkProps = {
  path: string;
  name: string;
  isActive?: boolean;
  isExternal?: boolean;
};

export function Link({
  path,
  name,
  isActive = true,
  isExternal = false,
}: LinkProps) {
  return (
    <NextLink
      className={`text-white/90 capitalize ${
        isActive ? "px-8 " : "px-0"
      } py-2 w-max cursor-pointer hover:text-white/50 transition-colors duration-200 ${
        isActive && "bg-red-600 rounded-tl-3xl rounded-br-3xl"
      }`}
      href={path}
      target={isExternal ? "_blank" : "_self"}
    >
      {name}
    </NextLink>
  );
}
