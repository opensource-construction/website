import svgMission from "@/public/mission.svg";
import {
    Button,
    EventsPartial,
    Form,
    HeroPartial,
    ProjectsPartial,
    Section,
} from "@opensource-construction/components";
import Image from "next/image";
import team from "../content/team.json";
import partners from "../content/partners.json";

import { saveForm } from "./actions";
import ContactCard from "@/components/src/contactCard";
import PartnerCard from "@/components/src/partnerCard";

export default function Home() {
    const saveFormWithRoute = saveForm.bind(null, "/");
    const discordLink = process.env.DISCORD_LINK || "";

    return (
        <div className="mt-28 md:mt-0">
            <Section fullWidth={true}>
                <HeroPartial/>
            </Section>
            {/* <Section>
        <FAQPartial />
      </Section> */}
            <Section color="primary-500">
                <p className="pb-4 pt-10 text-2xl font-bold">
                    We like disruptive innovation.
                </p>
                <p className="pb-10 text-4xl font-bold">
                    But we also believe in empowering people to improve everyday – not in
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
                            target="/#contact-us"
                            label="Want to submit a project yourself?"
                            type="primary"
                        />
                        <Button
                            target="/#contact-us"
                            label="Want to submit a challenge?"
                            type="primary"
                        />
                    </div>
                </div>
                <ProjectsPartial/>
            </Section>
            <Section title="Events" color="primary-500">
                <div>
                    <p>
                        Talk. Share. Do.
                        <br/>
                        Knowing what works and exchanging ideas with others is often the
                        starting point for exciting projects. Therefore,
                        opensource.construction organises its own events to facilitate this
                        exchange – find them here + further events that we attend as well.
                    </p>
                </div>
                <EventsPartial/>
            </Section>
            <Section title="Past Events" color="slate-300">
                <EventsPartial showPast={true}/>
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
                        Making collaboration in the AECO tech community SUCCESSFUL
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
                            but surely – always with a strong focus on delivering value to the
                            community of software developers, digital doers and established
                            organisations that seek to thrive.
                        </p>
                        <p>
                            We are open to anyone who wants to join or contribute – please
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
                <h2 className="px-4 py-10 text-xl font-bold md:px-10 md:text-3xl">
                    Our current core team
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {team.map((member) => (
                        <ContactCard key={member.image} {...member}/>
                    ))}
                </div>
            </Section>
            <Section>
                <div className="pb-24 pt-12 text-center">
                    <p className="text-sm md:text-base lg:text-2xl">
                        Our Partners
                    </p>
                    <h3 className="font-bold lg:text-2xl my-10">
                        Community Partners
                    </h3>
                    <div className="flex flex-wrap justify-center">
                        {partners.filter(partner => partner.type === "community").map((partner) => (
                            <PartnerCard key={partner.logo} {...partner} />
                        ))};
                    </div>

                    <h3 className="font-bold lg:text-2xl my-10">
                        Industry Partners
                    </h3>
                    <div className="flex flex-wrap justify-center">
                        {partners.filter(partner => partner.type === "industry").map((partner) => (
                            <PartnerCard key={partner.logo} {...partner} />
                        ))};
                    </div>
                </div>
            </Section>
            <Section>
                <div className="prose">
                    <a id="contact-us"></a>
                    <h2>
                        Are you interested in the role of open-source in the building
                        industry? Get in touch with us today!
                    </h2>
                    <Form action={saveFormWithRoute}/>
                </div>
                &nbsp;
            </Section>
            <Section color="primary-500">
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
