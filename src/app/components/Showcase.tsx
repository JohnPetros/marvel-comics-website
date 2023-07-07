"use client";

import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { Link } from "./Link";
import Image from "next/image";

export function Showcase() {
  return (
    <div>
      <div>
        <div className="h-[540px] bg-black/70 bg-[url('/images/spiderman-cover.png')] bg-no-repeat bg-cover bg-center bg-blend-color">
          <div className="max-w-[1200px] w-full h-full mx-auto flex justify-between items-center p-2">
            <div>
              <h1 className="text-white text-4xl leading- font-bold uppercase ">
                Best characters
                <br /> ever made in
                <br /> comics
              </h1>
              <p className="text-white/90 max-w-sm  text-sm uppercase my-8">
                Get hooked on a hearty helping of heroes and villains from the
                humble House of Ideas!
              </p>
              <Link path="/characters" name="Explore our universe" />
            </div>
            <div className="relative flex flex-col items-end h-full w-full">
              <div className="absolute -top-[108px] w-[640px] h-[640px]">
                <Image
                  src="/images/spiderman.png"
                  fill
                  className="absolute"
                  alt="Spider-man"
                />
              </div>
              <div className="mt-auto w-max">
                <div className="p-2 backdrop-blur-xl">
                  <div className="pb-10 px-10 pt-5 border border-gray-200 ">
                    <small className="text-white/90">Peter Parker</small>
                    <strong className="block uppercase text-4xl text-white">
                      Spider-man
                    </strong>
                    <a
                      className="flex items-center group w-max gap-4 text-yellow-500 mt-4 relative before:absolute before:h-[2px] before:bg-yellow-500 before:mt-1 before:-bottom-1 before:rounded before:w-full before:group-hover:w-full"
                      href="#"
                    >
                      See hero profile
                      <ArrowRight
                        size={16}
                        className="text-yellow-500 group-hover:translate-x-1 transition-transform duration-200"
                        weight="bold"
                      />
                    </a>
                    <div className="flex gap-7 items-center mt-6">
                      <div className="flex gap-3">
                        <button className="block w-4 h-2 rounded-full bg-red "></button>
                        <button className="block w-2 h-2 rounded-full bg-white"></button>
                        <button className="block w-2 h-2 rounded-full bg-white"></button>
                        <button className="block w-2 h-2 rounded-full bg-white"></button>
                        <button className="block w-2 h-2 rounded-full bg-white"></button>
                        <button className="block w-2 h-2 rounded-full bg-white"></button>
                      </div>
                      <div className="flex gap-7">
                        <button>
                          <ArrowLeft
                            size={20}
                            className="text-white/40"
                            weight="bold"
                          />
                        </button>

                        <button>
                          <ArrowRight
                            size={20}
                            className="text-white"
                            weight="bold"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between p-6">
          <button className="relative w-16 h-16 rounded-full bg-transparent border overflow-hidden">
            <Image src="/images/iron-man.jpg" fill alt="Iron-man" />
          </button>
          <button className="relative w-16 h-16 rounded-full bg-transparent border overflow-hidden ">
            <Image src="/images/iron-man.jpg" fill alt="Iron-man" />
          </button>
          <button className="relative w-16 h-16 rounded-full bg-transparent border overflow-hidden ">
            <Image src="/images/iron-man.jpg" fill alt="Iron-man" />
          </button>
        </div>
      </div>
    </div>
  );
}
