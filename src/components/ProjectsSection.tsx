import Image from "next/image";
import React from "react";
import ScrollReveal from "./ScrollReveal";

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-28 space-y-24">
      {/* Project 1 – Vitaform Coach */}
      <div>
        <div
          className="pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)",
          }}
        />
        <ScrollReveal
          stagger={0.12}
          className="grid grid-cols-1 md:grid-cols-2 items-center"
        >
          {/* text */}
          <div className="relative z-10">
            <div className="mb-12">
              <p className="text-xs text-[#a48cc9]">Featured Project</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white/90">
                Vitaform – Coach Platform
              </h3>
            </div>
            <div className="relative md:-mr-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,0.25)]">
              <p className="text-sm p-4 text-white/75">
                Platform for fitness coaches to manage clients, create
                challenges, and track performance. Built with React + Tailwind
                with seamless API integration.
              </p>
              <div
                className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))",
                }}
              />
            </div>
            <div className="mt-6 ml-2 flex flex-wrap gap-3 text-white/60">
              <a
                href="https://coach.vitaform.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#a855f7] underline"
              >
                coach.vitaform.ir
              </a>
            </div>
          </div>
          {/* image */}
          <div>
            <div
              tabIndex={0}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168, 85, 247, 0.28)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden h-[360px]">
                <img
                  src="https://www.webforce.ir/uploads/soroushResume/coach.vitaform.ir_%20(1).png"
                  alt="coach-vitaform"
                  width={582}
                  height={640}
                  className="w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[55%]"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Project 2 – Vitaform User */}
      <div>
        <div
          className="pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)",
          }}
        />
        <ScrollReveal
          stagger={0.12}
          delay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 items-center"
        >
          {/* text */}
          <div className="relative md:order-2 z-10 text-right">
            <div className="mb-12">
              <p className="text-xs text-[#a48cc9]">Featured Project</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white/90">
                Vitaform – Athlete Platform
              </h3>
            </div>
            <div className="relative md:-ml-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,0.25)]">
              <p className="text-sm p-4 text-white/75">
                A platform for athletes to join challenges, track workouts, and
                monitor progress with real-time feedback. Fully responsive React
                + Tailwind UI.
              </p>
              <div
                className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))",
                }}
              />
            </div>
            <div className="mt-6 ml-2 flex justify-end text-white/60">
              <a
                href="https://vitaform.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#a855f7] underline"
              >
                vitaform.ir
              </a>
            </div>
          </div>
          {/* image */}
          <div className="relative md:order-1">
            <div
              tabIndex={0}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168, 85, 247, 0.28)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden md:h-[360px] h-[250px]">
                <img
                  src="https://www.webforce.ir/uploads/soroushResume/vitaform.ir_.png"
                  alt="vitaform-user"
                  width={582}
                  height={640}
                  className="w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[55%]"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Project 3 – Omanix */}
      <div>
        <div
          className="pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)",
          }}
        />
        <ScrollReveal
          stagger={0.12}
          delay={0.2}
          className="grid grid-cols-1 md:grid-cols-2 items-center"
        >
          {/* text */}
          <div className="relative z-10">
            <div className="mb-12">
              <p className="text-xs text-[#a48cc9]">Featured Project</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white/90">
                Omanix Corporate Website
              </h3>
            </div>
            <div className="relative md:-mr-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,0.25)]">
              <p className="text-sm p-4 text-white/75">
                Corporate website showcasing Omanix services, portfolio, and
                company info. Modern design with smooth React + Tailwind UI.
              </p>
              <div
                className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))",
                }}
              />
            </div>
            <div className="mt-6 ml-2 flex flex-wrap gap-3 text-white/60">
              <a
                href="https://omanix.co"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#a855f7] underline"
              >
                omanix.co
              </a>
            </div>
          </div>
          {/* image */}
          <div>
            <div
              tabIndex={0}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168, 85, 247, 0.28)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden h-[360px]">
                <img
                  src="https://www.webforce.ir/uploads/soroushResume/omanix.png"
                  alt="omanix"
                  width={582}
                  height={640}
                  className="w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[55%]"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Project 4 – Menu Webforce */}
      <div>
        <div
          className="pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)",
          }}
        />
        <ScrollReveal
          stagger={0.12}
          delay={0.3}
          className="grid grid-cols-1 md:grid-cols-2 items-center"
        >
          {/* text */}
          <div className="relative md:order-2 z-10 text-right">
            <div className="mb-12">
              <p className="text-xs text-[#a48cc9]">Featured Project</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white/90">
                Webforce Menu Platform
              </h3>
            </div>
            <div className="relative md:-ml-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,0.25)]">
              <p className="text-sm p-4 text-white/75">
                Online restaurant menu system with responsive design,
                interactive categories, and easy content management.
              </p>
              <div
                className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))",
                }}
              />
            </div>
            <div className="mt-6 ml-2 flex justify-end text-white/60">
              <a
                href="https://menu.webforce.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#a855f7] underline"
              >
                menu.webforce.ir
              </a>
            </div>
          </div>
          {/* image */}
          <div className="relative md:order-1">
            <div
              tabIndex={0}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168, 85, 247, 0.28)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden md:h-[360px] h-[250px]">
                <img
                  src="https://www.webforce.ir/uploads/soroushResume/menu.webforce.ir_%20(1).png"
                  alt="menu-webforce"
                  width={582}
                  height={640}
                  className="w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[55%]"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
