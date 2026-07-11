"use client";

import { useState } from "react";
import { Heart, Smartphone, CheckCircle, Leaf, GraduationCap, TreePine, Users } from "lucide-react";

const presetAmounts = [100, 500, 1000, 2500, 5000, 10000];

export default function ContributePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    customAmount: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectAmount = (amount: number) => {
    setForm({ ...form, amount: amount.toString(), customAmount: "" });
  };

  const finalAmount = form.customAmount
    ? parseInt(form.customAmount)
    : parseInt(form.amount);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!finalAmount || finalAmount < 1) {
      setError("Please select or enter a valid amount.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/mpesa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          amount: finalAmount,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setSuccess(true);
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
            Give Back
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Make a{" "}
            <span className="text-gold-light">Contribution</span>
          </h1>
          <p className="text-white/70 font-body leading-relaxed max-w-xl mx-auto">
            Every shilling you give goes directly into the communities of
            Shinoyi Shikomari — planting trees, uplifting families, and
            building hope that lasts.
          </p>
        </div>
      </section>

      {/* CONTRIBUTION FORM */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left — Why Give */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-navy">Your Impact</h2>
            <div className="space-y-4">
              {[
                {
                  icon: TreePine,
                  amount: "KES 100",
                  impact: "Plants 2 indigenous trees in Shikomari",
                  color: "from-primary to-primary-dark",
                },
                {
                  icon: GraduationCap,
                  amount: "KES 500",
                  impact: "Provides a child with school supplies for a term",
                  color: "from-purple-wamiti to-purple-dark",
                },
                {
                  icon: Heart,
                  amount: "KES 1,000",
                  impact: "Feeds a family for a week through our food program",
                  color: "from-gold to-gold-dark",
                },
                {
                  icon: Users,
                  amount: "KES 5,000",
                  impact: "Funds a youth skills training session",
                  color: "from-primary to-purple-wamiti",
                },
                {
                  icon: Leaf,
                  amount: "KES 10,000",
                  impact: "Contributes to a community borehole project",
                  color: "from-navy to-primary",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shrink-0`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-primary text-sm">
                      {item.amount}
                    </span>
                    <p className="text-navy/60 font-body text-sm">
                      {item.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 card-gradient p-6 bg-gradient-to-br from-navy to-primary">
              <Smartphone className="w-6 h-6 text-gold-light mb-3" />
              <h4 className="font-semibold text-white mb-2">Pay via M-Pesa</h4>
              <p className="text-white/70 font-body text-sm leading-relaxed">
                After submitting, you'll receive an M-Pesa prompt on your
                phone. Simply enter your PIN to complete the contribution.
                Safe, fast, and secure. 🔒
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="card p-8">
            {success ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-wamiti rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  Thank You! 🌿
                </h3>
                <p className="text-navy/60 font-body text-sm leading-relaxed">
                  Your M-Pesa prompt has been sent. Please check your phone
                  and enter your PIN to complete the contribution. You are
                  making a real difference!
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 btn-outline"
                >
                  Make Another Contribution
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-bold text-navy mb-6">
                  Your Details
                </h2>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 text-sm font-body px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                {[
                  { name: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                  { name: "phone", label: "M-Pesa Phone Number", type: "tel", placeholder: "0712 345 678" },
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
                      required
                      placeholder={field.placeholder}
                      className="w-full border border-lavender-dark rounded-xl px-4 py-3 font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
                    />
                  </div>
                ))}

                {/* Preset Amounts */}
                <div>
                  <label className="block text-sm font-medium text-navy mb-3 font-body">
                    Select Amount (KES) <span className="text-primary">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => selectAmount(amount)}
                        className={`py-2 px-3 rounded-xl text-sm font-body font-medium border transition-all duration-200 ${
                          form.amount === amount.toString() && !form.customAmount
                            ? "bg-gradient-to-r from-primary to-purple-wamiti text-white border-transparent"
                            : "border-lavender-dark text-navy hover:border-primary hover:text-primary"
                        }`}
                      >
                        {amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    name="customAmount"
                    value={form.customAmount}
                    onChange={handleChange}
                    placeholder="Or enter custom amount"
                    min="1"
                    className="w-full border border-lavender-dark rounded-xl px-4 py-3 font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
                  />
                </div>

                {finalAmount > 0 && (
                  <div className="bg-lavender rounded-xl px-4 py-3">
                    <p className="text-primary font-body text-sm font-medium">
                      You are contributing:{" "}
                      <span className="font-bold">
                        KES {finalAmount.toLocaleString()}
                      </span>
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    "Sending M-Pesa Prompt..."
                  ) : (
                    <><Heart className="w-4 h-4" /> Contribute Now</>
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