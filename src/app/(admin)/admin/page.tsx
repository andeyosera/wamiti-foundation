"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Leaf, Lock } from "lucide-react";

export default function AdminLoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");

      router.push("/admin/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-forest rounded-full flex items-center justify-center mx-auto mb-4">
            <Leaf className="w-7 h-7 text-white" />
          </div>
          <h1 className="font-display font-bold text-2xl text-forest">
            Wamiti Foundation
          </h1>
          <p className="text-forest/50 font-body text-sm mt-1">
            Admin Portal
          </p>
        </div>

        <div className="card p-8">
          <div className="flex items-center gap-2 mb-6">
            <Lock className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-forest">Sign In</h2>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm font-body px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-forest mb-2 font-body">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="admin@wamitifoundation.org"
                className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-forest mb-2 font-body">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
