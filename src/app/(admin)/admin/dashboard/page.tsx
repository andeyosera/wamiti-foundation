export const dynamic = "force-dynamic";
export const revalidate = 0;
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import {
  FolderOpen,
  MessageSquare,
  Users,
  Heart,
  LogOut,
  Leaf,
  Plus,
} from "lucide-react";

export default async function DashboardPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token || !verifyToken(token)) {
    redirect("/admin");
  }

  const [projects, messages, volunteers, contributions] = await Promise.all([
    prisma.project.count(),
    prisma.message.count(),
    prisma.volunteer.count(),
    prisma.contribution.count(),
  ]);

  const recentMessages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  const recentVolunteers = await prisma.volunteer.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  const stats = [
    { label: "Projects", value: projects, icon: FolderOpen, href: "/admin/projects" },
    { label: "Messages", value: messages, icon: MessageSquare, href: "/admin/messages" },
    { label: "Volunteers", value: volunteers, icon: Users, href: "/admin/volunteers" },
    { label: "Contributions", value: contributions, icon: Heart, href: "/admin/contributions" },
  ];

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Admin Navbar */}
      <nav className="bg-forest text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold">Wamiti Admin</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-white/70 hover:text-white text-sm font-body">
            View Site
          </Link>
          <Link
            href="/api/admin/logout"
            className="flex items-center gap-1 text-white/70 hover:text-white text-sm font-body"
          >
            <LogOut className="w-4 h-4" /> Logout
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-forest mb-8">Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <Link key={i} href={stat.href}>
              <div className="card p-6 text-center hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-3xl font-bold text-forest">{stat.value}</p>
                <p className="text-forest/50 font-body text-sm">{stat.label}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Messages */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-forest">Recent Messages</h2>
              <Link
                href="/admin/messages"
                className="text-primary text-sm font-body hover:underline"
              >
                View All
              </Link>
            </div>
            <div className="space-y-3">
              {recentMessages.length === 0 ? (
                <p className="text-forest/40 font-body text-sm">No messages yet.</p>
              ) : (
                recentMessages.map((msg) => (
                  <div key={msg.id} className="border-b border-cream-dark pb-3">
                    <p className="font-medium text-forest text-sm">{msg.name}</p>
                    <p className="text-forest/50 font-body text-xs truncate">
                      {msg.message}
                    </p>
                    <p className="text-forest/30 font-body text-xs mt-1">
                      {new Date(msg.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Recent Volunteers */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-forest">Recent Volunteers</h2>
              <Link
                href="/admin/volunteers"
                className="text-primary text-sm font-body hover:underline"
              >
                View All
              </Link>
            </div>
            <div className="space-y-3">
              {recentVolunteers.length === 0 ? (
                <p className="text-forest/40 font-body text-sm">No volunteers yet.</p>
              ) : (
                recentVolunteers.map((vol) => (
                  <div key={vol.id} className="border-b border-cream-dark pb-3">
                    <p className="font-medium text-forest text-sm">{vol.name}</p>
                    <p className="text-forest/50 font-body text-xs">{vol.email}</p>
                    <p className="text-forest/30 font-body text-xs mt-1">
                      {vol.skills || "No skills specified"}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 card p-6">
          <h2 className="font-semibold text-forest mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/admin/projects/new" className="btn-primary text-sm py-2 px-5 flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Project
            </Link>
            <Link href="/admin/messages" className="btn-outline text-sm py-2 px-5">
              View Messages
            </Link>
            <Link href="/admin/volunteers" className="btn-outline text-sm py-2 px-5">
              View Volunteers
            </Link>
            <Link href="/admin/contributions" className="btn-outline text-sm py-2 px-5">
              View Contributions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}