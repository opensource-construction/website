"use client";

import { useState } from "react";
import Link from "next/link";

export type MenuItem = {
  name: string;
  target: string;
};

export function Menu({ items }: { items: MenuItem[] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="hidden md:block">
        <ul className="flex">
          {items.map(({ name, target }) => {
            return (
              <li key={target} className="mx-4 pt-4">
                <Link href={target} className="text-base font-bold lg:text-lg">
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="z-50 block text-right md:hidden">
        <a
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="hamburger-menu"
          className="ml-2 mt-2 block h-9 w-14 bg-slate-300 pt-1 text-center align-middle"
        >
          {menuOpen ? "Close" : "Menu"}
        </a>
      </div>
      {menuOpen ? (
        <div className="fixed left-0 top-20 z-40 block h-screen w-screen bg-white p-0 md:hidden">
          <div className="m-auto block text-center align-middle">
            {items.map(({ name, target }) => {
              return (
                <li
                  key={target}
                  onClick={() => setMenuOpen(false)}
                  className="mx-4 list-none pt-6"
                >
                  <Link href={target} className="text-xl font-bold">
                    {name}
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
