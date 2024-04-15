import Image from "next/image";
import svgHero from "@/public/hero.svg";
import svgIntro from "@/public/intro.svg";

export default function Home() {
  return (
    <div className="prose-h2:mt-0 prose-h2:text-2xl prose-h3:text-xl">
      <section className="py-12" id="opensource">
        <Image
          src={svgHero}
          alt="hero animation"
          className="absolute -z-10 mx-auto -mt-48 box-border flex justify-center px-14"
        />
        <div className="prose mx-auto flex h-screen max-w-screen-xl gap-28 px-10">
          <div className="w-7/12 px-4">
            <h2>
              Sharing and learning is becoming the driver of radical innovation
            </h2>
            <p>
              We go ahead and share ideas, develop projects together and inspire
              the construction industry. Join us and walk the path into the new
              world of open source tools and open data.
            </p>
          </div>
          <div className="w-5/12 px-14">
            <div className="flex aspect-square w-full items-center justify-center rounded-full bg-black p-2 text-center text-2xl text-white">
              Open Source in AEC
            </div>
          </div>
        </div>
        <div className="prose mx-auto max-w-screen-xl px-10 py-64">
          <div className="mx-auto mt-12 w-8/12 px-8">
            <h2>Open source in the construction industry</h2>
            <p>
              The construction industry is characterized by numerous small and
              medium-sized companies that operate locally, adhere to existing
              standards, and have limited or no budget for research and
              development – certainly not for the development of digital
              solutions. Consequently, each company attempts to independently
              invent and implement solutions with constrained resources and only
              within their silo. As a result, it becomes challenging to
              effectively address the upcoming challenges related to ambitious
              cost and sustainability goals.
            </p>
            <p>
              However, this situation can serve as an exciting starting point
              for developing user-oriented tools that transcend individual
              companies, adopting an open-source mindset.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-6/12">
              <Image src={svgIntro} alt="Intro SVG" />
            </div>
            <div className="w-6/12">
              <h3>
                77% of code used in software projects around the world
                originated from open source
              </h3>
              <p>
                Issues like low efficiency and duplication of efforts in
                transformation processes are well known in other domains as
                well. By facilitating open collaboration across companies, the
                open source movement has proven to be a powerful approach to
                enable continuous improvement also with limited resources.
              </p>
              <p>
                The movement has changed the way modern software is created.
                Rather than re-implementing basic features again and again, the
                limited number of developers within an organisation can focus on
                features that are differentiating for the company in the market.
              </p>
              <p>The key arguments to leverage open source are:</p>
              <ul className="list-none">
                <li>👉 do more with the same budget</li>
                <li>👉 reduce maintenance efforts</li>
                <li>👉 improve continuously</li>
                <li>👉 attract (and keep) talents </li>
                <li>👉 innovate faster</li>
              </ul>
            </div>
          </div>
          <div className="mx-auto w-8/12 px-8">
            <h3>Collaboration as an unfair advantage</h3>
            <p>
              By institutionalising open collaboration across companies with
              concrete output (code), open source has evolved into a movement
              that extends beyond software development. The open source approach
              doesn’t imply that everyone in the construction industry must
              learn programming and become a geek. Quite the opposite,
              collaborative development allows individuals to contribute their
              unique strengths in the most effective manner possible. For some,
              this may involve providing feedback on content while others may
              contribute in project organization, software development or
              financial support to specific projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
