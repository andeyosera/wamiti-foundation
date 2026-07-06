import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft, Users, Mail, Phone, MapPin } from "lucide-react";

export default async function VolunteersPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token || !verifyToken(token)) {
    redirect("/admin");
  }

  const volunteers = await prisma.volunteer.findMany({
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
        <h1 className="text-2xl font-bold text-forest mb-8">
          Volunteers ({volunteers.length})
        </h1>

        {volunteers.length === 0 ? (
          <div className="card p-12 text-center">
            <Users className="w-12 h-12 text-primary/30 mx-auto mb-4" />
            <p className="text-forest/40 font-body">No volunteers yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {volunteers.map((vol) => (
              <div key={vol.id} className="card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-forest">{vol.name}</h3>
                    <p className="text-forest/30 font-body text-xs mt-1">
                      {new Date(vol.createdAt).toLocaleDateString("en-KE", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <span className="bg-primary/10 text-primary text-xs font-body font-medium px-3 py-1 rounded-full">
                    Volunteer
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-forest/60 font-body text-sm">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    {vol.email}
                  </div>
                  <div className="flex items-center gap-2 text-forest/60 font-body text-sm">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    {vol.phone}
                  </div>
                  {vol.area && (
                    <div className="flex items-center gap-2 text-forest/60 font-body text-sm">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      {vol.area}
                    </div>
                  )}
                  {vol.skills && (
                    <div className="mt-3 bg-cream rounded-lg px-3 py-2">
                      <p className="text-forest/60 font-body text-xs">
                        <span className="font-medium text-forest">Skills:</span>{" "}
                        {vol.skills}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}