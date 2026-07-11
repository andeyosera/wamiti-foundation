"use client";

import { useState } from "react";
import { Heart, Users, Leaf, CheckCircle, Send } from "lucide-react";

const areaOptions = [
  "Shinoyi",
  "Shikomari",
  "Both Areas",
  "Remote / Online Support",
];

const skillOptions = [
  "Tree Planting & Conservation",
  "Community Outreach",
  "Teaching & Mentorship",
  "Healthcare Support",
  "Construction & Labour",
  "Photography & Media",
  "Administration & Office",
  "Other",
];

export default function VolunteerPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    area: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setSuccess(true);
      setForm({ name: "", email: "", phone: "", skills: "", area: "" });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-primary to-purple-wamiti text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-white font-body text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Join Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Become a{" "}
            <span className="text-gold-light">Volunteer</span>
          </h1>
          <p className="text-white/70 font-body leading-relaxed max-w-2xl mx-auto">
            You don't need much — just a willing heart. Whether you have
            an hour or a season to give, there is a place for you in the
            Wamiti family.
          </p>
        </div>
      </section>

      {/* WHY VOLUNTEER */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: Leaf,
              title: "Make a Real Difference",
              desc: "Your hands and time directly change lives in Shinoyi Shikomari and beyond.",
              color: "from-primary to-primary-dark",
            },
            {
              icon: Users,
              title: "Join a Community",
              desc: "Become part of a warm, purpose-driven family rooted in genuine care.",
              color: "from-purple-wamiti to-purple-dark",
            },
            {
              icon: Heart,
              title: "Grow as You Give",
              desc: "Gain skills, friendships, and a deeper connection to your community.",
              color: "from-gold to-gold-dark",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="card p-8 hover:-translate-y-1 transition-transform duration-300 group"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-navy mb-3">{item.title}</h3>
              <p className="text-navy/60 font-body text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VOLUNTEER FORM */}
      <section className="section-padding bg-lavender">
        <div className="max-w-2xl mx-auto">
          <div className="card p-8 md:p-10">
            {success ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-wamiti rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  Welcome to the Family! 🌿
                </h3>
                <p className="text-navy/60 font-body text-sm leading-relaxed">
                  Thank you for signing up to volunteer. We will be in
                  touch soon with next steps. Together we grow!
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 btn-outline"
                >
                  Sign Up Another Person
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-navy mb-2">
                    Volunteer Sign-Up
                  </h2>
                  <p className="text-navy/50 font-body text-sm">
                    Fill in your details and we'll reach out shortly.
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 text-sm font-body px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                {[
                  { name: "name", label: "Full Name", type: "text", placeholder: "Your full name", required: true },
                  { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com", required: true },
                  { name: "phone", label: "Phone Number", type: "tel", placeholder: "+254 700 000 000", required: true },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-navy mb-2 font-body">
                      {field.label} <span className="text-primary">*</span>
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full border border-lavender-dark rounded-xl px-4 py-3 font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-navy mb-2 font-body">
                    Area of Interest{" "}
                    <span className="text-navy/40 font-normal">(optional)</span>
                  </label>
                  <select
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    className="w-full border border-lavender-dark rounded-xl px-4 py-3 font-body text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
                  >
                    <option value="">Select an area...</option>
                    {areaOptions.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2 font-body">
                    Skills / How You'd Like to Help{" "}
                    <span className="text-navy/40 font-normal">(optional)</span>
                  </label>
                  <select
                    name="skills"
                    value={form.skills}
                    onChange={handleChange}
                    className="w-full border border-lavender-dark rounded-xl px-4 py-3 font-body text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
                  >
                    <option value="">Select a skill...</option>
                    {skillOptions.map((skill) => (
                      <option key={skill} value={skill}>{skill}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? "Submitting..." : <><Send className="w-4 h-4" /> Sign Me Up</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}