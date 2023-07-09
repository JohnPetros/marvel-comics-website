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
      <div className="flex flex-col lg:flex-row items-center max-w-[1200px] w-full mx-auto py-6 relative">
        <nav className="mt-20 lg:mt-0">
          {pathname && (
            <ul className="flex gap-1">
              {links.map(({ path, name }) => (
                <li className="p-2 lg:p-0" key={path}>
                  <Link path={path} name={name} isActive={pathname === name} />
                </li>
              ))}
            </ul>
          )}
        </nav>
        <div className="w-max absolute left-1/2 -translate-x-2/4 top-3">
          <Image priority src={Logo} className="w-auto h-auto" alt="Marvel" />
        </div>
      </div>
    </header>
  );
}
