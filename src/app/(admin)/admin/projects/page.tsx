import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft, Plus, FolderOpen, MapPin, Star } from "lucide-react";

export default async function AdminProjectsPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token || !verifyToken(token)) {
    redirect("/admin");
  }

  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-warm-white">
      <nav className="bg-forest text-white px-6 py-4 flex items-center justify-between">
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <span className="font-display font-bold">Wamiti Admin</span>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-forest">
            Projects ({projects.length})
          </h1>
          <Link
            href="/admin/projects/new"
            className="btn-primary text-sm py-2 px-5 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add Project
          </Link>
        </div>

        {projects.length === 0 ? (
          <div className="card p-12 text-center">
            <FolderOpen className="w-12 h-12 text-primary/30 mx-auto mb-4" />
            <p className="text-forest/40 font-body mb-4">No projects yet.</p>
            <Link href="/admin/projects/new" className="btn-primary text-sm">
              Add First Project
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card p-6 flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-forest">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="flex items-center gap-1 bg-amber-100 text-amber-700 text-xs font-body px-2 py-0.5 rounded-full">
                        <Star className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-forest/40 font-body text-xs mb-2">
                    <MapPin className="w-3 h-3" /> {project.location} —{" "}
                    {project.area}
                  </div>
                  <p className="text-forest/60 font-body text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/admin/projects/${project.id}/edit`}
                    className="btn-outline text-xs py-1.5 px-4"
                  >
                    Edit
                  </Link>
                  <Link
                    href={`/projects/${project.id}`}
                    target="_blank"
                    className="text-forest/40 hover:text-primary font-body text-xs"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}