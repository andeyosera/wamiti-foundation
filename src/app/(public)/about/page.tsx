import Image from "next/image";
import { Quote, Leaf } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-32 pb-16 bg-cream section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">
            The Heart Behind Wamiti Foundation
          </h1>
        </div>
      </section>

      {/* PROFILE SECTION */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/founder.jpeg"
                alt="Founder of Wamiti Foundation"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-5 rounded-2xl shadow-lg hidden md:block">
              <Leaf className="w-8 h-8" />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">
              Founder & Patron
            </p>
            <h2 className="text-3xl font-bold mb-6 text-balance">
              A Lifelong Commitment to Community and Nature
            </h2>
            <p className="text-forest/70 font-body leading-relaxed mb-4">
              Affectionately known as <span className="font-semibold text-forest">"Mheshimiwa wa Miti,"</span> our
              founder's love for nature and people has been the guiding force
              behind every tree planted and every life touched across Shinoyi
              Shikomari and beyond.
            </p>
            <p className="text-forest/70 font-body leading-relaxed">
              What began as small, personal acts of giving back has grown
              into a movement — one rooted in the belief that sustainable
              change starts with the community itself, nurtured like a tree
              that takes time to grow but stands for generations.
            </p>
          </div>
        </div>
      </section>

      {/* MESSAGE TO THE PUBLIC */}
      <section className="section-padding bg-forest text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-10 h-10 text-primary-light mx-auto mb-6" />
          <p className="text-xl md:text-2xl font-display italic leading-relaxed mb-8 text-balance">
            "To every well-wisher, every neighbor, and every friend who has
            walked this journey with us — thank you. The trees we plant
            today are not for us, but for the children who will one day
            rest beneath their shade. Together, we have shown that hope
            takes root when communities choose to grow together. My door,
            and my heart, remain open to Shinoyi Shikomari and every soul
            within it."
          </p>
          <p className="text-primary-light font-body font-semibold">
            — Founder, Wamiti Foundation
          </p>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="section-padding bg-cream">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-balance">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                desc: "Transparent action in every project we undertake.",
              },
              {
                title: "Compassion",
                desc: "People-first solutions rooted in genuine care.",
              },
              {
                title: "Sustainability",
                desc: "Building for generations, not just the moment.",
              },
            ].map((value, i) => (
              <div key={i} className="card p-8">
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  {value.title}
                </h3>
                <p className="text-forest/60 text-sm font-body leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}