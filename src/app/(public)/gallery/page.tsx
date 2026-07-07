import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { MapPin } from "lucide-react";

export const revalidate = 60;

export default async function GalleryPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  const allImages = projects.flatMap((project) =>
    project.imageUrls
      .filter((url) => url && url !== "N/A" && (url.startsWith("/") || url.startsWith("http")))
      .map((url) => ({
        url,
        title: project.title,
        location: project.location,
        projectId: project.id,
      }))
  );

  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-32 pb-16 bg-forest text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-light font-body text-sm tracking-widest uppercase mb-3">
            Our Gallery
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Moments of Impact
          </h1>
          <p className="text-white/70 font-body leading-relaxed max-w-2xl mx-auto">
            Every photograph tells a story of hope, effort, and community.
            These are the moments that remind us why we do what we do.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-6xl mx-auto">
          {allImages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-forest/40 font-body">
                Gallery coming soon. Check back shortly!
              </p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {allImages.map((image, i) => (
                <div
                  key={i}
                  className="break-inside-avoid card overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={image.url}
                      alt={image.title}
                      width={600}
                      height={400}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-display font-semibold text-sm">
                        {image.title}
                      </p>
                      <div className="flex items-center gap-1 text-white/70 text-xs font-body mt-1">
                        <MapPin className="w-3 h-3" />
                        {image.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}