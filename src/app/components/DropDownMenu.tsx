"use client";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";

type Button = {
  id: number;
  title: string;
  onClick: VoidFunction;
  isActive: boolean;
};

interface DropDownMenuProps {
  buttons: Button[];
}

export function DropDownMenu({ buttons }: DropDownMenuProps) {
  return (
    <Menu.Portal>
      <Menu.Content>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#fff] rounded py-6 px-6 flex flex-col gap-3"
        >
          {buttons.map(({ id, title, onClick, isActive }) => (
            <Menu.Item key={id} className="">
              <button
                className={`text-red-600 font-bold mr-auto rounded px-4 py-1 ${
                  isActive ? "bg-red-600 text-white" : "bg-transparent"
                }`}
                onClick={onClick}
              >
                {title}
              </button>
            </Menu.Item>
          ))}
        </motion.div>

        <Menu.Arrow className="fill-[#fff]" />
      </Menu.Content>
    </Menu.Portal>
  );
}
