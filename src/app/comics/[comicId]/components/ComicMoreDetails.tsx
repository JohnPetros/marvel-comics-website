import { Comic } from "@/@types/comic";
import { Detail } from "./Detail";
import { Variants, motion } from "framer-motion";

const details = [
  {
    key: "issueNumber",
    title: "Issue Number",
  },
  {
    key: "pageCount",
    title: "Page Count",
  },
  {
    key: "isbn",
    title: "ISBN",
  },
  {
    key: "issn",
    title: "ISSN",
  },
  {
    key: "upc",
    title: "UPC",
  },
];

interface ComicInfoProps {
  comic: Comic;
}

export function ComicMoreDetails({ comic }: ComicInfoProps) {
  const detailsVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-black">
      <motion.div
        variants={detailsVariants}
        initial="hidden"
        whileInView="visible"
        className="container mx-auto p-12"
      >
        <h3 className="text-white text-2xl font-semibold uppercase">
          More details
        </h3>
        <div className="grid grid-cols-2 gap-6 sm:gap-4 sm:grid-cols-3 mt-6">
          {details.map(({ key, title }) => {
            if (comic[key])
              return <Detail title={title} description={comic[key]} />;
          })}
        </div>
      </motion.div>
    </div>
  );
}
