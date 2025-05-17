import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import MailIcon from "@/assets/icons/email.svg";

export const HeroSection = () => {
  return (
    <div
      id="home"
      className="py-20 md:py-32 lg:py-40 relative z-0 overflow-x-clip"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* Stars */}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="Person peeking from behind laptop"
            className="size-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Sahethi Depuru Guru</div>
          </div>
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/sahethi-depuru-guru/"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 hover:opacity-100 transition-opacity"
            >
              <LinkedinIcon className="size-6 fill-white/60 hover:fill-white transition-colors" />
            </a>
            <a
              href="https://github.com/Sahethi"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 text-white/60 hover:text-white transition-colors"
            >
              <GithubIcon className="size-6" />
            </a>
            <a
              href="mailto:dgsahethi@gmail.com"
              className="z-10  hover:opacity-100 transition-opacity"
            >
              <MailIcon className="size-6 fill-white/60 hover:fill-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl text-center mt-8 tracking-wide">
          Software Engineer
        </h1>
        <h1 className="font-serif text-3xl md:text-4xl text-center mt-2 tracking-wide">
          React + Java + Spring Boot
        </h1>
        <h1 className="font-serif text-3xl md:text-4xl text-center mt-2 tracking-wide">
          Wells Fargo
        </h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">
          I am a Software Engineer at Wells Fargo, passionate about distributed
          systems, aiming to design scalable systems. As an aspiring systems
          architect, I want to combine hands-on engineering with systems
          thinking, supported by research in cybersecurity and parallel
          computing.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <a
          href="#project"
          className="z-10 inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
        >
          <div className="font-semibold">Explore My Work</div>
          <ArrowDown className="size-4" />
        </a>
        <a
          href="https://drive.google.com/file/d/1_8XVOugvdSxWaQSMwnzjeqwcpQ_KKlWb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className=" z-10 inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-white/90 transition-colors cursor-pointer"
        >
          <span className="">🔍</span>
          <span className="font-semibold">View Resume</span>
        </a>
      </div>
    </div>
  );
};
