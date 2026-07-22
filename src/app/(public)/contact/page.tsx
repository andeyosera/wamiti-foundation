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
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-primary to-purple-wamiti text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-white font-body text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            We'd Love to{" "}
            <span className="text-gold-light">Hear From You</span>
          </h1>
          <p className="text-white/70 font-body max-w-xl mx-auto leading-relaxed">
            Whether you have a question, want to partner with us, or simply
            want to share a word of encouragement our door is always open.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-navy">Find Us</h2>
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Shinoyi Shikomari Ward,\nKakamega County, Kenya",
                  color: "from-primary to-primary-dark",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@wamitifoundation.org",
                  color: "from-purple-wamiti to-purple-dark",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+254 700 000 000",
                  color: "from-gold to-gold-dark",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shrink-0`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm mb-1">
                      {item.label}
                    </p>
                    <p className="text-navy/60 font-body text-sm whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 card p-6 bg-lavender border-none">
              <p className="text-navy/70 font-body text-sm leading-relaxed italic">
                "Every message we receive is a reminder that community is
                alive and caring. We read every one and respond with the
                same warmth it was sent."
              </p>
              <p className="text-primary font-body text-xs font-semibold mt-3">
                Julius Mulinya, Founder
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8">
            {success ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-wamiti rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  Message Received!
                </h3>
                <p className="text-navy/60 font-body text-sm leading-relaxed">
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
                <h2 className="text-xl font-bold text-navy mb-6">
                  Send a Message
                </h2>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 text-sm font-body px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                {[
                  { name: "name", label: "Full Name", type: "text", placeholder: "Your full name", required: true },
                  { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com", required: true },
                  { name: "phone", label: "Phone Number", type: "tel", placeholder: "+254 700 000 000", required: false },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-navy mb-2 font-body">
                      {field.label}{" "}
                      {field.required ? (
                        <span className="text-primary">*</span>
                      ) : (
                        <span className="text-navy/40 font-normal">(optional)</span>
                      )}
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
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full border border-lavender-dark rounded-xl px-4 py-3 font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? "Sending..." : <><Send className="w-4 h-4" /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}