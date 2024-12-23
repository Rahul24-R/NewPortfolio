import React from "react";
import Image from "next/image";
import { socialHandles, DynamicFaIconProps } from "./../models/skillsModel";
import * as Icons from "react-icons/fa";

const socials: Array<socialHandles> = [
  {
    id: 1,
    socialIconName: "FaGithub",
    socialUrl: "https://github.com/Rahul24-R",
  },
  {
    id: 2,
    socialIconName: "FaEnvelope",
    socialUrl: "mailto:rahulraghuk@gmail.com",
  },
  {
    id: 3,
    socialIconName: "FaLinkedin",
    socialUrl: "https://www.linkedin.com/in/rahul-r-8b79681a0/",
  },
  {
    id: 4,
    socialIconName: "FaWhatsapp",
    socialUrl: `https://wa.me/+918921976907?text=${encodeURIComponent(
      "Hi, I would like to connect with you!"
    )}`,
  },
];

const DynamicFaIcon: React.FC<DynamicFaIconProps> = ({ iconName }) => {
  const IconComponent = Icons[iconName];
  if (!IconComponent) {
    return <Icons.FaBeer size={30} />;
  }
  return <IconComponent size={30} />;
};

const HeroSection = () => {
  return (
    <section>
      <div className="grid sm:grid-cols-2 gap-1 m-3 min-h-screen ">
        <div className="w-full flex items-center justify-center sm:order-2">
          <Image
            src="/home/Rahul.PNG"
            alt={"ashwin"}
            width={600}
            height={400}
            className="-z-10"
          ></Image>
        </div>
        <div className="p-5 content-center sm:order-1">
          <span className="text-5xl font-bold line-clamp-2 sm:line-clamp-2 ">
            Hi, I&apos;m{" "}
            <span className="text-blue-400 text-nowrap">Rahul R</span>
          </span>
          <p className="mt-2 text-justify">
            I’m a Software Engineer with a passion for creating meaningful
            solutions. Right now at <strong>GE HealthCare</strong>, I work with
            .NET Technologies, Angular, React and AWS to develop Web applications for
            clinical usage. I love tackling problems from a broader perspective.
            To me, software engineering isn’t just about coding; it’s about
            understanding the entire journey, from development and testing to
            DevOps.
          </p>
          <div className="flex flex-row  max-w-xl mx-auto justify-between md:justify-start">
            {socials.map(({ id, socialIconName, socialUrl }) => (
              <div key={id} className="m-5 ml-0 flex items-center ">
                <a href={socialUrl} target="_blank" rel="noopener noreferrer">
                  <DynamicFaIcon iconName={socialIconName} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
