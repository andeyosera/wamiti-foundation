import Image from "next/image";
import { Milestone, Heart, TreePine, GraduationCap, Users, Sprout } from "lucide-react";
import Link from "next/link";

const timeline = [
  {
    year: "2018",
    title: "The Seed is Planted",
    description:
      "What began as a personal conviction grew into a community movement. Our founder began tree planting initiatives across Shinoyi Shikomari, earning the affectionate title Mheshimiwa wa Miti a name that would come to define a legacy.",
    color: "from-primary to-primary-dark",
  },
  {
    year: "2019",
    title: "First Community Project",
    description:
      "We launched our first structured community project providing school uniforms for over 100 children in Shinoyi who could not afford them. Watching those children walk to school in their uniforms for the first time remains one of our proudest moments.",
    color: "from-purple-wamiti to-purple-dark",
  },
  {
    year: "2020",
    title: "Agricultural Empowerment Begins",
    description:
      "Recognizing that food security is the foundation of all development, we launched our chicken farming project equipping 50 families with chicks, coops, feeds, and training to build sustainable income sources from their own backyards.",
    color: "from-primary to-purple-wamiti",
  },
  {
    year: "2021",
    title: "Youth Empowerment Program Launches",
    description:
      "We launched our flagship youth empowerment program, providing vocational skills training in tailoring, carpentry, digital literacy, and entrepreneurship to over 200 young people across the ward.",
    color: "from-gold to-gold-dark",
  },
  {
    year: "2022",
    title: "Wamiti Foundation is Born",
    description:
      "After years of grassroots work, Wamiti Foundation was formally established giving our community initiatives a home, a name, and a structure to grow from. The foundation mandate: education, environment, youth, and agriculture.",
    color: "from-primary to-primary-dark",
  },
  {
    year: "2023",
    title: "10,000 Trees Milestone",
    description:
      "We planted our 10,000th tree in Shikomari a milestone that moved many of us to tears. Each tree represents a family, a child, a future. We celebrated not just the trees but the community members who planted them.",
    color: "from-purple-wamiti to-purple-dark",
  },
  {
    year: "2024",
    title: "Expanding Our Reach",
    description:
      "We expanded our school infrastructure projects, renovating classrooms and providing learning materials to 5 schools across the ward. We also launched our community development initiative, reaching over 1,000 community members with direct support.",
    color: "from-primary to-purple-wamiti",
  },
  {
    year: "2025",
    title: "Growing Stronger Together",
    description:
      "Today, Wamiti Foundation continues to grow with more projects, more partners, and more hope than ever before. We are building a community where no child is left behind, no youth is without opportunity, and no family goes to bed hungry.",
    color: "from-gold to-gold-dark",
  },
];

export default function HistoryPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-primary to-purple-wamiti text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-white font-body text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Our Journey
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            The Story of{" "}
            <span className="text-gold-light">Wamiti Foundation</span>
          </h1>
          <p className="text-white/70 font-body leading-relaxed max-w-2xl mx-auto">
            Every great movement begins with a single step. Here is ours —
            told honestly, with gratitude and pride.
          </p>
        </div>
      </section>

      {/* FOUNDER INTRO */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/about/founder.jpeg"
              alt="Founder"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
          </div>
          <div className="md:col-span-2">
            <span className="inline-block bg-lavender text-primary font-body text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Where It All Began
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
              Julius Mulinya One Man, One Ward,{" "}
              <span className="gradient-text">One Vision</span>
            </h2>
            <p className="text-navy/70 font-body leading-relaxed mb-4">
               The story of Wamiti Foundation is inseparable from the story
               of its founder,{" "}
               <span className="highlight-blue">Julius Mulinya</span> a man
               who grew up in the heart of{" "}
               <span className="highlight-purple">Shinoyi Shikomari Ward</span>{" "}
               and never forgot where he came from. Long before there was a
               foundation, there was a man planting trees by the roadside,
               buying school uniforms from his own pocket, and sitting with
               youth who had nowhere to go.
</p>
            <p className="text-navy/70 font-body leading-relaxed mb-4">
              People called him{" "}
              <span className="highlight-purple">"Mheshimiwa wa Miti"</span>{" "}
              not because of any title, but because of his actions. He
              believed then, as he believes now, that the land and the
              people who live on it are sacred. That belief became the
              foundation of everything we do.
            </p>
            <p className="text-navy/70 font-body leading-relaxed">
              What started as individual acts of kindness grew into a
              structured movement and that movement became{" "}
              <span className="highlight-blue">Wamiti Foundation</span>.
            </p>
          </div>
        </div>
      </section>
      {/* FAMILY SECTION */}
<section className="section-padding bg-white">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-10">
      <span className="inline-block bg-lavender text-primary font-body text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
        The Man Behind the Mission
      </span>
      <h2 className="text-3xl font-bold text-balance">
        Julius Mulinya —{" "}
        <span className="gradient-text">Family Man, Community Champion</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Family Photo */}
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
        <Image
          src="/images/about/family.jpeg"
          alt="Julius Mulinya and family"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-white font-display font-bold text-lg">
            The Mulinya Family
          </p>
          <p className="text-white/80 font-body text-sm">
            Julius, his wife, and their four children
          </p>
        </div>
      </div>

      {/* Family Text */}
      <div>
        <p className="text-navy/70 font-body leading-relaxed mb-4">
          Behind every great community servant is a family that
          understands the calling. Julius Mulinya is a proud husband
          and father of four and it is his family that grounds him,
          motivates him, and reminds him every day why the work of
          <span className="highlight-blue"> Wamiti Foundation </span>
          matters.
        </p>
        <p className="text-navy/70 font-body leading-relaxed mb-4">
          His wife has been his closest partner in this journey —
          offering counsel, support, and a steady hand during the
          seasons when the work felt overwhelming. Their four children
          have grown up watching their father give back to the
          community, and in doing so, have learned the most important
          lesson of all:{" "}
          <span className="highlight-purple">
            that true wealth is measured in lives touched, not
            possessions accumulated.
          </span>
        </p>
        <p className="text-navy/70 font-body leading-relaxed mb-4">
          Julius often says that his family is his first community —
          and if he can serve them well, he can serve Shinoyi
          Shikomari well too. That philosophy of{" "}
          <span className="highlight-blue">servant leadership</span>{" "}
          starting at home before extending to the world is at the
          heart of everything Wamiti Foundation does.
        </p>
        <p className="text-navy/70 font-body leading-relaxed">
          As he looks toward{" "}
          <span className="highlight-purple">2027 and beyond</span>,
          Julius carries with him the love of his family, the trust
          of his community, and the conviction that Shinoyi Shikomari
          deserves the very best in leadership, in development, and
          in hope.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* TIMELINE */}
      <section className="section-padding bg-lavender">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-white text-purple-wamiti font-body text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Our Timeline
            </span>
            <h2 className="text-3xl font-bold text-balance">
              Year by Year,{" "}
              <span className="gradient-text">Step by Step</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-purple-wamiti to-gold" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${item.color} ring-4 ring-white shadow-md z-10`}
                  />

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="card p-6 hover:-translate-y-1 transition-transform duration-300">
                      <span
                        className={`inline-block bg-gradient-to-r ${item.color} text-white text-xs font-body font-bold px-3 py-1 rounded-full mb-3`}
                      >
                        {item.year}
                      </span>
                      <h3 className="font-display font-bold text-lg text-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-navy/60 font-body text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="section-padding bg-gradient-to-br from-navy via-primary to-purple-wamiti text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-balance">
            Years of Work,{" "}
            <span className="text-gold-light">Lifetime of Impact</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: TreePine, number: "10,000+", label: "Trees Planted" },
              { icon: GraduationCap, number: "500+", label: "Children Supported" },
              { icon: Users, number: "200+", label: "Youth Empowered" },
              { icon: Sprout, number: "50+", label: "Families in Farming" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-gold-light" />
                </div>
                <p className="text-3xl font-display font-bold text-gold-light mb-1">
                  {item.number}
                </p>
                <p className="text-white/70 font-body text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Be Part of the Next Chapter
          </h2>
          <p className="text-navy/60 font-body mb-8 leading-relaxed">
            The best of Wamiti Foundation is still ahead. Join us as we
            write the next pages of this story together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contribute" className="btn-primary">
              Contribute Now
            </Link>
            <Link href="/volunteer" className="btn-outline">
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}