import Image from "next/image";
import svgHero from "@/public/hero.svg";

export function TrainingsPartial() {
  return (
    <div>
      <Image
        src={svgHero}
        alt="hero animation"
        className="absolute -z-10 mx-auto -mt-48 box-border flex w-96 justify-center px-14 md:w-full"
      />
      <div className="prose mx-auto flex max-w-screen-xl flex-col items-end px-2 md:px-10 lg:flex-row lg:items-start">
        <div className="w-full px-4 lg:w-7/12">
          <h2>
            Sharing and learning is becoming the driver of radical innovation
          </h2>
          <p>
            We go ahead and share ideas, develop projects together and inspire
            the construction industry. Join us and walk the path into the new
            world of open source tools and open data.
          </p>
        </div>
        <div className="px-14 lg:w-5/12">
          <div className="hidden aspect-square w-64 items-center justify-center rounded-full bg-black p-2 text-center text-lg text-white md:flex lg:w-full xl:text-xl">
            Training in Open Source Tools
          </div>
        </div>
      </div>
    </div>
  );
}
