import Link from "next/link";

export function Footer() {
  return (
    <div className="flex w-full justify-between bg-slate-300 p-4 md:p-10">
      <div className="flex-grow"></div>
      <div className="flex flex-col md:flex-row">
        <ul className="flex flex-col justify-between text-right text-sm md:flex-row">
          <li>© opensource.construction</li>
          <li>
            <Link
              href="/page/imprint-and-data-protection/"
              className="md:ml-12"
            >
              Imprint & Data Protection
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
