import Link from "next/link";
import Image from "next/image";
import { Leaf, Heart, Users, TreePine, ArrowRight, GraduationCap, Sprout } from "lucide-react";

export default function HomePage() {
  return (
    <>
{/* HERO SECTION */}
<section className="relative h-screen">
  <div className="absolute inset-0">
    <Image
     src="/images/hero/homepage.jpg"
     alt="Wamiti Foundation Community"
     fill 
     priority
     className="object-cover object-center"
     sizes="100vw"
     quality={100}
   />
    {/* Lighter, more elegant overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-transparent" />
  </div>

  <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto animate-fade-in">
    <div className="max-w-2xl">
      <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-body font-medium px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
        Wamiti Foundation — Shinoyi Shikomari
      </span>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
        Touching Lives,{" "}
        <span className="text-gold">Growing Hope</span>
      </h1>
      <p className="text-white/85 font-body text-lg md:text-xl mb-10 leading-relaxed">
        From tree planting to school empowerment, youth development
        to agricultural uplift — rooted in Shinoyi Shikomari and
        committed to transforming every corner of our community.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/projects" className="btn-gold">
          See Our Work
        </Link>
        <Link
          href="/contribute"
          className="bg-white/15 backdrop-blur-sm border-2 border-white/70 text-white font-body font-medium px-8 py-3 rounded-full hover:bg-white hover:text-navy transition-all duration-300"
        >
          Make a Contribution
        </Link>
      </div>
    </div>
  </div>

 
      {/* STATS SECTION */}
      <section className="bg-gradient-to-r from-primary to-purple-wamiti text-white py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10,000+", label: "Trees Planted" },
            { number: "1,000+", label: "Lives Touched" },
            { number: "200+", label: "Youth Empowered" },
            { number: "5+", label: "Active Projects" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl md:text-4xl font-display font-bold text-gold-light mb-1">
                {stat.number}
              </p>
              <p className="text-white/80 font-body text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block bg-lavender text-primary font-body text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Planting Seeds of Change Across{" "}
            <span className="gradient-text">Our Community</span>
          </h2>
          <p className="text-navy/60 font-body max-w-2xl mx-auto leading-relaxed mb-16">
            Wamiti Foundation believes that lasting change begins at the
            grassroots. We work hand in hand with the people of Shinoyi
            Shikomari to build a future where every child is educated, every
            family is fed, every youth is empowered, and every tree planted
            is a promise kept to the next generation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TreePine,
                title: "Environmental Care",
                desc: "Tree planting and conservation restoring our land for future generations.",
                color: "from-primary to-primary-dark",
              },
              {
                icon: GraduationCap,
                title: "Education Support",
                desc: "Providing school uniforms, materials, and infrastructure for children.",
                color: "from-purple-wamiti to-purple-dark",
              },
              {
                icon: Users,
                title: "Youth Empowerment",
                desc: "Skills training and mentorship programs building tomorrow's leaders.",
                color: "from-primary to-purple-wamiti",
              },
              {
                icon: Sprout,
                title: "Agricultural Growth",
                desc: "Poultry farming and food security programs uplifting families.",
                color: "from-gold to-gold-dark",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card p-6 text-center hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-base font-semibold mb-3 text-navy">
                  {item.title}
                </h3>
                <p className="text-navy/60 text-sm font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT WAMITI SECTION */}
      <section className="section-padding bg-lavender">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white text-purple-wamiti font-body text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              More Than an NGO —{" "}
              <span className="gradient-text">A Movement</span>
            </h2>
            <p className="text-navy/70 font-body leading-relaxed mb-4">
              Wamiti Foundation was born from a deep love for the people
              and land of <span className="highlight-blue">Shinoyi Shikomari Ward</span>.
              We believe that real development is not handed down it
              grows from within communities, like a tree that takes root
              and stands for generations.
            </p>
            <p className="text-navy/70 font-body leading-relaxed mb-4">
              Our work spans{" "}
              <span className="highlight-purple">environmental conservation</span>,{" "}
              <span className="highlight-blue">education support</span>,{" "}
              <span className="highlight-purple">youth empowerment</span>,
              and <span className="highlight-blue">agricultural development</span> —
              because we understand that a thriving community needs growth
              in every direction.
            </p>
            <p className="text-navy/70 font-body leading-relaxed">
              From buying school uniforms for children who would otherwise
              stay home, to training youth in vocational skills, to planting
              trees that will outlive us all — every project is a seed of
              hope planted with intention and love.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/about" className="btn-primary text-sm py-2 px-6">
                About Us
              </Link>
              <Link href="/history" className="btn-outline text-sm py-2 px-6">
                Our History
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Trees Planted", value: "10,000+", color: "from-primary to-primary-dark" },
              { label: "Youth Trained", value: "200+", color: "from-purple-wamiti to-purple-dark" },
              { label: "Families Helped", value: "500+", color: "from-gold to-gold-dark" },
              { label: "Schools Supported", value: "5+", color: "from-primary to-purple-wamiti" },
            ].map((item, i) => (
              <div
                key={i}
                className={`card-gradient bg-gradient-to-br ${item.color} p-6 text-center`}
              >
                <p className="text-3xl font-display font-bold text-white mb-1">
                  {item.value}
                </p>
                <p className="text-white/80 font-body text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-lavender text-primary font-body text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Where We've Walked,{" "}
              <span className="gradient-text">Hope Has Grown</span>
            </h2>
          </div>
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-body font-medium hover:gap-3 transition-all duration-300 group"
            >
              View All Projects{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-padding bg-gradient-to-br from-navy via-primary to-purple-wamiti text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-gold-light" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Be Part of the Growth
          </h2>
          <p className="text-white/70 font-body mb-10 leading-relaxed text-lg">
            Whether through your time, your resources, or your voice —
            every contribution helps us reach further into the communities
            that need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contribute" className="btn-gold">
              Contribute Now
            </Link>
            <Link
              href="/volunteer"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-body font-medium px-8 py-3 rounded-full hover:bg-white hover:text-navy transition-all duration-300"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}