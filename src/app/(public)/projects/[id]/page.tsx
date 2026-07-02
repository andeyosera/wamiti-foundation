import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowLeft, Leaf } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await prisma.project.findUnique({
    where: { id: params.id },
  });

  if (!project) return notFound();

  return (
    <>
      {/* HERO IMAGE */}
      <section className="relative h-[60vh] mt-0">
        <Image
          src={
            project.imageUrls[0] ||
            "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
          }
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-24 left-6 md:left-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-body text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-1 text-primary-light text-xs font-body mb-3">
              <MapPin className="w-3 h-3" />
              <span>{project.location} — {project.area}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white text-balance">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* PROJECT CONTENT */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4 text-forest">
                About This Project
              </h2>
              <p className="text-forest/70 font-body leading-relaxed text-lg">
                {project.description}
              </p>

              {/* Extra Images */}
              {project.imageUrls.length > 1 && (
                <div className="mt-10">
                  <h3 className="text-lg font-semibold mb-4 text-forest">
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.imageUrls.slice(1).map((url, i) => (
                      <div
                        key={i}
                        className="relative h-48 rounded-xl overflow-hidden"
                      >
                        <Image
                          src={url}
                          alt={`${project.title} photo ${i + 2}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Impact Box */}
              {project.impact && (
                <div className="bg-primary/10 rounded-2xl p-6">
                  <Leaf className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-semibold text-forest mb-2">
                    Our Impact
                  </h4>
                  <p className="text-primary font-body font-medium">
                    {project.impact}
                  </p>
                </div>
              )}

              {/* Location Box */}
              <div className="bg-cream rounded-2xl p-6">
                <MapPin className="w-6 h-6 text-amber-wamiti mb-3" />
                <h4 className="font-semibold text-forest mb-2">Location</h4>
                <p className="text-forest/60 font-body text-sm">
                  {project.location}
                </p>
                <p className="text-forest/60 font-body text-sm">
                  {project.area}
                </p>
              </div>

              {/* CTA Box */}
              <div className="bg-forest rounded-2xl p-6 text-white text-center">
                <h4 className="font-semibold mb-2">Support This Work</h4>
                <p className="text-white/70 font-body text-sm mb-4">
                  Your contribution helps us do more of this.
                </p>
                <Link href="/contribute" className="btn-primary text-sm block">
                  Contribute Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MORE PROJECTS */}
      <section className="section-padding bg-cream text-center">
        <h3 className="text-2xl font-bold mb-4">See More Projects</h3>
        <p className="text-forest/60 font-body mb-8">
          Explore all the ways Wamiti Foundation is growing hope across the ward.
        </p>
        <Link href="/projects" className="btn-primary">
          View All Projects
        </Link>
      </section>
    </>
  );
}