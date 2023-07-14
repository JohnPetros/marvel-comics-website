"use client";
import { Category } from "@/@types/comic";
import { ArrowLeft } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

import { FacebookShareButton, TwitterShareButton } from "next-share";

interface HeaderProps {
  comicId: number;
  comicCategory: Category;
}

export function Header({ comicId, comicCategory }: HeaderProps) {
  return (
    <div className="bg-zinc-900">
      <div className="container mx-auto flex justify-between">
        <Link
          href={{
            pathname: "/comics",
            query: { category: comicCategory },
          }}
          className="flex gap-2 text-sm items-center text-white py-2 px-2 hover:bg-white/30"
        >
          <ArrowLeft
            width={20}
            height={20}
            className="text-red-600"
            weight="bold"
          />
          All {comicCategory}
        </Link>

        <div className="flex gap-6">
          <FacebookShareButton
            url={`http://localhost:3000/comics/91992?category=comics`}
            quote={"."}
            hashtag={"#marvelcomics"}
            blankTarget
          >
            <Image src="/icons/facebook.svg" width={18} height={18} alt="" />
          </FacebookShareButton>
          <TwitterShareButton
            url={"https://github.com/next-share"}
            title={
              "next-share is a social share buttons for your next React apps."
            }
          >
            <Image src="/icons/twitter.svg" width={18} height={18} alt="" />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
}
