"use client";
import { usePathname } from "next/navigation";

import Image from "next/image";

import Logo from "../../../public/images/logo.svg";
import { Link } from "./Link";

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

  return (
    <header className="w-full bg-black borde">
      <div className="flex items-center max-w-[1200px] w-full mx-auto py-6 relative">
        <nav>
          <ul className="flex gap-1">
            {links.map(({ path, name }) => (
              <li key={path}>
                <Link path={path} name={name} isActive={Boolean(pathname === name)} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-max absolute left-1/2 -translate-x-2/4 top-3">
          <Image src={Logo} width={124} height={32} alt="Marvel" />
        </div>
      </div>
    </header>
  );
}
