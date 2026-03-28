"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";

const dictMap = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  fr: () => import("@/dictionaries/fr.json").then((m) => m.default),
  ar: () => import("@/dictionaries/ar.json").then((m) => m.default),
};

export default function RegisterPage() {
  const { lang } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    companySize: "",
    phone: "",
    sector: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [dict, setDict] = useState(null);

  useState(() => {
    dictMap[lang]?.().then(setDict);
  }, [lang]);

  if (!dict) return null;
  const d = dict.auth;

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    const supabase = createClient();

    const { error: authError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          company_name: form.companyName,
          company_size: form.companySize,
          phone: form.phone,
          sector: form.sector,
        },
      },
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    router.push(`/${lang}/dashboard`);
    router.refresh();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <Image
            src="/images/logos/logo-mobile.png"
            alt="Systain"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-heading">{d.register_title}</h1>
          <p className="text-foreground/60 mt-2">{d.register_subtitle}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <form onSubmit={handleRegister} className="space-y-5">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                {error}
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-heading mb-1.5">
                  {d.company_name}
                </label>
                <input
                  type="text"
                  value={form.companyName}
                  onChange={handleChange("companyName")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-heading mb-1.5">
                  {d.company_size}
                </label>
                <select
                  value={form.companySize}
                  onChange={handleChange("companySize")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm bg-white"
                >
                  <option value="">—</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-1000">201-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-heading mb-1.5">
                {d.email}
              </label>
              <input
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-heading mb-1.5">
                  {d.phone}
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-heading mb-1.5">
                  {d.sector}
                </label>
                <input
                  type="text"
                  value={form.sector}
                  onChange={handleChange("sector")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-heading mb-1.5">
                {d.password}
              </label>
              <input
                type="password"
                value={form.password}
                onChange={handleChange("password")}
                required
                minLength={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-heading mb-1.5">
                {d.confirm_password}
              </label>
              <input
                type="password"
                value={form.confirmPassword}
                onChange={handleChange("confirmPassword")}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors disabled:opacity-50"
            >
              {loading ? "..." : d.register_button}
            </button>
          </form>

          <p className="text-center text-sm text-foreground/60 mt-6">
            {d.has_account}{" "}
            <Link href={`/${lang}/auth/login`} className="text-primary font-medium hover:underline">
              {d.sign_in}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
