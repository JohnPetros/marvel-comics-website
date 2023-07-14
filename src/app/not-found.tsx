"use client";
import Image from "next/image";
import { MouseEvent, useRef, useState } from "react";

export default function NotFound() {
  const eyeRef = useRef<HTMLButtonElement>(null);
  const [eyeRotation, setEyeRotation] = useState(0);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (!eyeRef.current) return;

    const eyeXPosition =
      eyeRef.current.getBoundingClientRect().left +
      eyeRef.current.clientWidth / 2;

    const eyeYPosition =
      eyeRef.current.getBoundingClientRect().top +
      eyeRef.current.clientHeight / 2;

    const cursorXPosition = event.clientX;
    const cursorYPosition = event.clientY;

    const radian = Math.atan2(
      cursorXPosition - eyeXPosition,
      eyeYPosition - cursorYPosition
    );

    console.log(radian);

    const rotationDegrees = radian * (180 / Math.PI) * -1 + 180;
    setEyeRotation(rotationDegrees);
  }

  return (
    <div
      className="constainer mx-auto flex gap-24 z-30"
      onMouseMove={handleMouseMove}
    >
      <div>
        <h1 className="uppercase text-black text-2xl font-bold">
          404 Page not found
        </h1>
        <p className="text-black">Try to click on the Uatu's eye to go back</p>
        <button
          ref={eyeRef}
          className={`relative w-[96px] h-[96px] rotate-${eyeRotation}`}
        >
          <Image src="/images/uatu-eye.png" fill alt="Uatu's eye" />
        </button>
      </div>

      <div className="relative w-[440px] h-[440px]">
        <Image
          src="/images/sad-captain-america.png"
          fill
          alt="Sad Captain America holding his broken shield"
        />
      </div>
    </div>
  );
}
