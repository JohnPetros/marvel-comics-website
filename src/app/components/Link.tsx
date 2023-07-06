import NextLink from "next/link";

interface LinkProps {
  path: string;
  name: string;
  isActive: boolean;
}

export function Link({ path, name, isActive = true }: LinkProps) {
  return (
    <div
      className={`text-white/90 capitalize px-8 py-1 hover:text-white/50 transition-colors duration-200  ${
        isActive && "bg-red rounded-tl-3xl rounded-br-3xl"
      }`}
    >
      <NextLink href={path}>{name}</NextLink>
    </div>
  );
}
