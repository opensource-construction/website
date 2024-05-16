import Image from "next/image";
import Link from "next/link";
import React from "react";

const navItems = {
  "/#open-source": { name: "Open Source" },
  "/#projects": { name: "Projects" },
  "/#events": { name: "Events" },
  "/trainings": { name: "Trainings" },
  "/#who-is-behind-the-initiative": { name: "About us" },
};

export function Navbar() {
  return (
    <nav className="flex justify-between p-6 md:p-10">
      <div className="h-24 w-48">
        <h1>
          <Link href="/" title="https://www.opensource.construction">
            <Image
              src="/opensource_construction_logo.svg"
              width="180"
              height="100"
              alt="opensource.construction Logo"
            />
          </Link>
        </h1>
      </div>
      <div className="flex-grow"></div>
      <div className="hidden md:block">
        <ul className="flex">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <li key={path} className="mx-4 pt-14">
                <Link href={path} className="text-lg">
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
