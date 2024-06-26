import React from 'react';
import CountryFlag from "@/components/src/countryFlag";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export type ContactProps = {
    name: string,
    image: string,
    country: string,
    title1: string,
    title2?: string,
    externalTitle?: string,
    externalCompany?: string,
    linkedinProfile?: string,
    githubProfile?: string
}
const ContactCard = (contactProps: ContactProps) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="flex-wrap">

                <img src={`images/team/${contactProps.image}`} alt={contactProps.name}
                     className="w-24 h-24 m-6 rounded-full border border-slate-500 shadow-lg"/>
                <CountryFlag countryCode={contactProps.country}
                             className="w-10 h-10 rounded-full ml-24 -mt-12 shadow-lg"/>
            </div>
            <div className="bg-red col-span-2 p-5">
                <div className="ml-4">
                    <h2 className="text-lg font-bold my-0">{contactProps.name}</h2>
                    <p className="text-sm font-bold my-0">{contactProps.title1}</p>
                    <p className="text-sm font-bold my-0">{contactProps.title2}</p>
                    <p className="text-sm my-0">{contactProps.externalTitle} @ {contactProps.externalCompany}</p>
                    <div className="inline-flex gap-2 my-2">
                        <a href={contactProps.linkedinProfile} target="_blank"><FaLinkedin size={24}/></a>
                        <a href={contactProps.githubProfile} target="_blank"><FaGithub size={24}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;