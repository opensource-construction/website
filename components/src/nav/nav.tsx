import Image from "next/image";
import Link from "next/link";

import { Menu, type MenuItem } from "../menu";
import { ReactNode } from "react";

type NavbarProps = {
  title: string;
  logo: any;
  menuItems: MenuItem[];
  children?: ReactNode;
};

export function Navbar({ title, logo, menuItems, children }: NavbarProps) {
  return (
    <nav className="fixed top-0 z-30 flex justify-between p-6 md:relative md:p-10">
      <div className="h-24 w-14 md:w-48">
        <h1>
          <Link href="/" title={title}>
            <Image src={logo} width="180" height="100" alt={`${title} logo`} />
          </Link>
        </h1>
      </div>
      <div className="flex-grow"></div>
      <div>
        <div className="-mt-2 h-4 text-right md:h-12">{children}</div>
        <Menu items={menuItems} />
      </div>
    </nav>
  );
}
