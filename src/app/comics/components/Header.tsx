"use client";
import { Button } from "@/app/components/Button";
import { DropDownMenu } from "@/app/components/DropDownMenu";
import { Heading } from "@/app/components/Heading";
import { Search } from "@/app/components/Search";
import { useComicsList } from "@/hooks/useComicList";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
const date = new Date();
const mouth = date.getMonth();
const today = date.getDate();

export function Header() {
  const { comicsAmount, category, setCategory, order, setOrder } =
    useComicsList();

  return (
    <div className="container mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Heading title="New this week" subtitle={`On sale ${today}/${mouth}`} />
        <nav className="flex gap-3">
          <Button
            title="Comics"
            onClick={() => setCategory("comics")}
            isActive={category === "comics"}
          />
          <Button
            title="Series"
            onClick={() => setCategory("series")}
            isActive={category === "series"}
          />
          <Button
            title="Events"
            onClick={() => setCategory("events")}
            isActive={category === "events"}
          />
        </nav>
      </div>

      <Search />
      <div className="flex justify-between">
        <span className="uppercase text-gray-400 text-sm font-bold">
          {comicsAmount} results
        </span>

        <RadixDropdownMenu.Root>
          <RadixDropdownMenu.Trigger>
            <span className="uppercase text-gray-400 text-sm flex items-center font-bold ">
              sort by {order === "asc" ? "A-Z" : "Z-A"}
            </span>
          </RadixDropdownMenu.Trigger>

          <DropDownMenu
            buttons={[
              {
                id: 1,
                title: "A-Z",
                onClick: () => setOrder("asc"),
                isActive: order === "asc",
              },
              {
                id: 2,
                title: "Z-A",
                onClick: () => setOrder("desc"),
                isActive: order === "desc",
              },
            ]}
          />
        </RadixDropdownMenu.Root>
      </div>
    </div>
  );
}
