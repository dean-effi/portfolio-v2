import myImage from "../assets/me.jpeg";
import LinkedinIcon from "../assets/icons/linkedin.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";
import XIcon from "../assets/icons/x.svg?react";

export default function About() {
  return (
    <section
      id="about"
      aria-label="about"
      className="mx-auto min-h-screen w-[305px] py-7 pt-16 text-center sm:w-[330px] md:w-full lg:pt-12"
    >
      <h1 className="text-[122px] leading-30 font-extrabold sm:text-[135px] lg:text-[185px] lg:leading-38 xl:text-[240px] xl:leading-44 2xl:text-[290px] 2xl:leading-56">
        Dean Effi
      </h1>
      <p className="text-cstm-purple py-5 font-bold">
        I am an inquisitive and a passionate web developer who is
        always eager to learn.
      </p>
      <div className="mx-auto justify-center gap-30 md:w-[528px] lg:mt-26 lg:flex lg:w-full">
        <div className="relative order-1 m-auto w-[236px] self-start sm:w-[328px] md:w-[342px] lg:m-0 lg:w-[332px] xl:w-[427px] 2xl:w-[470px]">
          <div className="bg-cstm-purple absolute top-0 h-full w-full rounded-4xl opacity-35 transition hover:opacity-0"></div>
          <img
            className="h-full w-full rounded-4xl"
            src={myImage}
            width={300}
            height={200}
            alt="portrait of me"
          />
        </div>
        <div className="order-0 content-between pt-[32px] sm:pt-10 lg:grid lg:w-[333px] lg:pt-0 xl:w-[430px] 2xl:w-[470px]">
          <p className="m-auto pb-[32px] text-left leading-7.5 md:pb-[36px] lg:m-0 lg:w-[37ch] lg:leading-8.5 2xl:text-2xl 2xl:leading-9.5">
            I enjoy building fast, clean, and functional web apps. I
            work mainly with React, TypeScript, Express, and MongoDB,
            and I’m always looking to improve how things work.
          </p>
          <div className="flex items-center justify-between">
            <a
              href="#contact"
              className="bg-cstm-purple work-sans 2xl:py-2.8 rounded-full px-4 py-2.5 font-bold text-violet-950 hover:bg-[#6F6CE9] active:bg-violet-950 active:text-gray-50 md:px-4.5 md:tracking-wide xl:text-2xl 2xl:px-5 2xl:text-[28px]"
            >
              CONTACT
            </a>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/dean-effi"
                aria-label="to my github"
                target="_blank"
              >
                <GithubIcon className="hover:fill-cstm-purple w-10 cursor-pointer fill-gray-50 transition-all hover:scale-110 xl:w-14" />
              </a>
              <a
                href="https://www.linkedin.com/in/dean-effi-249145271/"
                aria-label="to my Linkedin"
                target="_blank"
              >
                <LinkedinIcon className="hover:fill-cstm-purple w-10 cursor-pointer fill-gray-50 transition-all hover:scale-110 xl:w-14" />
              </a>
              <a
                href="https://x.com/dean_effi"
                aria-label="to my x (twitter) profile"
                target="_blank"
              >
                <XIcon className="hover:fill-cstm-purple w-10 cursor-pointer fill-gray-50 transition-all hover:scale-110 xl:w-14" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
