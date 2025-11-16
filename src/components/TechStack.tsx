import Image from "next/image";
import React from "react";
import ScrollReveal from "./ScrollReveal";

const TechStack = () => {
  return (
    <section id="lab" className="relative py-28">
      <ScrollReveal stagger={0.08} className="text-center">
        {/* Top text */}
        <p className="text-white/70 mb-6">
          These are the <span className="text-[#a855f7]">technologies</span> I
          work with
        </p>

        <p className="text-white/50 text-sm mb-16">
          My daily toolkit for building modern, fast, and scalable web
          interfaces using React, Next.js, and TypeScript.
        </p>

        {/* Image */}
        <div className="relative max-w-4xl mx-auto w-full">
          <Image
            src="/images/skills-section.png"
            alt="tech stack"
            width={1280}
            height={920}
            className="w-full h-auto"
            priority
          />
        </div>
      </ScrollReveal>
    </section>
  );
};

export default TechStack;
