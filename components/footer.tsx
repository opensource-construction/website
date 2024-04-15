import Link from "next/link";

export function Footer() {
  return (
    <div className="flex w-full justify-between bg-gray-100 p-10">
      <div className="flex-grow"></div>
      <div className="flex flex-col md:flex-row">
        <ul className="flex justify-between">
          <li>© opensource.construction</li>
          <li>
            <Link href="/imprint-and-data-protection/" className="ml-12">
              Imprint & Data Protection
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
