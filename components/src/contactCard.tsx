import React from "react";
import CountryFlag from "@/components/src/countryFlag";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export type ContactProps = {
  name: string;
  image: string;
  country: string;
  title1: string;
  title2?: string;
  externalTitle?: string;
  externalCompany?: string;
  linkedinProfile?: string;
  githubProfile?: string;
};
const ContactCard = (contactProps: ContactProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex-wrap">
        <img
          src={`images/team/${contactProps.image}`}
          alt={contactProps.name}
          className="m-6 h-24 w-24 min-w-24 rounded-full border border-slate-500 object-contain shadow-lg"
        />
        <CountryFlag
          countryCode={contactProps.country}
          className="-mt-12 ml-24 h-10 w-10 rounded-full shadow-lg"
        />
      </div>
      <div className="bg-red col-span-2 p-5">
        <div className="ml-4">
          <h2 className="my-0 text-lg font-bold">{contactProps.name}</h2>
          <p className="my-0 text-sm font-bold">{contactProps.title1}</p>
          <p className="my-0 text-sm font-bold">{contactProps.title2}</p>
          <p className="my-0 text-sm">
            {contactProps.externalTitle} @ {contactProps.externalCompany}
          </p>
          <div className="my-2 inline-flex gap-2">
            <a href={contactProps.linkedinProfile} target="_blank">
              <FaLinkedin size={24} />
            </a>
            <a href={contactProps.githubProfile} target="_blank">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
