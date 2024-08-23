import Image from "next/image";
import svgIntro from "@/public/intro.svg";

export function HeroPartial() {
  return (
    <div className="relative block w-full overflow-visible">
      <svg
        id="bg-hero"
        className="absolute left-1/2 -z-10 mx-auto -mt-16 box-border flex w-300 -translate-x-1/2 justify-center align-middle md:w-122"
        data-animate-y-space="200"
        data-animate-y-space2="12"
        viewBox="0 0 1789.13 1658.87"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          data-move="up"
          className="group1"
          style={{ transform: "translateY(-11.1695%)" } as React.CSSProperties}
        >
          <path
            fill="#fdef93"
            d="M761.52,1017l-6.28,336,175.61,41.63-1.16-318.58Z"
          ></path>
          <path
            fill="#f4d530"
            d="M598.18,1384.74,755.24,1353l175.61,41.63-155.26,28.23Z"
          ></path>
          <path
            fill="#fbe536"
            d="M761.42,1018.15,755.24,1353l-157.06,31.72,12.41-322.51Z"
          ></path>
        </g>
        <g className="group2">
          <path
            fill="#f4d530"
            d="M122.6,1397.22l197.12,36.08-124.26,25.57L0,1425.78Z"
          ></path>
          <path
            fill="#fdef93"
            d="M153.63,1082.25l-31,315,197.12,36.08,22-299.7Z"
          ></path>
          <path
            fill="#ffed00"
            d="M34.41,1122.87l119.22-40.62-31,315L0,1425.78Z"
          ></path>
        </g>
        <g
          data-move="down"
          className="group3"
          style={{ transform: "translateY(11.1695%)" } as React.CSSProperties}
        >
          <path
            fill="#f4d530"
            d="M315.14,1352.38l198.85,40-140.42,29.88L175.25,1385Z"
          ></path>
          <path
            fill="#fdef93"
            d="M340,1018.75l189.2,58.06L514,1392.34l-198.85-40Z"
          ></path>
          <path
            fill="#ffed00"
            d="M204.71,1064.85,340,1018.75l-24.9,333.62L175.25,1385Z"
          ></path>
        </g>
        <g className="group4">
          <path
            fill="#f4d530"
            d="M577.42,1380.28,734.17,1348l-198.4-47-157,36.58Z"
          ></path>
          <path
            fill="#fdef93"
            d="M567.46,625.07l180.42,81.22L734.17,1348l-198.4-47Z"
          ></path>
          <path
            fill="#ffed00"
            d="M378.72,1337.57l157-36.58,31.72-676.66L422,688.7Z"
          ></path>
        </g>
        <g
          data-move="up"
          className="group5"
          style={{ transform: "translateY(-11.1695%)" } as React.CSSProperties}
        >
          <path
            fill="#fdef93"
            d="M989.73,440.36l175,102.16L1191.24,1254l-192-60.92Z"
          ></path>
          <path
            fill="#f4d530"
            d="M999.2,1193.06l192,60.91-204.35,42L791,1241.55Z"
          ></path>
          <path
            fill="#ffed00"
            d="M791,1241.55l208.2-48.49-8.92-754-189,83.69Z"
          ></path>
        </g>
        <g className="group6">
          <path
            fill="#fdef93"
            d="M1537.82,200l158.06,133.8,93.25,797.2-169.39-82.42Z"
          ></path>
          <path
            fill="#f4d530"
            d="M1789.13,1131l-269,55.35-182.32-72.11,282-65.6Z"
          ></path>
          <path
            fill="#ffed00"
            d="M1291.35,308l246.47-108,81.92,848.53-281.9,65.66Z"
          ></path>
        </g>
        <g
          data-move="down"
          className="group7"
          style={{ transform: "translateY(11.1695%)" } as React.CSSProperties}
        >
          <path
            fill="#fdef93"
            d="M1355.84,445.85l201.32,137.24,42.52,455-211.82-100.9Z"
          ></path>
          <path
            fill="#f4d530"
            d="M1094.16,1017.8l293.7-80.58,211.82,100.9-283.61,67.46Z"
          ></path>
          <path
            fill="#ffed00"
            d="M1094.16,1017.8l293.71-80.57-32-491.38L1082.35,554.32Z"
          ></path>
        </g>
      </svg>

      <div className="prose mx-auto flex max-w-full flex-col items-end px-4 md:px-8 lg:flex-row lg:items-start lg:px-16">
        <div className="w-full lg:w-7/12">
          <h2 className="mt-1 text-4xl md:mt-8">
            Sharing and learning is becoming the driver of radical innovation
          </h2>
          <p className="text-lg font-bold md:text-xl">
            We go ahead and share ideas, develop projects together and inspire
            the construction industry. Join us and walk the path into the new
            world of open source tools and open data.
          </p>
        </div>
        <div className="px-14 lg:w-5/12">
          <div className="hidden aspect-square w-64 items-center justify-center rounded-full bg-black p-2 text-center text-xl font-bold text-white md:flex lg:w-full xl:text-2xl">
            Open Source in AEC
          </div>
        </div>
      </div>
      <div className="prose mx-auto mt-96 max-w-full px-4 md:px-8 lg:px-28">
        <div className="mx-auto lg:w-9/12">
          <h2 className="mb-6 text-xl md:text-3xl">
            Together for an open, innovative construction industry
          </h2>
          <p>
            Open innovation has given rise to many of the software innovations
            that are transforming the real estate and construction industry —
            from the cloud, to big data, to simulation technologies. But all of
            these came from outside. To spur this kind of innovation within our
            industry, we first have to create the right environment for it.
          </p>
          <p>
            Our goal is to break down barriers to collaboration — between
            stakeholders along the value chain and even within individual firms.
            We do this to enable the cross-pollination of ideas necessary to
            spark transformative solutions to shared problems.
          </p>
          <p>
            Why is this important? Enabling all stakeholders to participate in
            digital processes and operate on common, open standards is key –
            otherwise, high quality data and automated processes will not be
            possible to achieve, even with the best internal solutions.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-12">
          <div className="lg:w-5/12">
            <Image src={svgIntro} alt="Intro SVG" className="max-h-96" />
          </div>
          <div className="lg:w-7/12">
            <h3 className="md:text-2xl">
              Open Source Foundations create a neutral ground for collaboration
            </h3>
            <p>
              By facilitating open collaboration across companies, the open
              source movement has proven to be a powerful innovation engine with
              a strong focus on common standards and open tools – the modern web
              as an example can not be imagined without these.
            </p>
            <p>
              Therefore, the role model for the opensource.construction
              initiative are established open source foundations in the tech
              industry like the{" "}
              <a href="https://www.linuxfoundation.org">LINUX foundation</a>,
              the <a href="https://apache.org">APACHE foundation</a> or the{" "}
              <a href="https://www.eclipse.org">ECLIPSE foundation</a>.
            </p>
          </div>
        </div>
        <div className="mx-auto mb-12 lg:w-9/12">
          <h3 className="md:text-2xl">Growing slowly but surely</h3>
          <p>
            In the first phase, we focus on building infrastructure that is
            needed to make existing projects, communities and people visible.
          </p>
          <p>
            Then, facilitating the launch of new communities and projects is
            high on our list. Hosting these on neutral ground and enabling
            reliability and accountability can be really relevant – as long as
            there is need. Don&lsquo;t hesitate and get in touch, we would love
            to hear your thoughts on this.
          </p>
          <p>
            For now, let&lsquo;s make the most out of our projects, the
            knowledge hub and the training section!
          </p>
        </div>
      </div>
    </div>
  );
}
