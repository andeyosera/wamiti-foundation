import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft, Heart, Phone, Mail } from "lucide-react";

export default async function ContributionsPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token || !verifyToken(token)) {
    redirect("/admin");
  }

  const contributions = await prisma.contribution.findMany({
    orderBy: { createdAt: "desc" },
  });

  const totalCompleted = contributions
    .filter((c) => c.status === "completed")
    .reduce((sum, c) => sum + c.amount, 0);

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
            Contributions ({contributions.length})
          </h1>
          <div className="bg-primary/10 rounded-xl px-5 py-3 text-center">
            <p className="text-xs font-body text-forest/50 mb-1">
              Total Received
            </p>
            <p className="text-xl font-bold text-primary">
              KES {totalCompleted.toLocaleString()}
            </p>
          </div>
        </div>

        {contributions.length === 0 ? (
          <div className="card p-12 text-center">
            <Heart className="w-12 h-12 text-primary/30 mx-auto mb-4" />
            <p className="text-forest/40 font-body">No contributions yet.</p>
          </div>
        ) : (
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-cream">
                  <tr>
                    {["Name", "Contact", "Amount", "M-Pesa Code", "Status", "Date"].map(
                      (h) => (
                        <th
                          key={h}
                          className="text-left px-4 py-3 text-forest/60 font-body text-xs font-medium"
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream-dark">
                  {contributions.map((c) => (
                    <tr key={c.id} className="hover:bg-cream/50 transition-colors">
                      <td className="px-4 py-3">
                        <p className="font-medium text-forest text-sm">
                          {c.name}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-col gap-1">
                          <span className="flex items-center gap-1 text-forest/50 font-body text-xs">
                            <Mail className="w-3 h-3" /> {c.email}
                          </span>
                          <span className="flex items-center gap-1 text-forest/50 font-body text-xs">
                            <Phone className="w-3 h-3" /> {c.phone}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <p className="font-bold text-forest text-sm">
                          KES {c.amount.toLocaleString()}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="font-body text-xs text-forest/50">
                          {c.mpesaCode || "—"}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`text-xs font-body font-medium px-3 py-1 rounded-full ${
                            c.status === "completed"
                              ? "bg-green-100 text-green-700"
                              : c.status === "failed"
                              ? "bg-red-100 text-red-600"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {c.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-forest/40 font-body text-xs">
                          {new Date(c.createdAt).toLocaleDateString("en-KE", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}