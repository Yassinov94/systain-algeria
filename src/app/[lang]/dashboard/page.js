import { getDictionary } from "../dictionaries";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { FileText, Plus, BarChart3, Leaf } from "lucide-react";

export default async function DashboardPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  let user = null;
  try {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    user = data?.user;
  } catch {
    // Supabase not configured
  }
  const d = dict.dashboard;

  const stats = [
    { icon: FileText, label: d.esg_reports, value: "0", color: "bg-primary/10 text-primary" },
    { icon: BarChart3, label: "Carbon Footprint", value: "—", color: "bg-green-50 text-green-600" },
    { icon: Leaf, label: "ESG Score", value: "—", color: "bg-blue-50 text-blue-600" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-heading">{d.title}</h1>
          <p className="text-foreground/60">
            {d.welcome}, {user?.user_metadata?.company_name || user?.email}
          </p>
        </div>
        <Link
          href={`/${lang}/dashboard/esg-reports`}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-4 h-4" />
          {d.create_report}
        </Link>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <p className="text-sm text-foreground/60">{stat.label}</p>
            <p className="text-2xl font-bold text-heading mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
        <FileText className="w-12 h-12 text-muted mx-auto mb-4" />
        <p className="text-foreground/60 mb-4">{d.no_reports}</p>
        <Link
          href={`/${lang}/dashboard/esg-reports`}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-4 h-4" />
          {d.create_report}
        </Link>
      </div>
    </div>
  );
}
