import Image from "next/image";
import { Link } from "./Link";
import { links } from "@/utils/links";
import { socialLinks } from "@/utils/socialLinks";

export function Footer() {
  return (
    <footer className="bg-black py-10">
      <div className="max-w-[1200px] w-full h-full mx-auto flex justify-between items-start">
        <Image
          src="/images/logo.svg"
          width={120}
          height={120}
          alt="Marvel"
          className="w-max"
        />

        <div className="flex">
          <ul className="space-y-2">
            {links.slice(0, 4).map(({ id, name, path }) => (
              <li key={String(id)}>
                <Link
                  name={name}
                  path={path}
                  isActive={false}
                  isExternal={true}
                />
              </li>
            ))}
          </ul>

          <ul className="space-y-2">
            {links.slice(4).map(({ id, name, path }) => (
              <li key={String(id)}>
                <Link
                  name={name}
                  path={path}
                  isActive={false}
                  isExternal={true}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4">
          <div className="border border-gray-500/80 p-4 flex items-center justify-between gap-8">
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

          <div className="border border-gray-500/80 p-4 flex items-center justify-between gap-8">
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

        <div className="grid gap-6">
          <strong className="uppercase text-white text-md">
            KEEP UP TO DATE <br /> WITH EVERYTHING MARVEL
          </strong>

          <div className="grid grid-cols-4 gap-y-4">
            {socialLinks.map(({ id, icon, path }) => (
              <a key={id} href={path} target="_blank">
                <Image src={`/icons/${icon}`} width={24} height={24} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
