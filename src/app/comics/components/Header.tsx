"use client";
import { KeyboardEvent, useState } from "react";
import { Category, Order } from "@/@types/comic";
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
  const {
    state: { amount, category, order, search },
    dispatch,
  } = useComicsList();
  const [searchValue, setSearchValue] = useState(search);

  function handleButtonCategoryClick(category: Category) {
    dispatch({ type: "setCategory", payload: category });
  }

  function handleButtonOrderClick(order: Order) {
    dispatch({ type: "setOrder", payload: order });
  }

  function handleSearchKeyDown({ key }: KeyboardEvent<HTMLInputElement>) {
    if (key === "Enter") {
      dispatch({ type: "setSearch", payload: searchValue });
    }
  }

  return (
    <div className="container mx-auto space-y-6 px-6 sm:px-0">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 items-center justify-between">
        <Heading title="New this week" subtitle={`On sale ${today}/${mouth}`} />
        <nav className="flex gap-3">
          <Button
            title="Comics"
            onClick={() => handleButtonCategoryClick("comics")}
            isActive={category === "comics"}
          />
          <Button
            title="Series"
            onClick={() => handleButtonCategoryClick("series")}
            isActive={category === "series"}
          />
          <Button
            title="Events"
            onClick={() => handleButtonCategoryClick("events")}
            isActive={category === "events"}
          />
        </nav>
      </div>

      <Search
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
        onKeyDown={handleSearchKeyDown}
      />

      <div className="flex justify-between">
        <span className="uppercase text-gray-400 text-sm font-bold">
          {amount} results
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
                onClick: () => handleButtonOrderClick("asc"),
                isActive: order === "asc",
              },
              {
                id: 2,
                title: "Z-A",
                onClick: () => handleButtonOrderClick("desc"),
                isActive: order === "desc",
              },
            ]}
          />
        </RadixDropdownMenu.Root>
      </div>
    </div>
  );
}
