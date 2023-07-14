"use client";
import { Category } from "@/@types/comic";
import { ArrowLeft } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  comicCategory: Category;
}

export function Header({ comicCategory }: HeaderProps) {
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
          <button>
            <Image src="/icons/facebook.svg" width={18} height={18} alt="" />
          </button>
          <button>
            <Image src="/icons/twitter.svg" width={18} height={18} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
