"use client";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/images/logo.svg";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "comics",
    path: "/comics",
  },
  {
    name: "characters",
    path: "/characters",
  },
];

export function Header() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <header className="container bg-purple borde">
      <div className="flex items-center w-[1200px] mx-auto py-6 relative">
        <nav>
          <ul className="flex gap-1">
            {links.map(({ path, name }) => (
              <li
                className={`text-white/90 capitalize px-8 py-1 hover:text-white/50 transition-colors duration-200  ${
                  path === pathname && "bg-red rounded-tl-3xl rounded-br-3xl"
                }`}
              >
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-max absolute left-1/2 top-3">
          <Image src={Logo} width={124} height={32} alt="Marvel" />
        </div>
      </div>
    </header>
  );
}
