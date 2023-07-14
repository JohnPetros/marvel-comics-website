"use client";
import Image from "next/image";
import { MouseEvent, TouchEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const eyeRef = useRef<HTMLButtonElement>(null);
  const [eyeRotation, setEyeRotation] = useState(0);
  const router = useRouter();

  function handleEyeClick() {
    router.back();
  }

  function isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
    return "ontouchstart" in document.documentElement;
  }

  function handleCursorMove(
    event: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) {
    if (!eyeRef.current) return;

    const eyeXPosition =
      eyeRef.current.getBoundingClientRect().left +
      eyeRef.current.clientWidth / 2;

    const eyeYPosition =
      eyeRef.current.getBoundingClientRect().top +
      eyeRef.current.clientHeight / 2;

    const cursorXPosition = isTouchEvent(event)
      ? event.touches[0].clientX
      : event.clientX;
    const cursorYPosition = isTouchEvent(event)
      ? event.touches[0].clientY
      : event.clientY;

    const radian = Math.atan2(
      eyeXPosition - cursorXPosition,
      eyeYPosition - cursorYPosition
    );

    const rotationDegrees = radian * (180 / Math.PI);
    setEyeRotation(-rotationDegrees);
  }

  return (
    <div
      className="relative"
      onMouseMove={handleCursorMove}
      onTouchMove={handleCursorMove}
    >
      <span
        style={{ backgroundImage: 'url("images/rain.gif")' }}
        className="absolute top-0 left-0 right-0 bottom-0 z-10"
      />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:gap-20 pt-20 md:pt-0 relative">
        <div className="flex flex-col gap-6 items-center z-20">
          <h1 className="uppercase text-black text-4xl font-bold">
            404 Page not found
          </h1>
          <p className="text-black text-lg">
            Try to click on the Uatu's eye to go back.
          </p>
          <motion.button
            ref={eyeRef}
            style={{ rotate: `${eyeRotation}deg` }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 12px #f00" }}
            onClick={handleEyeClick}
            className="relative w-[96px] h-[96px] rounded-full"
          >
            <Image src="/images/uatu-eye.png" fill alt="Uatu's eye" />
          </motion.button>
        </div>

        <div className="relative w-[400px] h-[500px] md:w-[600px] md:h-[660px]">
          <Image
            src="/images/sad-captain-america.png"
            fill
            alt="Sad Captain America holding his broken shield"
          />
        </div>
      </div>
    </div>
  );
}
