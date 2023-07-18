'use client'
import * as Menu from '@radix-ui/react-dropdown-menu'
import { motion } from 'framer-motion'

type Button = {
  id: number
  title: string
  onClick: VoidFunction
  isActive: boolean
}

interface DropDownMenuProps {
  buttons: Button[]
}

export function DropDownMenu({ buttons }: DropDownMenuProps) {
  return (
    <Menu.Portal>
      <Menu.Content>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col gap-3 rounded bg-[#fff] px-6 py-6"
        >
          {buttons.map(({ id, title, onClick, isActive }) => (
            <Menu.Item key={id} className="">
              <button
                className={`mr-auto rounded px-4 py-1 font-bold text-red-600 ${
                  isActive ? 'bg-red-600 text-white' : 'bg-transparent'
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
  )
}
