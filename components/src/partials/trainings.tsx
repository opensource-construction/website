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
            Look ahead to all the great things that are there for you to be
            learned
          </h2>
          <p>
            Have you ever wondered how to get started with something technical?
            Go and check out a growing library of tutorials and learning
            content.
          </p>
          <p>
            Are you a contributor and produced content for your (or an other
            open) solution? Reach out and we publish it here.
          </p>
          <p>
            And no, not all content here is for free. Setting up valuable
            content is work – which should be paid, if requested by the
            publishers (who define the pricing).
          </p>
        </div>
      </div>
    </div>
  );
}
