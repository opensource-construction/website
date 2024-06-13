import Link from "next/link";

export type MenuItem = {
  name: string;
  target: string;
};

export function Menu({ items }: { items: MenuItem[] }) {
  return (
    <div className="hidden md:block">
      <ul className="flex">
        {items.map(({ name, target }) => {
          return (
            <li key={target} className="mx-4 pt-14">
              <Link href={target} className="text-base font-bold lg:text-lg">
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
