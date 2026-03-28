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

export default function LoginPage() {
  const { lang } = useParams();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [dict, setDict] = useState(null);

  useState(() => {
    dictMap[lang]?.().then(setDict);
  }, [lang]);

  if (!dict) return null;
  const d = dict.auth;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
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
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Image
            src="/images/logos/logo-mobile.png"
            alt="Systain"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-heading">{d.login_title}</h1>
          <p className="text-foreground/60 mt-2">{d.login_subtitle}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-heading mb-1.5">
                {d.email}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-heading mb-1.5">
                {d.password}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors disabled:opacity-50"
            >
              {loading ? "..." : d.login_button}
            </button>
          </form>

          <p className="text-center text-sm text-foreground/60 mt-6">
            {d.no_account}{" "}
            <Link href={`/${lang}/auth/register`} className="text-primary font-medium hover:underline">
              {d.sign_up}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
