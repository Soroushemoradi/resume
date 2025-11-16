"use client";

import Image from "next/image";
import React from "react";
import { FaBuilding } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import ScrollReveal from "./ScrollReveal";

const HereSection = () => {
  return (
    <section id="home" className="relative pt-36 pb-24">
      <div className="mt-12 md:mt-24">
        {/* avatar and headline */}
        <ScrollReveal
          stagger={0.12}
          className="flex flex-col md:flex-row gap-8 items-start md:items-center"
        >
          {/* avatar + hello */}
          <div className="relative flex justify-center md:justify-end">
            <div className="pointer-events-none absolute -inset-12 md:-inset-24 rounded-full bg-linear-to-b from-[#7c3aed] via-[#6d28d9]/30 to-transparent blur-3xl opacity-90"></div>
            <div className="relative">
              <Image
                src="/images/avatar.png"
                alt="avatar image"
                width={240}
                height={240}
                className="relative"
                priority
              />

              {/* small greeting */}
              <div className="select-none pointer-events-none absolute -top-8 -right-6 md:-top-16 md:-right-40 text-xs text-white/70">
                <div className="relative flex items-center justify-end">
                  <div className="relative w-16 h-6 md:w-24 md:h-16">
                    <Image
                      src="/images/hero-arrow.png"
                      alt="arrow image"
                      fill
                      className="object-contain scale-x-100 -rotate-6"
                      priority
                    />
                  </div>
                  <div className="-mt-6 md:-mt-10 shrink-0">
                    <span>Hello! I am </span>
                    <span className="text-[#a78bfa]">Soroush Moradi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* headline */}
          <div className="md:pl-2 text-center md:text-left">
            <p className="text-sm md:text-base text-white/60 mb-2">
              A Frontend Developer who
            </p>

            <h1 className="text-4xl sm:text-5xl font-normal tracking-tight leading-[1.15]">
              <span className="block">builds modern</span>
              <span className="block">
                and scalable{" "}
                <span className="relative inline-block align-baseline">
                  <span className="relative z-10 text-[#7127BA]">
                    web interfaces
                  </span>
                  <span className="pointer-events-none absolute -inset-x-2 -inset-y-2 translate-y-1 -z-10 rotate-12">
                    <Image
                      src="/images/ellipse.png"
                      alt="ellipse"
                      fill
                      className="object-contain"
                      priority
                    />
                  </span>
                </span>
                .
              </span>
            </h1>

            <p className="mt-2 text-[10px] md:text-xs text-white/50 max-w-md md:max-w-lg mx-auto md:mx-0">
              Focused on creating clean, responsive, and maintainable UI using
              React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </ScrollReveal>

        {/* role and description */}
        <ScrollReveal delay={0.15} className="mt-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
            <Typewriter
              words={[
                "I'm a Frontend Developer.",
                "I'm a React Developer.",
                "I build modern UI.",
              ]}
              typeSpeed={65}
              deleteSpeed={35}
              delaySpeed={600}
              cursor
              cursorStyle="|"
              loop
            />
          </h2>

          <p className="mt-3 text-white/80 leading-7">
            Currently, I'm a Frontend Developer at{" "}
            <span className="inline-flex items-center gap-1 text-[#a78bfa]">
              <FaBuilding className="size-4" aria-hidden />
              Shabakeh Afzar,
            </span>
            where I work on national-scale platforms, UI optimization, and
            modernizing frontend architecture.
          </p>

          <p className="mt-6 text-white/70 leading-7">
            I specialize in creating intuitive user interfaces, improving
            performance, and building clean, maintainable codebases using React, next js
            TypeScript, and Tailwind CSS.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HereSection;
