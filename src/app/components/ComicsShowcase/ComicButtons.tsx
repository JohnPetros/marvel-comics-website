"use client";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export function ComicButtons() {
  return (
    <div className="flex gap-2 w-full items-center mt-8">
      <button className="rounded-full w-8 h-8 grid place-content-center bg-red-600 text-white">
        <ArrowLeft />
      </button>
      <span className="h-1 bg-gray-300 flex-1 rounded pl-2" />
      <button className="rounded-full w-8 h-8 grid place-content-center bg-red-600 text-white">
        <ArrowRight />
      </button>
    </div>
  );
}
