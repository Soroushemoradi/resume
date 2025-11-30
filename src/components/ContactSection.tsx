import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <ScrollReveal stagger={0.08}>
        <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-7">
          Contact
        </h3>

        <p className="text-sm text-white/60 max-w-xl">
          I'm always open to discussing new projects, collaborations, or job
          opportunities. If you have something in mind, feel free to reach out.
        </p>

        {/* Email */}
        <div className="mt-6 text-white/80">
          <Link
            href="mailto:moradi.soroush1381@gmail.com"
            className="hover:text-[#a855f7]"
          >
            moradi.soroush1381@gmail.com
          </Link>
        </div>
        <div className="mt-6 text-white/80  w-25">
          <p
            className="hover:text-[#a855f7]"
          >
            09353599991
          </p>
        </div>

        {/* Social links */}
        <div className="mt-6 flex items-center gap-4 text-white/80">
          {/* GitHub */}
          <Link
            href="https://github.com/Soroushemoradi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a855f7]"
          >
            <FaGithub className="size-5" />
          </Link>

          {/* Instagram (اگر داشتی لینک بده) */}
          <Link href="#" className="hover:text-[#a855f7]">
            <FaInstagram className="size-5" />
          </Link>

          {/* LinkedIn (اگر داشتی لینک بده) */}
          <Link href="#" className="hover:text-[#a855f7]">
            <FaLinkedin className="size-5" />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ContactSection;
