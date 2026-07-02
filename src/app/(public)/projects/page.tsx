import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Leaf } from "lucide-react";
import { prisma } from "@/lib/prisma";

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-32 pb-16 bg-forest text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-light font-body text-sm tracking-widest uppercase mb-3">
            Our Work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Where Hope Has Taken Root
          </h1>
          <p className="text-white/70 font-body leading-relaxed max-w-2xl mx-auto">
            From clean water to green forests to empowered youth — here is
            a glimpse of what your support has made possible across
            Shinoyi Shikomari Ward and beyond.
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-6xl mx-auto">
          {projects.length === 0 ? (
            <div className="text-center py-20">
              <Leaf className="w-12 h-12 text-primary/30 mx-auto mb-4" />
              <p className="text-forest/50 font-body">
                Projects coming soon. Check back shortly!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="card group">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={
                        project.imageUrls[0] ||
                        "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
                      }
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {project.featured && (
                      <span className="absolute top-3 left-3 bg-amber-wamiti text-white text-xs font-body font-medium px-3 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-primary text-xs font-body mb-3">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="font-display font-semibold text-lg text-forest mb-3 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-forest/60 font-body text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {project.impact && (
                      <div className="bg-primary/10 rounded-lg px-4 py-2 mb-4">
                        <p className="text-primary text-xs font-body font-medium">
                          Impact: {project.impact}
                        </p>
                      </div>
                    )}

                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1 text-amber-wamiti font-body text-sm font-medium hover:gap-2 transition-all duration-300"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section-padding bg-cream text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want to Support a Project?
          </h2>
          <p className="text-forest/60 font-body mb-8 leading-relaxed">
            Every contribution — big or small — helps us reach more
            communities and grow more hope across the ward.
          </p>
          <Link href="/contribute" className="btn-primary">
            Make a Contribution
          </Link>
        </div>
      </section>
    </>
  );
}