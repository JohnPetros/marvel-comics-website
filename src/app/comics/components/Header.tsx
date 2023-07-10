"use client";
import { DropDownMenu } from "@/app/components/DropDownMenu";
import { Heading } from "@/app/components/Heading";
import { Link } from "@/app/components/Link";
import { Search } from "@/app/components/Search";
import { useComics } from "@/app/hooks/useComics";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
const date = new Date();
const mouth = date.getMonth();
const today = date.getDate();

export function Header() {
  const { visibleComics, sortComics, order } = useComics();

  return (
    <div className="container mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Heading title="New this week" subtitle={`On sale ${today}/${mouth}`} />
        <nav className="flex gap-3">
          <Link name="stories" path="/comics?category='stories'" />
          <Link name="comics" path="/comics?category='comics'" />
          <Link name="series" path="/comics?category='series'" />
          <Link name="events" path="/comics?category='events'" />
        </nav>
      </div>

      <Search />
      <div className="flex justify-between">
        <span className="uppercase text-gray-400 text-sm font-bold">
          {visibleComics?.length} results
        </span>

        <RadixDropdownMenu.Root>
          <RadixDropdownMenu.Trigger>
            <span className="uppercase text-gray-400 text-sm font-bold">
              sort by
              <button className="ml-2">
                {order === "asc" ? "A-Z" : "Z-A"}
              </button>
            </span>
          </RadixDropdownMenu.Trigger>

          <DropDownMenu
            buttons={[
              { id: 1, title: "A-Z", onClick: () => sortComics("asc") },
              { id: 2, title: "Z-A", onClick: () => sortComics("desc") },
            ]}
          />
        </RadixDropdownMenu.Root>
      </div>
    </div>
  );
}
