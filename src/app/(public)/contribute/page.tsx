"use client";

import { useState } from "react";
import { Heart, Smartphone, CheckCircle, Leaf } from "lucide-react";

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
      <section className="pt-32 pb-16 bg-cream section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">
            Give Back
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Make a Contribution
          </h1>
          <p className="text-forest/60 font-body leading-relaxed max-w-xl mx-auto">
            Every shilling you give goes directly into the communities of
            Shinoyi Shikomari — planting trees, uplifting families, and
            building hope that lasts.
          </p>
        </div>
      </section>

      {/* CONTRIBUTION FORM */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left — Why Give */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Your Impact</h2>
            <div className="space-y-5">
              {[
                {
                  amount: "KES 100",
                  impact: "Plants 2 indigenous trees in Shikomari",
                },
                {
                  amount: "KES 500",
                  impact: "Provides a child with school supplies for a term",
                },
                {
                  amount: "KES 1,000",
                  impact: "Feeds a family for a week through our food program",
                },
                {
                  amount: "KES 5,000",
                  impact: "Funds a youth skills training session",
                },
                {
                  amount: "KES 10,000",
                  impact: "Contributes to a community borehole project",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Leaf className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-semibold text-amber-wamiti text-sm">
                      {item.amount}
                    </span>
                    <p className="text-forest/60 font-body text-sm">
                      {item.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-forest rounded-2xl p-6 text-white">
              <Smartphone className="w-6 h-6 text-primary-light mb-3" />
              <h4 className="font-semibold mb-2">Pay via M-Pesa</h4>
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
                <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-forest mb-2">
                  Thank You! 🌿
                </h3>
                <p className="text-forest/60 font-body text-sm leading-relaxed">
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
                <h2 className="text-xl font-bold text-forest mb-6">
                  Your Details
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
                    M-Pesa Phone Number{" "}
                    <span className="text-amber-wamiti">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="0712 345 678"
                    className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white"
                  />
                </div>

                {/* Preset Amounts */}
                <div>
                  <label className="block text-sm font-medium text-forest mb-3 font-body">
                    Select Amount (KES){" "}
                    <span className="text-amber-wamiti">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => selectAmount(amount)}
                        className={`py-2 px-3 rounded-xl text-sm font-body font-medium border transition-all duration-200 ${
                          form.amount === amount.toString() &&
                          !form.customAmount
                            ? "bg-primary text-white border-primary"
                            : "border-cream-dark text-forest hover:border-primary hover:text-primary"
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
                    className="w-full border border-cream-dark rounded-xl px-4 py-3 font-body text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-warm-white"
                  />
                </div>

                {finalAmount > 0 && (
                  <div className="bg-primary/10 rounded-xl px-4 py-3">
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
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    "Sending M-Pesa Prompt..."
                  ) : (
                    <>
                      Contribute Now <Heart className="w-4 h-4" />
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