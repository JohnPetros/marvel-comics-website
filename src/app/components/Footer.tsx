import Image from 'next/image'
import { Link } from './Link'
import { links } from '@/utils/links'
import { socialLinks } from '@/utils/socialLinks'

export function Footer() {
  return (
    <footer className="mt-32 bg-black">
      <div className="mx-auto flex h-auto w-11/12 max-w-[1200px] flex-col items-center gap-y-16 py-12 md:grid md:grid-cols-[max-content_max-content] md:items-start md:justify-between lg:flex-row">
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
          <div className="flex items-center justify-between gap-6 border border-gray-500/80 p-4">
            <Image
              src="/icons/marvel-unlimited.svg"
              width={40}
              height={40}
              alt="Marvel unlimited"
            />
            <div>
              <strong className="uppercase text-white">Marvel unlimited</strong>
              <p className="text-sm text-white/90">
                Access over 29,9000+ digital comics
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6 border border-gray-500/80 p-4">
            <Image
              src="/icons/marvel-insider.png"
              width={64}
              height={64}
              alt="Marvel unlimited"
            />
            <div>
              <strong className="uppercase text-white">Marvel unlimited</strong>
              <p className="text-sm text-white/90">
                Get Rewarded for Being a Marvel Fan
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <strong className="text-md uppercase text-white">
            KEEP UP TO DATE WITH EVERYTHING MARVEL
          </strong>

          <div className="mt-6 grid grid-cols-4 gap-4">
            {socialLinks.map(({ id, icon, path }) => (
              <a
                key={id}
                href={path}
                target="_blank"
                className="grid place-content-center"
                rel="noreferrer"
              >
                <Image src={`/icons/${icon}`} width={24} height={24} alt="" />
              </a>
            ))}
          </div>
        </div>
        <p className="flex self-center font-semibold text-white">
          <a
            href="https://github.com/JohnPetros"
            target="_blank"
            className="flex items-center gap-2 transition-colors duration-200 hover:text-white/70"
            rel="noreferrer"
          >
            Made by John Petros
            <Image src="/icons/github.svg" width={24} height={24} alt="" />
          </a>
        </p>
      </div>
    </footer>
  )
}
