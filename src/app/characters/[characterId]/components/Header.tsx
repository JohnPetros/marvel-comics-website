'use client'
import { ArrowLeft } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

import { FacebookShareButton, TwitterShareButton } from 'next-share'

interface HeaderProps {
  characterId: number
}

export function Header({ characterId }: HeaderProps) {
  return (
    <div className="bg-zinc-900">
      <div className="container mx-auto flex justify-between">
        <Link
          href={{
            pathname: '/characters',
          }}
          className="flex items-center gap-2 px-2 py-2 text-sm text-white transition-colors duration-200 hover:bg-white/30"
        >
          <ArrowLeft
            width={20}
            height={20}
            className="text-red-600"
            weight="bold"
          />
          All characters
        </Link>

        <div className="flex gap-6">
          <FacebookShareButton
            url={`http://localhost:3000/characters/${characterId}`}
            quote={'.'}
            hashtag={'#marvelcomics'}
            blankTarget
          >
            <Image src="/icons/facebook.svg" width={18} height={18} alt="" />
          </FacebookShareButton>
          <TwitterShareButton
            url={'https://github.com/next-share'}
            title={
              'next-share is a social share buttons for your next React apps.'
            }
          >
            <Image src="/icons/twitter.svg" width={18} height={18} alt="" />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  )
}
