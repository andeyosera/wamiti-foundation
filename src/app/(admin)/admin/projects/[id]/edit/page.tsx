"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Plus, X, Trash2 } from "lucide-react";

export default function EditProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    area: "",
    impact: "",
    featured: false,
    imageUrls: [""],
  });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/projects/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
          title: data.title,
          description: data.description,
          location: data.location,
          area: data.area,
          impact: data.impact || "",
          featured: data.featured,
          imageUrls: data.imageUrls.length > 0 ? data.imageUrls : [""],
        });
        setFetching(false);
      });
  }, [params.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/projects/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          imageUrls: form.imageUrls.filter((url) => url.trim() !== ""),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update project");

      router.push("/admin/projects");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this project? This cannot be undone.")) return;

    try {
      const res = await fetch(`/api/projects/${params.id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete project");
      router.push("/admin/projects");
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (fetching) {
    return (
      <div className="min-h-screen bg-warm-white flex items-center justify-center">
        <p className="text-forest/40 font-body">Loading project...</p>
      </div>
    );
  }

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
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-forest">Edit Project</h1>
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 text-red-400 hover:text-red-600 font-body text-sm transition-colors"
          >
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        </div>

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
                className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-forest mb-2 font-body">
                Description <span className="text-amber-wamiti">*</span>
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white resize-none"
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
                  className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white"
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
                  className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white"
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
                className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white"
              />
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
                      className="flex-1 border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white"
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
                {loading ? "Saving..." : "Save Changes"}
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