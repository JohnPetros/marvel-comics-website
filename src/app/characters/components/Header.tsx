"use client";
import { KeyboardEvent, useState } from "react";
import { useCharactersList } from "@/hooks/useCharactersList";

import { Order } from "@/@types/order";
import { DropDownMenu } from "@/app/components/DropDownMenu";
import { Heading } from "@/app/components/Heading";
import { Search } from "@/app/components/Search";

import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";

export function Header() {
  const {
    state: { amount, order, search },
    dispatch,
  } = useCharactersList();
  const [searchValue, setSearchValue] = useState(search);

  function submitSearch() {
    dispatch({
      type: "setSearch",
      payload: searchValue.trim().toLocaleLowerCase(),
    });
  }

  function handleButtonOrderClick(order: Order) {
    dispatch({ type: "setOrder", payload: order });
  }

  function handleSearchKeyDown({ key }: KeyboardEvent<HTMLInputElement>) {
    if (key === "Enter") {
      submitSearch();
    }
  }

  function handleSearchClick() {
    submitSearch();
  }

  return (
    <div className="container mx-auto px-6 sm:px-0">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 items-center justify-center">
        <Heading
          title="EXPLORE THE UNIVERSE"
          subtitle="Dive into the dazzling domain of all the classic characters you love - and those you’ll soon discover!"
        />
      </div>

      <div className="mt-8">
        <Search
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
          onKeyDown={handleSearchKeyDown}
          onClick={handleSearchClick}
        />
      </div>

      <div className="flex justify-between mt-6">
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
