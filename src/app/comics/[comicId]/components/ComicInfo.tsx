"use client";
import { Comic } from "@/@types/comic";
import Image from "next/image";
import { Detail } from "./Detail";
import { formatDate } from "@/utils/formatDate";
import { Variants, motion } from "framer-motion";

interface ComicInfoProps {
  comic: Comic;
}

export function ComicInfo({
  comic: { title, thumbnail, dates, description, creators, prices },
}: ComicInfoProps) {
  const image = `${thumbnail.path}.${thumbnail.extension}`;

  const backgroundVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -350,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 0.4,
      },
    },
  };

  const detailsVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="w-full py-12 relative bg-black">
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "120%",
        }}
        className=" bg-no-repeat bg-center absolute left-0 top-0 bottom-0 right-0 brightness-[0.1] blur-sm"
      />

      <div className="container mx-auto grid grid-cols-[350px_550px] gap-16 relative z-50">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative w-[350px] h-[540px] shadow-lg"
        >
          <Image src={`${image}`} alt={title} fill />
        </motion.div>
        <motion.div
          variants={detailsVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-y-8 content-center"
        >
          <h2 className="text-white text-3xl font-bold">{title}</h2>
          <div>
            <dl className="grid grid-cols-2 gap-8">
              <Detail
                title="Published"
                description={formatDate(new Date(dates[1].date))}
              />

              {creators.items.map((creator) => (
                <Detail title={creator.role} description={creator.name} />
              ))}
              <Detail title="Price" description={"$" + prices[0].price} />
            </dl>

            <div className="text-base text-white mt-8">{description}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
