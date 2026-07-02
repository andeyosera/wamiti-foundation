"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-32 pb-16 bg-cream section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">
            We'd Love to Hear From You
          </h1>
          <p className="text-forest/60 font-body mt-4 max-w-xl mx-auto leading-relaxed">
            Whether you have a question, want to partner with us, or simply
            want to share a word of encouragement — our door is always open.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Shinoyi Shikomari Ward,\nKakamega County, Kenya",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@wamitifoundation.org",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+254 700 000 000",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest text-sm mb-1">
                      {item.label}
                    </p>
                    <p className="text-forest/60 font-body text-sm whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Warm note */}
            <div className="mt-10 bg-cream rounded-2xl p-6">
              <p className="text-forest/70 font-body text-sm leading-relaxed italic">
                "Every message we receive is a reminder that community is
                alive and caring. We read every one and we respond with
                the same warmth it was sent."
              </p>
              <p className="text-primary font-body text-xs font-medium mt-3">
                — Wamiti Foundation Team
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8">
            {success ? (
              <div className="text-center py-12">
                <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-forest mb-2">
                  Message Received!
                </h3>
                <p className="text-forest/60 font-body text-sm leading-relaxed">
                  Thank you for reaching out. We'll get back to you as
                  soon as possible.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 btn-outline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-bold text-forest mb-6">
                  Send a Message
                </h2>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 text-sm font-body px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-forest mb-2 font-body">
                    Full Name <span className="text-amber-wamiti">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest mb-2 font-body">
                    Email Address <span className="text-amber-wamiti">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest mb-2 font-body">
                    Phone Number{" "}
                    <span className="text-forest/40 font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+254 700 000 000"
                    className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest mb-2 font-body">
                    Message <span className="text-amber-wamiti">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}