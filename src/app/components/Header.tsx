'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Link } from './Link'

import Logo from '../../../public/images/logo.svg'

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'comics',
    path: '/comics',
  },
  {
    name: 'characters',
    path: '/characters',
  },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full bg-black">
      <div className="relative mx-auto flex w-11/12 max-w-[1200px] flex-col items-center py-6 lg:flex-row">
        <nav className="mt-20 lg:mt-0" aria-label="primary">
          {pathname && (
            <ul className="flex gap-6">
              {links.map(({ path, name }) => (
                <li className="p-2 lg:p-0" key={path}>
                  <Link
                    path={path}
                    isActive={
                      name === 'home'
                        ? pathname === path
                        : pathname.includes(name)
                    }
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
        <div className="absolute left-1/2 top-3 w-max -translate-x-2/4">
          <Image priority src={Logo} className="h-auto w-auto" alt="Marvel" />
        </div>
      </div>
    </header>
  )
}
