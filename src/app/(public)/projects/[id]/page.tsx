export const dynamic = "force-dynamic";
export const revalidate = 0;

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowLeft, Leaf, TrendingUp } from "lucide-react";
import { supabaseAdmin } from "@/lib/supabase";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const ProjectCharts = dynamic(
  () => import("@/components/sections/ProjectCharts"),
  { ssr: false }
);

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: project, error } = await supabaseAdmin
    .from("Project")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !project) return notFound();

  const getBudgetData = (title: string) => {
    if (title.toLowerCase().includes("chicken")) {
      return {
        total: 220000,
        items: [
          { label: "Chicks Purchase", amount: 75000, color: "#2563EB" },
          { label: "Feeds & Supplements", amount: 45000, color: "#7C3AED" },
          { label: "Chicken Coops", amount: 80000, color: "#F59E0B" },
          { label: "Veterinary Costs", amount: 20000, color: "#10B981" },
        ],
      };
    }
    if (title.toLowerCase().includes("school")) {
      return {
        total: 230000,
        items: [
          { label: "Shirts & Blouses", amount: 80000, color: "#2563EB" },
          { label: "Shorts & Skirts", amount: 60000, color: "#7C3AED" },
          { label: "Shoes", amount: 90000, color: "#F59E0B" },
          { label: "Books & Stationery", amount: 0, color: "#10B981" },
        ],
      };
    }
    if (title.toLowerCase().includes("tree")) {
      return {
        total: 300000,
        items: [
          { label: "Seedlings (10,000)", amount: 150000, color: "#2563EB" },
          { label: "Labor & Transport", amount: 80000, color: "#7C3AED" },
          { label: "Tools & Equipment", amount: 40000, color: "#F59E0B" },
          { label: "Maintenance", amount: 30000, color: "#10B981" },
        ],
      };
    }
    if (title.toLowerCase().includes("youth")) {
      return {
        total: 180000,
        items: [
          { label: "Training Materials", amount: 60000, color: "#2563EB" },
          { label: "Facilitator Fees", amount: 70000, color: "#7C3AED" },
          { label: "Equipment", amount: 30000, color: "#F59E0B" },
          { label: "Certification", amount: 20000, color: "#10B981" },
        ],
      };
    }
    return {
      total: 250000,
      items: [
        { label: "Materials", amount: 100000, color: "#2563EB" },
        { label: "Labor", amount: 80000, color: "#7C3AED" },
        { label: "Equipment", amount: 50000, color: "#F59E0B" },
        { label: "Administration", amount: 20000, color: "#10B981" },
      ],
    };
  };

  const budgetData = getBudgetData(project.title);

  const validImages = (project.imageUrls || []).filter(
    (url: string) =>
      url &&
      url !== "N/A" &&
      (url.startsWith("/") || url.startsWith("http"))
  );

  return (
    <>
      <section className="relative h-[60vh] mt-0">
        <Image
          src={validImages[0] || "/images/hero/homepage.jpg"}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent" />

        <div className="absolute top-24 left-6 md:left-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white font-body text-sm px-4 py-2 rounded-full transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>

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

      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-navy">
                  About This Project
                </h2>
                <p className="text-navy/70 font-body leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-6 text-navy flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Budget Breakdown
                </h2>
                <div className="card p-6">
                  <div className="space-y-4 mb-6">
                    {budgetData.items.map((item, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-sm font-body text-navy">
                              {item.label}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-navy">
                            KES {item.amount.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-lavender rounded-full h-2">
                          <div
                            className="h-2 rounded-full transition-all duration-500"
                            style={{
                              width: `${(item.amount / budgetData.total) * 100}%`,
                              backgroundColor: item.color,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-lavender-dark pt-4 flex justify-between items-center">
                    <span className="font-semibold text-navy">Total Budget</span>
                    <span className="text-xl font-bold gradient-text">
                      KES {budgetData.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <ProjectCharts budgetData={budgetData} />

              {validImages.length > 1 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-navy">
                    Project Gallery
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {validImages.slice(1).map((url: string, i: number) => (
                      <div
                        key={i}
                        className="relative h-48 rounded-xl overflow-hidden"
                      >
                        <Image
                          src={url}
                          alt={`${project.title} photo ${i + 2}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {project.impact && (
                <div className="card-gradient p-6 bg-gradient-to-br from-primary to-purple-wamiti">
                  <Leaf className="w-6 h-6 text-white mb-3" />
                  <h4 className="font-semibold text-white mb-2">Our Impact</h4>
                  <p className="text-white/90 font-body font-medium">
                    {project.impact}
                  </p>
                </div>
              )}

              <div className="card p-6">
                <MapPin className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-semibold text-navy mb-2">Location</h4>
                <p className="text-navy/60 font-body text-sm">{project.location}</p>
                <p className="text-navy/60 font-body text-sm">{project.area}</p>
              </div>

              <div className="card p-6">
                <TrendingUp className="w-6 h-6 text-purple-wamiti mb-3" />
                <h4 className="font-semibold text-navy mb-4">Budget Summary</h4>
                <div className="space-y-2">
                  {budgetData.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-navy/60 font-body text-xs">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-navy text-xs font-semibold">
                        KES {item.amount.toLocaleString()}
                      </span>
                    </div>
                  ))}
                  <div className="border-t border-lavender-dark pt-2 mt-2 flex justify-between">
                    <span className="text-navy font-semibold text-sm">Total</span>
                    <span className="text-primary font-bold text-sm">
                      KES {budgetData.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-gradient p-6 bg-gradient-to-br from-navy to-primary text-center">
                <h4 className="font-semibold text-white mb-2">Support This Work</h4>
                <p className="text-white/70 font-body text-sm mb-4">
                  Your contribution helps us do more of this.
                </p>
                <Link href="/contribute" className="btn-gold text-sm block text-center">
                  Contribute Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-lavender text-center">
        <h3 className="text-2xl font-bold mb-4">See More Projects</h3>
        <p className="text-navy/60 font-body mb-8">
          Explore all the ways Wamiti Foundation is growing hope across the ward.
        </p>
        <Link href="/projects" className="btn-primary">View All Projects</Link>
      </section>
    </>
  );
}