import svgTeam from "@/public/team.svg";
import { Card } from "@/components/src/card";
import {
  Section,
  Button,
  EventsPartial,
  HeroPartial,
  ProjectsPartial,
  FAQPartial,
  Form,
} from "@opensource-construction/components";
import Image from "next/image";

export default function Home() {
  const discordLink = process.env.DISCORD_LINK || "";

  return (
    <div>
      <Section fullWidth={true}>
        <HeroPartial />
      </Section>
      <Section>
        <FAQPartial />
      </Section>
      <Section title="Projects">
        <div className="prose md:w-5/6">
          <p>
            The exciting thing about the open source movement is the diversity
            of possible projects.
            <br />
            From small, local projects to large, transnational projects, from
            simple database solutions to complex software projects. As long as
            the mindset is right, there is something for everyone – from
            analogue dinosaurs to average users to absolute experts.
          </p>
          <p>
            At opensource.construction, we host and support projects in
            different ways.
          </p>
          <p>
            Sandbox Projects are experimental projects that are not yet widely
            tested in production. Incubating Projects are already used
            successfully in production by a small number of users. Graduated
            Projects considered stable, widely adopted and production ready,
            attracting hundreds of users and contributors
          </p>
          <p>
            Click on the projects to get more details about the projects, the
            authors and their communication channels.
          </p>
          <div className="pt-4">
            <Button
              target="https://www.opensource.construction/#"
              label="Want to submit a project yourself?"
              type="primary"
            />
            <Button
              target="https://wiki.osarch.org/index.php?title=AEC_Free_Software_directory"
              label="AEC Free Software directory"
              type="primary"
            />
          </div>
        </div>
        <ProjectsPartial />
      </Section>
      <Section title="Events" color="primary">
        <div>
          <p>
            Talk. Share. Do.
            <br />
            Knowing what works and exchanging ideas with others is often the
            starting point for exciting projects. Therefore,
            opensource.construction organises its own events to facilitate this
            exchange – find them here + further events that we attend as well.
          </p>
        </div>
        <EventsPartial />
      </Section>
      <Section title="Past Events" color="gray-500">
        <EventsPartial showPast={true} />
      </Section>
      <Section>
        <Image
          src="/images/partials/AEC-Hackathon-091.jpg.webp"
          alt="Opening event of the Zurich AEC Hackathon"
          width="1024"
          height="600"
          className="py-12"
        />
      </Section>
      <Section color="primary">
        <div className="pb-24 pt-12 text-center">
          <p className="text-sm md:text-base lg:text-2xl">
            Our mission at opensource.construction
          </p>
          <h3 className="font-bold lg:text-3xl">
            Making collaboration in the AECO tech communicty SUCCESSFUL
          </h3>
        </div>
        <div className="pb-12">
          <Button target={discordLink} type="primary">
            Any questions? We are here to help!
          </Button>
        </div>
      </Section>
      <Section fullWidth={true}>
        <div className="prose px-4 py-8 md:px-10 lg:px-28">
          <h3 className="md:text-3xl ">
            Together for an open, innovative construction industry.
          </h3>
          <p>
            Open innovation has given rise to many of the software innovations
            that are transforming the real estate and construction industry—from
            the cloud, to big data, to simulation technologies. But all of these
            came from outside. To spur this kind of innovation within our
            industry, we first have to create the right environment for it. Our
            goal is to break down barriers to collaboration—between stakeholders
            along the value chain and even within individual firms—to enable the
            cross-pollination of ideas necessary to spark transformative
            solutions to shared problems.
          </p>
          <p>
            As a non-profit organisation, our Members’ contributions are the
            fuel that help us garner contributions, promote adoption of our
            projects and enable faster innovation in the industry through
            collaborative resolution of AECO-wide challenges.
          </p>
          <p>
            Accordingly, the initiative’s activities revolve around the
            following initiatives:
          </p>
        </div>
        <Card
          color="gray-500"
          title="Making the potential of open source tangible"
        >
          <p>
            The concept of open source has many facets. The initiative organises
            events and communicates via website and social media with the aim of
            making the potential behind open source code, tools and mindset
            tangible for all stakeholders in the construction industry.
          </p>
        </Card>
        <Card color="gray-500" title="Connecting people">
          <p>
            People with ideas are looking for people to help them implement
            them. Because they lack technical know-how. Because they lack the
            finishing touches for the idea. Because they lack resources and know
            that it is easier to do it together than alone.
          </p>
          <p>
            For this reason, opensource.construction facilitates networking
            among its members, other interested parties, experts, sponsors,
            private companies, public institutions, other initiatives, and
            political figures.
          </p>
        </Card>
        <Card color="gray-500" title="Enabling open projects">
          <p>
            An open source solution is only a good solution if it is used. The
            main goal of the initiative is to turn ideas into concrete
            solutions.
          </p>
          <p>
            To this end, the initiative provides the technical and
            organisational infrastructure that is needed to set up a project
            that often spans several companies. Another important aid: access to
            funding that facilitates implementation.
          </p>
        </Card>
      </Section>
      <Section color="gray-500" fullWidth={true}>
        <div className="flex flex-col gap-0 pb-24 lg:flex-row lg:gap-24">
          <div className="flex-1">
            <Image
              src="/images/partials/Open-Source-Day-069.jpg.webp"
              alt="Opening event of the Zurich AEC Hackathon"
              width="1024"
              height="600"
              className="py-12"
            />
          </div>
          <div className="prose flex-1 px-4 md:px-10">
            <h3 className="md:text-3xl">Who is behind the initiative?</h3>
            <p>
              opensource.construction is a non-profit organisation based in
              Zurich, Switzerland, with active members across the globe.
            </p>
            <p>
              Architects, urban developers, investors, engineers and planners as
              well as computational designers, software engineers and tech geeks
              are behind the opensource.construction initiative. Together, they
              have the goal of advancing the topic of open source in the
              construction industry and developing collaborative projects in
              participatory processes. The community meets regularly digitally
              and physically to discuss and further develop concrete approaches.
            </p>
          </div>
        </div>
      </Section>
      <Section color="primary" fullWidth={true}>
        <h2 className="px-4 pt-10 text-xl font-bold md:px-10 md:text-3xl">
          Our current core team
        </h2>
        <Image
          src={svgTeam}
          alt="Opening event of the Zurich AEC Hackathon"
          width="1024"
          height="600"
          className="py-12"
        />
      </Section>
      <Section title="Community Partner">
        <Card title="OSArch" type="partner">
          <Image
            src="/osarch.webp"
            alt="OpenData Logo"
            width={285}
            height={133}
          />
        </Card>
        <Card title="Opendata.ch" type="partner">
          <Image
            src="/opendata.webp"
            alt="OpenData Logo"
            width={285}
            height={133}
          />
        </Card>
        <Card title="CH Open" type="partner">
          <Image
            src="/ch-open.webp"
            alt="CH Open Logo"
            width={285}
            height={133}
          />
        </Card>
      </Section>
      <Section>
        <div className="prose">
          <h2>
            Are you interested in the role of open-source in the building
            industry? Get in touch with us today!
          </h2>
          <Form route="/">Hi</Form>
        </div>
      </Section>
      <Section color="primary">
        &nbsp;
        <div className="py-12">
          <Button target={discordLink} type="primary">
            Talk to us on discord
          </Button>
        </div>
      </Section>
      {/* Tree shaking workaround */}
      <div className="bg-osc-white"></div>
      <div className="bg-osc-primary"></div>
      <div className="bg-osc-gray-500"></div>
    </div>
  );
}
