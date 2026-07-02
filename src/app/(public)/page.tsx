import Link from "next/link";
import Image from "next/image";
import { Leaf, Heart, Users, TreePine, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/homepage.jpg"
            alt="Community gathering in Shinoyi Shikomari"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/50 to-forest/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in">
          <p className="text-primary-light font-body text-sm tracking-widest uppercase mb-4">
            Wamiti Foundation
          </p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 text-balance leading-tight">
            Touching Lives, Growing Hope
          </h1>
          <p className="text-white/90 font-body text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Rooted in the heart of Shinoyi Shikomari, we walk alongside
            communities — planting trees, building futures, and nurturing
            hope for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" className="btn-primary">
              See Our Work
            </Link>
            <Link
              href="/contribute"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-body font-medium px-8 py-3 rounded-full hover:bg-white hover:text-forest transition-all duration-300"
            >
              Make a Contribution
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">
            Our Mission
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Planting Seeds of Change Across Our Community
          </h2>
          <p className="text-forest/70 font-body max-w-2xl mx-auto leading-relaxed mb-16">
            Every project we undertake is a seed of hope planted in the soil
            of community need — growing into something that outlives us all.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TreePine,
                title: "Environmental Care",
                desc: "Tree planting and conservation initiatives restoring our land for future generations.",
              },
              {
                icon: Users,
                title: "Community Empowerment",
                desc: "Grassroots programs that uplift families and strengthen local livelihoods.",
              },
              {
                icon: Heart,
                title: "Sustainable Impact",
                desc: "Projects built to last — designed with and for the people they serve.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card p-8 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-forest/60 text-sm font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS TEASER */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">
              Our Impact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Where We've Walked, Hope Has Grown
            </h2>
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-body font-medium hover:gap-3 transition-all duration-300"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-padding bg-forest text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Leaf className="w-10 h-10 text-primary-light mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Be Part of the Growth
          </h2>
          <p className="text-white/70 font-body mb-10 leading-relaxed">
            Whether through your time, your resources, or your voice — every
            contribution helps us reach further into the communities that
            need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contribute" className="btn-primary">
              Contribute Now
            </Link>
            <Link href="/volunteer" className="btn-outline border-white text-white hover:bg-white hover:text-forest">
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}