"use client";
import { Heading } from "@/app/components/Heading";
import { Link } from "@/app/components/Link";
import { Search } from "@/app/components/Search";

export function Header() {
  const date = new Date();
  const mouth = date.getMonth();
  const today = date.getDate();

  return (
    <div className="container mx-auto space-y-12">
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
    </div>
  );
}
