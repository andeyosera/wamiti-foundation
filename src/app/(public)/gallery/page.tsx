export const dynamic = "force-dynamic";
export const revalidate = 0;

import Image from "next/image";
import { getSupabaseAdmin } from "@/lib/supabase";
import { MapPin, Images } from "lucide-react";
import Link from "next/link";

export default async function GalleryPage() {
  const supabaseAdmin = getSupabaseAdmin();

  if (!supabaseAdmin) {
    throw new Error("Supabase admin client unavailable");
  }

  const { data: projects } = await supabaseAdmin
    .from("Project")
    .select("*")
    .order("createdAt", { ascending: false });

  const allImages = (projects || []).flatMap((project) =>
    (project.imageUrls || [])
      .filter(
        (url: string) =>
          url &&
          url !== "N/A" &&
          (url.startsWith("/") || url.startsWith("http"))
      )
      .map((url: string) => ({
        url,
        title: project.title,
        location: project.location,
        projectId: project.id,
      }))
  );

  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-primary to-purple-wamiti text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-white font-body text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Our Gallery
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Moments of{" "}
            <span className="text-gold-light">Impact</span>
          </h1>
          <p className="text-white/70 font-body leading-relaxed max-w-2xl mx-auto">
            Every photograph tells a story of hope, effort, and community.
            These are the moments that remind us why we do what we do.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          {allImages.length === 0 ? (
            <div className="text-center py-20">
              <Images className="w-12 h-12 text-primary/30 mx-auto mb-4" />
              <p className="text-navy/50 font-body">
                Gallery coming soon. Check back shortly!
              </p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {allImages.map((image, i) => (
                <Link
                  key={i}
                  href={`/projects/${image.projectId}`}
                  className="break-inside-avoid card overflow-hidden group block"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={image.url}
                      alt={image.title}
                      width={600}
                      height={400}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-lavender text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-navy">
            Be Part of the Next Story
          </h2>
          <p className="text-navy/60 font-body mb-8 leading-relaxed">
            Every contribution creates a new moment worth capturing.
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