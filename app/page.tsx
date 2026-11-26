import Image from "next/image";
import { experience, profile, sideProject, stack, strengths } from "./content";

const wrap = "mx-auto w-full max-w-6xl px-5 sm:px-8";

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="font-display text-3xl font-semibold tracking-tight sm:text-4xl scroll-mt-24"
    >
      {children}
    </h2>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line/70 bg-fog/90 backdrop-blur">
        <nav className={`${wrap} flex h-16 items-center justify-between gap-6`}>
          <a href="#top" className="font-display text-lg font-semibold">
            Mauricio Pavan
          </a>
          <ul className="flex items-center gap-5 text-sm sm:gap-7">
            <li className="hidden sm:block">
              <a className="hover:text-cobalt" href="#experience">Experience</a>
            </li>
            <li className="hidden sm:block">
              <a className="hover:text-cobalt" href="#stack">Stack</a>
            </li>
            <li className="hidden sm:block">
              <a className="hover:text-cobalt" href="#contact">Contact</a>
            </li>
            <li>
              <a
                className="rounded-full border border-ink px-4 py-1.5 font-medium hover:bg-ink hover:text-fog"
                href={profile.cv}
                download
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className={`${wrap} grid gap-10 pt-12 pb-20 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-28`}>
          <div className="lg:col-span-8">
            <h1 className="font-display font-bold leading-[0.86] tracking-[-0.045em] text-[clamp(4rem,13vw,10.5rem)]">
              <span className="name-line">Mauricio</span>
              <span className="name-line">Pavan</span>
            </h1>
            <p className="mt-8 max-w-xl font-display text-2xl leading-snug font-medium sm:text-3xl">
              I build web and mobile products and take them all the way to production.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
              Product Engineer with 4+ years shipping React, Next.js and React Native apps, from
              architecture to the App Store and Play Store. Most of that time in insurance and
              payments, where stability and security aren&apos;t optional.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-cobalt px-6 py-3 font-medium text-white hover:bg-cobalt-deep"
              >
                Email me
              </a>
              <a href={profile.linkedin} className="font-medium underline decoration-line underline-offset-4 hover:decoration-cobalt">
                LinkedIn
              </a>
              <a href={profile.github} className="font-medium underline decoration-line underline-offset-4 hover:decoration-cobalt">
                GitHub
              </a>
            </div>
          </div>

          <figure className="lg:col-span-4 lg:pt-6">
            <Image
              src="/mauricio.jpg"
              alt="Mauricio Pavan smiling, arms crossed"
              width={960}
              height={1200}
              priority
              className="w-full max-w-sm rounded-[28px] object-cover lg:max-w-none"
            />
            <figcaption className="mt-4 text-sm text-slate">
              {profile.location}. Open to new roles, remote or hybrid.
            </figcaption>
          </figure>
        </section>

        {/* Experience */}
        <section className="border-t border-line bg-paper py-20 lg:py-28">
          <div className={wrap}>
            <SectionTitle id="experience">Experience</SectionTitle>
            <ol className="mt-12">
              {experience.map((role) => (
                <li
                  key={role.company}
                  className="grid gap-4 border-t border-line py-10 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-8"
                >
                  <div className="lg:col-span-4">
                    <p className="font-display text-xl font-semibold tabular-nums tracking-tight text-slate">
                      {role.start} – {role.end}
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                      {role.company}
                    </h3>
                    <p className="mt-1 text-slate">{role.title}</p>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="max-w-2xl text-xl leading-relaxed">{role.summary}</p>
                    <ul className="mt-5 max-w-2xl space-y-2.5 leading-relaxed text-ink/85">
                      {role.highlights.map((h) => (
                        <li key={h} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-cobalt">
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Tags items={role.stack} />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Strengths */}
        <section className="py-20 lg:py-28">
          <div className={wrap}>
            <SectionTitle id="strengths">What I bring to a team</SectionTitle>
            <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {strengths.map((s) => (
                <div key={s.title} className="border-t-2 border-ink pt-5">
                  <h3 className="font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Side project */}
        <section className="bg-ink py-20 text-fog lg:py-28">
          <div className={`${wrap} grid gap-10 lg:grid-cols-12 lg:gap-8`}>
            <div className="lg:col-span-5">
              <p className="text-fog/70">Side project</p>
              <h2 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {sideProject.name}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-fog/85">{sideProject.summary}</p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
              <ul className="space-y-5">
                {sideProject.points.map((p) => (
                  <li key={p} className="border-l-2 border-cobalt pl-5 text-lg leading-relaxed">
                    {p}
                  </li>
                ))}
              </ul>
              <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-1 text-sm text-fog/70">
                {sideProject.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="py-20 lg:py-28">
          <div className={wrap}>
            <SectionTitle id="stack">Stack</SectionTitle>
            <dl className="mt-12">
              {stack.map((row) => (
                <div key={row.group} className="grid gap-2 border-t border-line py-5 sm:grid-cols-12 sm:gap-8">
                  <dt className="font-medium sm:col-span-4">{row.group}</dt>
                  <dd className="text-slate sm:col-span-8">{row.items.join(", ")}</dd>
                </div>
              ))}
              <div className="grid gap-2 border-y border-line py-5 sm:grid-cols-12 sm:gap-8">
                <dt className="font-medium sm:col-span-4">Languages</dt>
                <dd className="text-slate sm:col-span-8">Spanish (native), English (B2)</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-line bg-paper py-20 lg:py-28">
          <div className={wrap}>
            <SectionTitle id="contact">Let&apos;s talk</SectionTitle>
            <p className="mt-4 max-w-xl text-lg text-slate">
              I&apos;m looking for my next role building web and mobile products. The fastest way to
              reach me is email.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block break-all font-display text-[clamp(1.6rem,5vw,3.75rem)] font-bold tracking-tight text-cobalt underline decoration-2 underline-offset-[0.18em] hover:text-cobalt-deep"
            >
              {profile.email}
            </a>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-medium">
              <a className="underline decoration-line underline-offset-4 hover:decoration-cobalt" href={profile.linkedin}>LinkedIn</a>
              <a className="underline decoration-line underline-offset-4 hover:decoration-cobalt" href={profile.github}>GitHub</a>
              <a className="underline decoration-line underline-offset-4 hover:decoration-cobalt" href={profile.cv} download>CV (PDF, Spanish)</a>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${wrap} flex flex-wrap justify-between gap-4 py-8 text-sm text-slate`}>
        <p>© {new Date().getFullYear()} Mauricio Pavan</p>
        <p>Built with Next.js and Tailwind CSS</p>
      </footer>
    </>
  );
}
