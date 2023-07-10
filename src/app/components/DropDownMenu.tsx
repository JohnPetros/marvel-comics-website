import * as Menu from "@radix-ui/react-dropdown-menu";

type Button = {
  id: number;
  title: string;
  onClick: VoidFunction;
};

interface DropDownMenuProps {
  buttons: Button[];
}

export function DropDownMenu({ buttons }: DropDownMenuProps) {
  return (
    <Menu.Portal>
      <Menu.Content className="bg-[#fff] rounded py-6 px-6 shadow-lx flex flex-col gap-2">
        {buttons.map(({ id, title, onClick }) => (
          <Menu.Item key={id} className="">
            <button
              className="text-red-600 font-bold mr-auto rounded px-2 py-1"
              onClick={onClick}
            >
              {title}
            </button>
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu.Portal>
  );
}
