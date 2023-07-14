import Image from "next/image";
import { Link } from "./Link";
import { links } from "@/utils/links";
import { socialLinks } from "@/utils/socialLinks";

export function Footer() {
  return (
    <footer className="bg-black mt-32">
      <div className="w-11/12 max-w-[1200px] h-auto mx-auto py-12 md:grid md:grid-cols-[max-content_max-content] gap-y-16 flex flex-col lg:flex-row items-center md:justify-between md:items-start">
        <Image
          src="/images/logo.svg"
          width={360}
          height={360}
          alt="Marvel"
          className="w-max"
        />

        <div className="grid grid-cols-2">
          <ul className="space-y-2">
            {links.slice(0, 4).map(({ id, name, path }) => (
              <li key={String(id)}>
                <Link path={path} isActive={false} isExternal={true}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="space-y-2">
            {links.slice(4).map(({ id, name, path }) => (
              <li key={String(id)}>
                <Link path={path} isActive={false} isExternal={true}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4">
          <div className="border border-gray-500/80 p-4 flex items-center justify-between gap-6">
            <Image
              src="/icons/marvel-unlimited.svg"
              width={40}
              height={40}
              alt="Marvel unlimited"
            />
            <div>
              <strong className="uppercase text-white">Marvel unlimited</strong>
              <p className="text-white/90 text-sm">
                Access over 29,9000+ digital comics
              </p>
            </div>
          </div>

          <div className="border border-gray-500/80 p-4 flex items-center justify-between gap-6">
            <Image
              src="/icons/marvel-insider.png"
              width={64}
              height={64}
              alt="Marvel unlimited"
            />
            <div>
              <strong className="uppercase text-white">Marvel unlimited</strong>
              <p className="text-white/90 text-sm">
                Get Rewarded for Being a Marvel Fan
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <strong className="uppercase text-white text-md">
            KEEP UP TO DATE WITH EVERYTHING MARVEL
          </strong>

          <div className="grid grid-cols-4 gap-4 mt-6">
            {socialLinks.map(({ id, icon, path }) => (
              <a
                key={id}
                href={path}
                target="_blank"
                className="grid place-content-center"
              >
                <Image src={`/icons/${icon}`} width={24} height={24} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
