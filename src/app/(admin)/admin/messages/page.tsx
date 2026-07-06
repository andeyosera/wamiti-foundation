import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";

export default async function MessagesPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token || !verifyToken(token)) {
    redirect("/admin");
  }

  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Admin Navbar */}
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
          Messages ({messages.length})
        </h1>

        {messages.length === 0 ? (
          <div className="card p-12 text-center">
            <Mail className="w-12 h-12 text-primary/30 mx-auto mb-4" />
            <p className="text-forest/40 font-body">No messages yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="card p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-forest">{msg.name}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="flex items-center gap-1 text-forest/50 font-body text-xs">
                        <Mail className="w-3 h-3" /> {msg.email}
                      </span>
                      {msg.phone && (
                        <span className="flex items-center gap-1 text-forest/50 font-body text-xs">
                          <Phone className="w-3 h-3" /> {msg.phone}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-forest/30 font-body text-xs">
                    {new Date(msg.createdAt).toLocaleDateString("en-KE", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <p className="text-forest/70 font-body text-sm leading-relaxed bg-cream rounded-xl p-4">
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}