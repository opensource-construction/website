import Image from "next/image";
import svgHero from "@/public/hero.svg";

export function ClustersPartial() {
  return (
    <div>
      <Image
        src={svgHero}
        alt="hero animation"
        className="absolute -z-10 mx-auto -mt-48 box-border flex w-96 justify-center px-14 md:w-full"
      />
      <div className="prose mx-auto flex max-w-screen-xl flex-col items-end px-2 md:px-10 lg:flex-row lg:items-start">
        <div className="w-full px-4 lg:w-7/12">
          <h2>Innovation Hub: The Future of Open Source Construction</h2>
          <p>
            Welcome to the Innovation Hub of opensource.construction, where
            visionary minds and groundbreaking projects converge to redefine the
            construction industry.
          </p>
          <p>
            Our diverse clusters focus on key areas such as industrialization,
            sustainability, technology integration, and workforce development,
            all united by a commitment to open-source principles and
            collaborative innovation.
          </p>
          <p>
            Explore each cluster to discover cutting-edge initiatives, connect
            with industry leaders, and be part of the movement that’s building
            the future of construction, one innovative idea at a time. Join us
            and contribute to a more efficient, sustainable, and open
            construction industry.
          </p>
        </div>
      </div>
    </div>
  );
}
