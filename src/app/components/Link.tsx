'use client'
import NextLink from 'next/link'
import { ReactNode } from 'react'

type LinkProps = {
  path: string
  children: ReactNode
  isActive?: boolean
  isExternal?: boolean
}

export function Link({
  path,
  children,
  isActive = true,
  isExternal = false,
}: LinkProps) {
  return (
    <NextLink
      className={`capitalize text-white/90 ${
        isActive ? 'px-8 ' : 'px-0'
      } cursor-pointer  py-2 transition-colors duration-200 hover:text-white/50 ${
        isActive && 'rounded-br-3xl rounded-tl-3xl bg-red-600'
      }`}
      href={path}
      target={isExternal ? '_blank' : '_self'}
    >
      {children}
    </NextLink>
  )
}
