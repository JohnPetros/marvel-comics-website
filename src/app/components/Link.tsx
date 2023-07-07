import NextLink from "next/link";

interface LinkProps {
  path: string;
  name: string;
  isActive?: boolean;
}

export function Link({ path, name, isActive = true }: LinkProps) {
  return (
    <NextLink
      className={`text-white/90 capitalize px-8 py-2 cursor-pointer hover:text-white/50 transition-colors duration-200 ${
        isActive && "bg-red-600 rounded-tl-3xl rounded-br-3xl"
      }`}
      href={path}
    >
      {name}
    </NextLink>
  );
}
