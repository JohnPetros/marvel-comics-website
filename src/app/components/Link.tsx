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
  isExternal = true,
}: LinkProps) {

  return (
    <NextLink
      className={`text-white/90 capitalize px-8 py-2 w-max cursor-pointer hover:text-white/50 transition-colors duration-200 ${
        isActive && "bg-red-600 rounded-tl-3xl rounded-br-3xl"
      }`}
      href={path}
      target={isExternal ? "_blank" : "_self"}
    >
      {name}
    </NextLink>
  );
}
