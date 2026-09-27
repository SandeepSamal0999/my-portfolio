"use client";

import {
  ArrowUpRight,
  Code2,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Zap,
} from "lucide-react";

const skills = [
  "React.js",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Redux",
  "React Query",
  "HTML5",
  "CSS3",
  "Material UI",
  "Ant Design",
  "Jest",
  "React Testing Library",
  "Webpack",
  "Docker",
  "GitHub",
  "Postman",
  "WebRTC",
  "JsSIP",
];

const experience = [
  {
    company: "Promantia Business Solutions",
    role: "Senior Technical Consultant",
    date: "Sep 2023 — Present",
    points: [
      "Owned frontend development for scalable web applications using React.js and TypeScript.",
      "Contributed to a reported 20% improvement in application performance through frontend optimization.",
      "Implemented Jest and React Testing Library automation, contributing to a reported 15% reduction in software bugs.",
      "Led weekly code reviews and mentored 7–8 junior developers.",
    ],
  },
  {
    company: "SoftSuave Technologies",
    role: "Executive Software Engineer",
    date: "May 2021 — Jun 2023",
    points: [
      "Built responsive React interfaces with UX/UI designers, contributing to a reported 25% increase in user engagement.",
      "Resolved critical production issues with an average turnaround of 2 hours.",
      "Mentored junior developers on React.js and TypeScript.",
    ],
  },
  {
    company: "Prayogik Technologies",
    role: "Software Engineer Intern",
    date: "Sep 2020 — Apr 2021",
    points: [
      "Supported development and testing of new product features.",
      "Helped reduce bug resolution time by 20%.",
      "Researched and integrated 3 emerging technologies into development workflows.",
    ],
  },
];

const projects = [
  {
    icon: "☎",
    type: "REALTIME CALLING PLATFORM",
    name: "Numintec",
    description:
      "Browser-based calling application with incoming, outgoing, missed-call and auto-dialer workflows.",
    stack: ["React.js", "Redux", "JsSIP", "WebRTC", "Ant Design"],
    metric: "30% reported reduction in call setup time",
  },
  {
    icon: "◫",
    type: "EMPLOYEE PRODUCTIVITY TRACKER",
    name: "Bustlespot",
    description:
      "Productivity tracking application with reporting and downloadable performance data for administrators and team leads.",
    stack: ["React.js", "TypeScript", "React Query", "Redux", "Material UI"],
    metric: "15% reported reduction in idle time",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07070a] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-[-200px] top-[200px] h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[130px]" />

        <div className="absolute right-[-150px] top-[500px] h-[400px] w-[400px] rounded-full bg-lime-400/10 blur-[130px]" />

        <div
          className="
            absolute inset-0 opacity-[0.035]
            bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            bg-[size:48px_48px]
          "
        />
      </div>

      {/* NAVBAR */}

      <nav className="mx-auto w-[calc(100%-40px)] max-w-6xl pt-6">
        <div
          className="
          flex items-center justify-between
          rounded-full
          border border-white/[0.08]
          bg-white/[0.035]
          px-5 py-3
          backdrop-blur-xl
        "
        >
          <a href="#" className="text-xl font-black tracking-tight">
            S<span className="text-lime-300">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="mailto:sandeep.samal0999@gmail.com"
            className="
              flex items-center gap-2
              rounded-full
              bg-lime-300
              px-4 py-2.5
              text-sm font-bold
              text-black
              transition
              hover:-translate-y-0.5
              hover:bg-lime-200
            "
          >
            Let's talk
            <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>

      {/* HERO */}

      <section
        className="
        relative mx-auto flex min-h-[78vh]
        w-[calc(100%-40px)]
        max-w-6xl
        items-center
        py-24
      "
      >
        <div className="max-w-4xl">
          <div
            className="
            mb-6 flex items-center gap-2
            text-xs font-bold uppercase
            tracking-[0.18em]
            text-lime-300
          "
          >
            <Sparkles size={14} />
            Senior Frontend Engineer
          </div>

          <h1
            className="
            text-[clamp(3.5rem,8vw,6.8rem)]
            font-black
            leading-[0.92]
            tracking-[-0.065em]
          "
          >
            I build interfaces
            <br />
            <span className="text-zinc-500">people enjoy using.</span>
          </h1>

          <p
            className="
            mt-8 max-w-2xl
            text-lg leading-8
            text-zinc-400
          "
          >
            Frontend-focused Software Engineer with 5+ years of experience
            building scalable web applications using React.js, TypeScript,
            JavaScript, Redux, Next.js and modern UI libraries.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="
                flex items-center gap-2
                rounded-full
                bg-lime-300
                px-6 py-3
                text-sm font-bold
                text-black
                transition
                hover:-translate-y-1
                hover:bg-lime-200
              "
            >
              Explore my work
              <ArrowUpRight size={16} />
            </a>

            <a
              href="mailto:sandeep.samal0999@gmail.com"
              className="
                flex items-center gap-2
                rounded-full
                border border-white/10
                bg-white/[0.03]
                px-6 py-3
                text-sm font-bold
                text-white
                transition
                hover:-translate-y-1
                hover:border-lime-300/30
              "
            >
              <Mail size={16} />
              Get in touch
            </a>
          </div>

          <div
            className="
            mt-9 flex flex-wrap
            gap-6 text-sm text-zinc-500
          "
          >
            <span className="flex items-center gap-2">
              <MapPin size={15} />
              Bangalore, India
            </span>

            <span className="flex items-center gap-2">
              <Code2 size={15} />
              React · TypeScript · Next.js
            </span>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section
        className="
        mx-auto w-[calc(100%-40px)]
        max-w-6xl pb-28
      "
      >
        <div
          className="
          grid overflow-hidden
          rounded-3xl
          border border-white/[0.08]
          bg-white/[0.025]
          md:grid-cols-3
        "
        >
          <Stat number="5+" text="Years experience" />

          <Stat number="7–8" text="Developers mentored" />

          <Stat number="2h" text="Avg. production issue turnaround" />
        </div>
      </section>

      {/* EXPERIENCE */}

      <section
        id="work"
        className="
          mx-auto w-[calc(100%-40px)]
          max-w-6xl
          pb-32
        "
      >
        <SectionHeading
          eyebrow="Experience"
          title="Building, shipping, improving."
        />

        <div className="mt-14">
          {experience.map((item, index) => (
            <div
              key={item.company}
              className="relative grid md:grid-cols-[180px_1fr]"
            >
              {/* Timeline */}

              <div className="relative hidden md:block">
                <div
                  className="
                  absolute left-[5px]
                  top-2 bottom-0
                  w-px
                  bg-gradient-to-b
                  from-lime-300
                  via-white/10
                  to-transparent
                "
                />

                <div
                  className="
                  absolute left-0 top-2
                  h-3 w-3
                  rounded-full
                  border-2 border-lime-300
                  bg-[#07070a]
                "
                />
              </div>

              {/* Content */}

              <div
                className="
                mb-16
                border-b border-white/[0.06]
                pb-12
              "
              >
                <div
                  className="
                  flex flex-col
                  justify-between
                  gap-3
                  md:flex-row
                "
                >
                  <div>
                    <h3
                      className="
                      text-2xl font-bold
                    "
                    >
                      {item.role}
                    </h3>

                    <p
                      className="
                      mt-1 font-semibold
                      text-lime-300
                    "
                    >
                      {item.company}
                    </p>
                  </div>

                  <span
                    className="
                    text-sm text-zinc-500
                  "
                  >
                    {item.date}
                  </span>
                </div>

                <ul
                  className="
                  mt-6 max-w-3xl
                  space-y-3
                  text-[15px]
                  leading-7
                  text-zinc-400
                "
                >
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-lime-300" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className="
          mx-auto w-[calc(100%-40px)]
          max-w-6xl pb-32
        "
      >
        <SectionHeading eyebrow="Toolkit" title="The stack I work with." />

        <div
          className="
          mt-12 flex flex-wrap gap-2.5
        "
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border border-white/[0.08]
                bg-white/[0.035]
                px-4 py-2.5
                text-sm text-zinc-300
                transition
                hover:border-lime-300/30
                hover:bg-lime-300/5
                hover:text-lime-200
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="
          mx-auto w-[calc(100%-40px)]
          max-w-6xl pb-32
        "
      >
        <SectionHeading
          eyebrow="Selected work"
          title="Projects with real product problems."
        />

        <div
          className="
          mt-12 grid gap-5
          md:grid-cols-2
        "
        >
          {projects.map((project) => (
            <article
              key={project.name}
              className="
                group relative overflow-hidden
                rounded-3xl
                border border-white/[0.08]
                bg-gradient-to-br
                from-white/[0.055]
                to-white/[0.015]
                p-8
                transition duration-300
                hover:-translate-y-2
                hover:border-lime-300/30
              "
            >
              <div
                className="
                absolute -right-24 -top-24
                h-48 w-48
                rounded-full
                bg-lime-300/10
                blur-3xl
                transition
                group-hover:bg-lime-300/20"
              />

              <div
                className="
                relative
              "
              >
                <div
                  className="
                  mb-10 text-4xl
                "
                >
                  {project.icon}
                </div>

                <div
                  className="
                  text-xs font-bold
                  uppercase tracking-[0.18em]
                  text-lime-300
                "
                >
                  {project.type}
                </div>

                <h3
                  className="
                  mt-3 text-3xl
                  font-black tracking-tight
                "
                >
                  {project.name}
                </h3>

                <p
                  className="
                  mt-4 leading-7
                  text-zinc-400
                "
                >
                  {project.description}
                </p>

                <div
                  className="
                  mt-6 flex flex-wrap gap-2
                "
                >
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border border-white/[0.08]
                        px-3 py-1.5
                        text-xs
                        text-zinc-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="
                  mt-7 border-t
                  border-white/[0.08]
                  pt-5
                  text-sm font-semibold
                  text-zinc-300
                "
                >
                  <span
                    className="
                    mr-2 inline-flex
                    text-lime-300"
                  >
                    <Zap size={15} />
                  </span>

                  {project.metric}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section
        id="contact"
        className="
          mx-auto w-[calc(100%-40px)]
          max-w-6xl pb-20
        "
      >
        <div
          className="
          relative overflow-hidden
          rounded-[2rem]
          border border-white/[0.08]
          bg-gradient-to-br
          from-lime-300/[0.08]
          via-white/[0.025]
          to-violet-500/[0.08]
          px-6 py-20
          text-center
          md:px-12
        "
        >
          <div
            className="
            absolute left-1/2 top-[-180px]
            h-[350px] w-[350px]
            -translate-x-1/2
            rounded-full
            bg-lime-300/10
            blur-[100px]
          "
          />

          <div className="relative">
            <div
              className="
              text-xs font-bold
              uppercase tracking-[0.18em]
              text-lime-300
            "
            >
              Let&apos;s build something
            </div>

            <h2
              className="
              mx-auto mt-4 max-w-3xl
              text-5xl font-black
              tracking-[-0.05em]
              md:text-7xl
            "
            >
              Have a frontend
              <br />
              challenge?
            </h2>

            <p
              className="
              mx-auto mt-6 max-w-xl
              leading-7
              text-zinc-400
            "
            >
              Open to conversations around frontend engineering, product
              development and building polished web experiences.
            </p>

            <a
              href="mailto:sandeep.samal0999@gmail.com"
              className="
                mt-8 inline-flex
                items-center gap-2
                rounded-full
                bg-lime-300
                px-6 py-3
                text-sm font-bold
                text-black
                transition
                hover:-translate-y-1
                hover:bg-lime-200
              "
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer
        className="
        mx-auto flex
        w-[calc(100%-40px)]
        max-w-6xl
        flex-col
        justify-between
        gap-5
        border-t border-white/[0.08]
        py-8
        text-sm text-zinc-500
        md:flex-row
      "
      >
        <span>© {new Date().getFullYear()} Sandeep Samal</span>

        <div className="flex gap-5">
          <a
            href="mailto:sandeep.samal0999@gmail.com"
            className="transition hover:text-lime-300"
          >
            <Mail size={17} />
          </a>

          <a
            href="https://linkedin.com/in/sandeep-samal-430a361b2"
            target="_blank"
            rel="noreferrer"
            className="
    flex h-9 w-9 items-center justify-center
    rounded-full
    border border-white/[0.08]
    transition
    hover:border-lime-300/30
    hover:text-lime-300
  "
          >
            <span className="text-sm font-bold">in</span>
          </a>

          <a
            href="tel:+918328881784"
            className="transition hover:text-lime-300"
          >
            <Phone size={17} />
          </a>
        </div>
      </footer>
    </main>
  );
}

function Stat({ number, text }: { number: string; text: string }) {
  return (
    <div
      className="
      border-b border-white/[0.08]
      p-7
      last:border-0
      md:border-b-0
      md:border-r
      md:last:border-r-0
    "
    >
      <div
        className="
        text-4xl font-black
        tracking-tight
      "
      >
        {number}
      </div>

      <div
        className="
        mt-2 text-sm
        text-zinc-500
      "
      >
        {text}
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <div
        className="
        text-xs font-bold
        uppercase tracking-[0.18em]
        text-lime-300
      "
      >
        {eyebrow}
      </div>

      <h2
        className="
        mt-3
        text-4xl font-black
        tracking-[-0.045em]
        md:text-6xl
      "
      >
        {title}
      </h2>
    </div>
  );
}
