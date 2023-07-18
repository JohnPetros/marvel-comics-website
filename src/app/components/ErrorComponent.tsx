'use client'
import Image from 'next/image'
import { MouseEvent, TouchEvent, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface ErrorProps {
  title: string
  message: string
  handler: VoidFunction | null
}

export function ErrorComponent({ title, message, handler }: ErrorProps) {
  const eyeRef = useRef<HTMLButtonElement>(null)
  const [eyeRotation, setEyeRotation] = useState(0)
  const router = useRouter()

  function handleEyeClick() {
    handler ? handler() : router.back()
  }

  function isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
    return 'ontouchstart' in document.documentElement
  }

  function handleCursorMove(
    event: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>,
  ) {
    if (!eyeRef.current) return

    const eyeXPosition =
      eyeRef.current.getBoundingClientRect().left +
      eyeRef.current.clientWidth / 2

    const eyeYPosition =
      eyeRef.current.getBoundingClientRect().top +
      eyeRef.current.clientHeight / 2

    const cursorXPosition = isTouchEvent(event)
      ? event.touches[0].clientX
      : event.clientX
    const cursorYPosition = isTouchEvent(event)
      ? event.touches[0].clientY
      : event.clientY

    const radian = Math.atan2(
      eyeXPosition - cursorXPosition,
      eyeYPosition - cursorYPosition,
    )

    const rotationDegrees = radian * (180 / Math.PI)
    setEyeRotation(-rotationDegrees)
  }

  return (
    <div
      className="relative"
      onMouseMove={handleCursorMove}
      onTouchMove={handleCursorMove}
    >
      <span
        style={{ backgroundImage: 'url("images/rain.gif")' }}
        className="absolute bottom-0 left-0 right-0 top-0 z-10"
      />
      <div className="container relative mx-auto flex flex-col items-center justify-center pt-20 md:flex-row md:gap-20 md:pt-0">
        <div className="z-20 flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold uppercase text-black">{title}</h1>
          <p className="text-lg text-black">{message}</p>
          <motion.button
            ref={eyeRef}
            style={{ rotate: `${eyeRotation}deg` }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 12px #f00' }}
            onClick={handleEyeClick}
            className="relative h-[96px] w-[96px] rounded-full"
          >
            <Image src="/images/uatu-eye.png" fill alt="Uatu's eye" />
          </motion.button>
        </div>

        <div className="relative h-[500px] w-[400px] md:h-[660px] md:w-[600px]">
          <Image
            src="/images/sad-captain-america.png"
            fill
            alt="Sad Captain America holding his broken shield"
          />
        </div>
      </div>
    </div>
  )
}
