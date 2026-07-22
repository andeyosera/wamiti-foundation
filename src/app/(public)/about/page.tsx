import Image from "next/image";
import { Quote, GraduationCap, TreePine, Users, Sprout, Heart } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-primary to-purple-wamiti text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-white font-body text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            The Heart Behind{" "}
            <span className="text-gold-light">Wamiti Foundation</span>
          </h1>
          <p className="text-white/70 font-body leading-relaxed max-w-2xl mx-auto">
            Born from love for community, rooted in action, and growing
            every day this is who we are.
          </p>
        </div>
      </section>

      {/* PROFILE SECTION */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/founder.jpeg"
                alt="Founder of Wamiti Foundation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-display font-bold text-lg">
                  Founder & Patron
                </p>
                <p className="text-white/80 font-body text-sm">
                  Wamiti Foundation
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-purple-wamiti rounded-2xl flex items-center justify-center shadow-lg hidden md:flex">
              <TreePine className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="inline-block bg-lavender text-primary font-body text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              A Lifelong Commitment
            </span>
            <h2 className="text-3xl font-bold mb-6 text-balance">
              Affectionately Known as{" "}
              <span className="gradient-text">"Mheshimiwa wa Miti"</span>
            </h2>
            <p className="text-navy/70 font-body leading-relaxed mb-4">
              My love for trees is not just about planting it is about
              what trees represent. Roots. Growth. Shade for those who come
              after us. That is the kind of legacy I want to leave in
              Shinoyi Shikomari.
            </p>
            <p className="text-navy/70 font-body leading-relaxed mb-4">
              Wamiti Foundation is not a project. It is a promise to
              every child who needs a uniform to go to school, to every
              young person who needs a skill to build a future, to every
              family that needs support to put food on the table.
            </p>
            <p className="text-navy/70 font-body leading-relaxed">
              We started small, with just a few trees and a big dream.
              Today, we are touching lives across the ward in ways I could
              only imagine when we began. And we are just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER'S MESSAGE */}
      <section className="section-padding bg-lavender">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-white text-purple-wamiti font-body text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              From the Founder's Desk
            </span>
            <h2 className="text-3xl font-bold text-balance">
              A Message to Our{" "}
              <span className="gradient-text">Community</span>
            </h2>
          </div>

          <div className="card p-8 md:p-12 relative">
            <Quote className="w-12 h-12 text-primary/20 absolute top-6 left-6" />
            <div className="space-y-5 text-navy/70 font-body leading-relaxed relative z-10">
              <p>
                To every person who has ever believed in what we are
                doing here <span className="highlight-blue">asante sana</span>.
                Your faith in this foundation keeps me going on the days
                when the work feels heavy.
              </p>
              <p>
                When I look at the children of Shinoyi Shikomari, I see
                the future of this ward. I see doctors, engineers, farmers,
                teachers people who will one day look back and remember
                that someone believed in them when it mattered most. That
                is why we fight so hard to put{" "}
                <span className="highlight-purple">uniforms on their backs</span>{" "}
                and <span className="highlight-blue">books in their hands</span>.
                Education is not a privilege it is a right, and we will
                do everything in our power to make sure every child in this
                ward can access it.
              </p>
              <p>
                To our young people you are not a problem to be solved.
                You are the solution. The skills training programs we run,
                the mentorship sessions, the vocational workshops all of
                it is designed with one purpose:{" "}
                <span className="highlight-purple">to give you a foundation</span>{" "}
                strong enough to build your dreams on. I have watched young
                men and women come through our programs with nothing and
                leave with a trade, a plan, and a fire in their eyes. There
                is nothing more beautiful than that.
              </p>
              <p>
                Our agricultural programs the chicken projects, the
                kitchen gardens, the food security initiatives are born
                from a simple truth:{" "}
                <span className="highlight-blue">a hungry family cannot thrive</span>.
                We want every household in Shinoyi Shikomari to have enough.
                Not just to survive, but to grow. To sell. To save. To
                invest in the next generation.
              </p>
              <p>
                And the trees always the trees. Every seedling we plant
                is an act of faith in tomorrow. We plant knowing we may
                never sit in the shade of some of these trees ourselves.
                But our children will. And their children after them. That
                is enough for me.
              </p>
              <p>
                This community is my heart. Shinoyi Shikomari is not just
                a place I come from it is a place I am{" "}
                <span className="highlight-purple">building towards</span>.
                Together, <span className="highlight-blue">pamoja</span>,
                we will make it everything it deserves to be.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-lavender-dark flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-wamiti rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-navy">
                  Founder & Patron
                </p>
                <p className="text-navy/50 font-body text-sm">
                  Wamiti Foundation, Shinoyi Shikomari Ward
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-lavender text-primary font-body text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Our Values
          </span>
          <h2 className="text-3xl font-bold mb-12 text-balance">
            What We <span className="gradient-text">Stand For</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TreePine,
                title: "Environmental Stewardship",
                desc: "Caring for the land we inherited and preserving it for those who come after us.",
                color: "from-primary to-primary-dark",
              },
              {
                icon: GraduationCap,
                title: "Education First",
                desc: "Believing that every child deserves access to quality education without exception.",
                color: "from-purple-wamiti to-purple-dark",
              },
              {
                icon: Users,
                title: "Youth at the Centre",
                desc: "Putting young people first because they are the architects of tomorrow.",
                color: "from-primary to-purple-wamiti",
              },
              {
                icon: Sprout,
                title: "Food Security",
                desc: "Working to ensure every family has enough to eat, grow, and share.",
                color: "from-gold to-gold-dark",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="card p-6 text-center hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold mb-2 text-navy">
                  {value.title}
                </h3>
                <p className="text-navy/60 text-sm font-body leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-navy via-primary to-purple-wamiti text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Walk With Us
          </h2>
          <p className="text-white/70 font-body mb-8 leading-relaxed">
            Whether you contribute, volunteer, or simply spread the word —
            you are part of this story. And this story is far from over.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contribute" className="btn-gold">
              Contribute Now
            </Link>
            <Link href="/history" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-body font-medium px-8 py-3 rounded-full hover:bg-white hover:text-navy transition-all duration-300">
              Read Our History
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}