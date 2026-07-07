"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Plus, X, Sparkles, Loader2 } from "lucide-react";

export default function NewProjectPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    area: "Shinoyi Shikomari Ward",
    impact: "",
    featured: false,
    imageUrls: [""],
  });
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");
  const [aiSuccess, setAiSuccess] = useState(false);

 const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    });
  };

  const handleImageUrl = (index: number, value: string) => {
    const updated = [...form.imageUrls];
    updated[index] = value;
    setForm({ ...form, imageUrls: updated });
  };

  const addImageUrl = () => {
    setForm({ ...form, imageUrls: [...form.imageUrls, ""] });
  };

  const removeImageUrl = (index: number) => {
    const updated = form.imageUrls.filter((_, i) => i !== index);
    setForm({ ...form, imageUrls: updated });
  };

  const generateStory = async () => {
    if (!form.title || !form.location) {
      setError("Please fill in the title and location before generating a story.");
      return;
    }
    setGenerating(true);
    setError("");
    setAiSuccess(false);

    try {
      const res = await fetch("/api/admin/generate-story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          location: form.location,
          area: form.area,
          impact: form.impact,
          description: form.description,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate story");

      setForm({ ...form, description: data.story });
      setAiSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setGenerating(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          imageUrls: form.imageUrls.filter((url) => url.trim() !== ""),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create project");

      router.push("/admin/projects");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <nav className="bg-forest text-white px-6 py-4 flex items-center justify-between">
        <Link
          href="/admin/projects"
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
        <span className="font-display font-bold">Wamiti Admin</span>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-forest mb-2">Add New Project</h1>
        <p className="text-forest/50 font-body text-sm mb-8">
          Fill in the details below. Use the AI button to generate a beautiful impact story automatically. ✨
        </p>

        <div className="card p-8">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm font-body px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-forest mb-2 font-body">
                Project Title <span className="text-amber-wamiti">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                placeholder="e.g. Shinoyi Community Borehole Project"
                className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-forest mb-2 font-body">
                  Location <span className="text-amber-wamiti">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Shinoyi"
                  className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-forest mb-2 font-body">
                  Area
                </label>
                <input
                  type="text"
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                  placeholder="e.g. Shinoyi Shikomari Ward"
                  className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-forest mb-2 font-body">
                Impact Statement
              </label>
              <input
                type="text"
                name="impact"
                value={form.impact}
                onChange={handleChange}
                placeholder="e.g. 500+ households with clean water access"
                className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white"
              />
            </div>

            {/* Description + AI Generator */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-forest font-body">
                  Project Story <span className="text-amber-wamiti">*</span>
                </label>
                <button
                  type="button"
                  onClick={generateStory}
                  disabled={generating}
                  className="flex items-center gap-1.5 bg-forest text-white text-xs font-body font-medium px-4 py-2 rounded-full hover:bg-forest-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {generating ? (
                    <>
                      <Loader2 className="w-3 h-3 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3 h-3" />
                      Generate with AI
                    </>
                  )}
                </button>
              </div>

              {aiSuccess && (
                <div className="bg-primary/10 border border-primary/20 text-primary text-xs font-body px-3 py-2 rounded-lg mb-2 flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  AI story generated! Feel free to edit it below.
                </div>
              )}

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                rows={8}
                placeholder="Describe the project... or click 'Generate with AI' above to auto-generate a beautiful story!"
                className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white resize-none"
              />
              <p className="text-forest/30 font-body text-xs mt-1">
                Tip: Fill in title, location and impact first for the best AI results.
              </p>
            </div>

            {/* Image URLs */}
            <div>
              <label className="block text-sm font-medium text-forest mb-2 font-body">
                Image URLs
              </label>
              <div className="space-y-2">
                {form.imageUrls.map((url, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => handleImageUrl(index, e.target.value)}
                      placeholder="https://... or /images/projects/photo.jpg"
                      className="flex-1 border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white"
                    />
                    {form.imageUrls.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeImageUrl(index)}
                        className="w-10 h-10 flex items-center justify-center rounded-xl border border-red-200 text-red-400 hover:bg-red-50 transition-colors mt-1.5"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={addImageUrl}
                className="mt-2 flex items-center gap-1 text-primary font-body text-sm hover:text-primary-dark transition-colors"
              >
                <Plus className="w-4 h-4" /> Add another image
              </button>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="featured"
                id="featured"
                checked={form.featured}
                onChange={handleChange}
                className="w-4 h-4 accent-primary"
              />
              <label
                htmlFor="featured"
                className="text-sm font-medium text-forest font-body"
              >
                Mark as Featured Project
              </label>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? "Saving..." : "Save Project"}
              </button>
              <Link
                href="/admin/projects"
                className="btn-outline flex-1 text-center"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}