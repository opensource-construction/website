import svgTeam from "@/public/team.svg";
import svgMission from "@/public/mission.svg";
import svgActivities from "@/public/activities.svg";

import { Card } from "@/components/src/card";
import {
  Section,
  Button,
  EventsPartial,
  HeroPartial,
  ProjectsPartial,
  FAQPartial,
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
      <Section color="primary-500">
        <p className="pb-4 pt-10 text-2xl font-bold">
          We like disruptive innovation.
        </p>
        <p className="pb-10 text-4xl font-bold">
          But we also believe in empowring people to improve everyday – not in
          theory, but in practise.
        </p>
      </Section>
      <Section title="Marketplace">
        <div className="prose md:w-5/6">
          <p>
            The os.c marketplace is THE place for you to find a lot of great
            stuff.
          </p>
          <p>
            You will find open source solutions ready to be explored in detail.
          </p>
          <p>
            You will find open collaboration possibilities, posted by peers that
            are willing to take action and move forward together.
          </p>
          <p>
            And you will find heaps of talented people, ready to push the
            industry further. Step by step and never stopping.
          </p>
          <div className="pt-4">
            <Button
              target="https://www.opensource.construction/#"
              label="Want to submit a project yourself?"
              type="primary"
            />
            <Button
              target="https://www.opensource.construction/#"
              label="Want to submit a challenge?"
              type="primary"
            />
          </div>
        </div>
        <ProjectsPartial />
      </Section>
      <Section title="Events" color="primary-500">
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
      <Section title="Past Events" color="slate-300">
        <EventsPartial showPast={true} />
      </Section>
      <Section>
        <Image
          src="/images/partials/AEC-Hackathon-091.jpg"
          alt="Opening event of the Zurich AEC Hackathon"
          width="1440"
          height="900"
          className="py-12"
        />
      </Section>
      <Section color="primary-500">
        <div className="pb-24 pt-12 text-center">
          <p className="text-sm md:text-base lg:text-2xl">
            Our mission at opensource.construction
          </p>
          <h3 className="font-bold lg:text-3xl">
            Making collaboration in the AECO tech communicty SUCCESSFUL
          </h3>
          <div className="w-full">
            <Image
              src={svgMission}
              alt="Users - Ecosystem - Developers"
              width="750"
              height="250"
              className="m-auto"
            />
          </div>
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
            The role model for the opensource.construction initiative are
            established open source foundations in the tech industry like the{" "}
            <a href="https://www.linuxfoundation.org">LINUX foundation</a>, the{" "}
            <a href="https://apache.org">APACHE foundation</a> or the{" "}
            <a href="https://www.eclipse.org">ECLIPSE foundation</a>.
          </p>
          <p>
            But you don&lsquo;t get there just like that. It takes time and
            careful steps to continously grow and improve.
          </p>
          <p>
            In the first phase, we focus on building infrastructure that is
            needed to push open source and open collaboration in our industry.
          </p>
          <p>
            We call it &ldquo;Innovation Infrastructure as a service&rdquo;. It
            is there for you to make use of it and strive on your journey
            towards empowered people throughout your organisation.
          </p>
        </div>
        <Card
          color="slate-300"
          title='opensource.construction delivers "innovation infrastructure as a service"'
        >
          <div className="w-full">
            <Image
              src={svgActivities}
              alt="What we do"
              width="1050"
              height="250"
              className="m-auto"
            />
          </div>
        </Card>
      </Section>
      <Section color="slate-300" fullWidth={true}>
        <div className="flex flex-col gap-0 pb-24 lg:flex-row lg:gap-24">
          <div className="flex-1">
            <Image
              src="/images/partials/Open-Source-Day-069.jpg"
              alt="Opening event of the Zurich AEC Hackathon"
              width="1024"
              height="600"
              className="py-12"
            />
          </div>
          <div className="prose flex-1 px-4 md:px-10">
            <a id="who-is-behind-the-initiative"></a>
            <h3 className="md:text-3xl">Who is behind the initiative?</h3>
            <p>
              opensource.construction is a non-profit organisation based in
              Zurich, Switzerland.
            </p>
            <p>
              The initiative was launched by Maximilian Vomhof in 2022 - out of
              frustration with the current status quo of innovation in the
              construction industry and with a strong passion for open
              collaboration.
            </p>
            <p>
              Today, a group of committed individuals makes sure it grows slowly
              but surely – always with a strong focus on delivering value to the
              community of software developers, digital doers and established
              organisations that seek to thrive.
            </p>
            <p>
              We are open to anyone who wants to join or contribute – please
              don&lsquo;t hesitate to get in touch!
            </p>
            <Button
              type="primary"
              target="https://drive.google.com/file/d/14pFi9vAwXEtnuklz4I-W-e99vH0Y1QoG/view?usp=sharing"
              label="More about opensource.construction"
            />
            <Button
              type="primary"
              target="https://opencollective.com/opensource-construction"
              label="Become a supporter"
            />
          </div>
        </div>
      </Section>
      <Section color="primary-500" fullWidth={true}>
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
      <Section
        title="Are you interested in the role of open-source in the building
      industry? Get in touch with us today!"
      ></Section>
      <Section color="primary-500">
        &nbsp;
        <div className="py-12">
          <Button target={discordLink} type="primary">
            Talk to us on discord
          </Button>
        </div>
      </Section>
      {/* Tree shaking workaround */}
      <div className="bg-white"></div>
      <div className="bg-primary-500"></div>
      <div className="bg-slate-300"></div>
    </div>
  );
}
