import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* OPENING TEXT SECTION */}
<section className="pt-40 pb-20 bg-blue-primary section-padding">
  <div className="max-w-5xl mx-auto">
    <p className="inline-block text-xs font-heading font-semibold tracking-widest uppercase text-white/60 mb-6">
      Wamiti Foundation — Shinoyi Shikomari Ward
    </p>
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-8 text-balance">
      Touching Lives,<br />
      <span className="italic font-normal">Growing Hope.</span>
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
      <p className="font-body text-white/80 text-lg leading-relaxed">
        Wamiti Foundation is a community-driven NGO rooted in the heart
        of Shinoyi Shikomari Ward, Kakamega County. We believe that
        lasting change begins at the grassroots, with the people,
        for the people.
      </p>
      <p className="font-body text-white/80 text-lg leading-relaxed">
        From planting trees to putting uniforms on children, from
        training youth to empowering families through agriculture,
        every project we undertake is a seed of hope planted with
        intention and love.
      </p>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 mt-12">
      <Link
        href="/projects"
        className="bg-white text-blue-primary font-heading font-medium px-8 py-3 hover:bg-blue-light transition-all duration-300 tracking-wide"
      >
        See Our Work
      </Link>
      <Link
        href="/contribute"
        className="border border-white text-white font-heading font-medium px-8 py-3 hover:bg-white hover:text-blue-primary transition-all duration-300 tracking-wide"
      >
        Make a Contribution
      </Link>
    </div>
  </div>
</section>

      {/* HERO IMAGE — full width, no text overlay */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/images/hero/homepage.jpg"
          alt="Wamiti Foundation Community"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={100}
        />
      </section>

      {/* STATS STRIP */}
      <section className="bg-blue-primary text-white py-12 section-padding">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10,000+", label: "Trees Planted" },
            { number: "1,000+", label: "Lives Touched" },
            { number: "200+", label: "Youth Empowered" },
            { number: "5+", label: "Active Projects" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl md:text-4xl font-display font-bold mb-1">
                {stat.number}
              </p>
              <p className="text-white/70 font-body text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="section-padding section-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="tag mb-4">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-balance">
                Building a Community Where No One is Left Behind
              </h2>
              <p className="prose-wamiti mb-4">
                Wamiti Foundation believes that a thriving community needs
                growth in every direction. Our work spans environmental
                conservation, education support, youth empowerment, and
                agricultural development.
              </p>
              <p className="prose-wamiti mb-8">
                Every project we undertake is designed with one purpose: to
                create lasting, sustainable change that outlives our
                involvement and empowers communities to grow on their own.
              </p>
              <Link href="/about" className="btn-outline">
                Learn More About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Environmental Conservation", desc: "Tree planting and land restoration across the ward." },
                { label: "Education Support", desc: "School uniforms, materials, and infrastructure." },
                { label: "Youth Empowerment", desc: "Skills training and mentorship programs." },
                { label: "Agricultural Development", desc: "Poultry farming and food security initiatives." },
              ].map((item, i) => (
                <div key={i} className="card-clean p-5">
                  <h3 className="font-display font-semibold text-sm text-neutral-dark mb-2">
                    {item.label}
                  </h3>
                  <p className="text-neutral-gray text-xs font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS TEASER */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="tag mb-3">Our Projects</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-balance">
                Where We Have Made a Difference
              </h2>
            </div>
            <Link href="/projects" className="btn-text hidden md:block">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Chicken Project",
                location: "Shinoyi",
                desc: "Empowering 50+ families through sustainable poultry farming.",
                image: "/images/projects/chicken/chicken-1.jpeg",
              },
              {
                title: "Youth Empowerment Program",
                location: "Shinoyi Shikomari",
                desc: "Vocational skills training for 200+ young people across the ward.",
                image: "/images/projects/youth/youth-1.jpeg",
              },
              {
                title: "Tree Planting Initiative",
                location: "Shikomari",
                desc: "10,000+ indigenous trees planted to restore our land.",
                image: "/images/projects/trees/trees-1.jpeg",
              },
              {
                title: "School Uniform Project",
                location: "Shinoyi",
                desc: "Providing uniforms and materials to 500+ children.",
                image: "/images/projects/school/school-1.jpeg",
              },
            ].map((project, i) => (
              <Link
                key={i}
                href="/projects"
                className="card-clean group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-body text-neutral-gray mb-1">
                    {project.location}
                  </p>
                  <h3 className="font-display font-semibold text-base text-neutral-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-gray font-body text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link href="/projects" className="btn-outline w-full text-center block">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* FOUNDER QUOTE */}
      <section className="section-padding bg-blue-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-display italic leading-relaxed mb-8">
            "The trees we plant today are not for us, but for the children
            who will one day rest beneath their shade. Together, pamoja,
            we will make Shinoyi Shikomari everything it deserves to be."
          </p>
          <p className="font-body text-white/60 text-sm">
            Julius Mulinya, Founder — Wamiti Foundation
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-padding section-offwhite">
        <div className="max-w-3xl mx-auto text-center">
          <p className="tag mb-4">Get Involved</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-balance">
            Be Part of the Growth
          </h2>
          <p className="prose-wamiti mb-10 text-lg">
            Whether through your time, your resources, or your voice, every
            contribution helps us reach further into the communities that
            need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contribute" className="btn-primary">
              Contribute Now
            </Link>
            <Link href="/volunteer" className="btn-outline">
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}