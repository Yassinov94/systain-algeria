"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { Plus, FileText, Trash2, Download, Loader2 } from "lucide-react";

const dictMap = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  fr: () => import("@/dictionaries/fr.json").then((m) => m.default),
  ar: () => import("@/dictionaries/ar.json").then((m) => m.default),
};

export default function ESGReportsPage() {
  const { lang } = useParams();
  const [dict, setDict] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [form, setForm] = useState({
    name: "",
    type: "carbon_footprint",
    description: "",
  });

  useEffect(() => {
    dictMap[lang]?.().then(setDict);
    loadReports();
  }, [lang]);

  const loadReports = async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("esg_reports")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setReports(data);
  };

  const generateReport = async (e) => {
    e.preventDefault();
    setGenerating(true);

    try {
      const res = await fetch(`/api/esg-report`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          type: form.type,
          description: form.description,
          lang,
        }),
      });

      if (res.ok) {
        await loadReports();
        setShowForm(false);
        setForm({ name: "", type: "carbon_footprint", description: "" });
      }
    } catch (err) {
      console.error(err);
    }

    setGenerating(false);
  };

  const deleteReport = async (id) => {
    const supabase = createClient();
    await supabase.from("esg_reports").delete().eq("id", id);
    setReports((prev) => prev.filter((r) => r.id !== id));
  };

  if (!dict) return null;
  const d = dict.dashboard;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-heading">{d.esg_reports}</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-4 h-4" />
          {d.create_report}
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
          <form onSubmit={generateReport} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-heading mb-1.5">
                  {d.report_name}
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-heading mb-1.5">
                  {d.report_type}
                </label>
                <select
                  value={form.type}
                  onChange={(e) => setForm((p) => ({ ...p, type: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm bg-white"
                >
                  {Object.entries(d.report_types).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-heading mb-1.5">
                {d.company_description}
              </label>
              <textarea
                value={form.description}
                onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                rows={4}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={generating}
              className="flex items-center gap-2 px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors disabled:opacity-50"
            >
              {generating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {d.generating}
                </>
              ) : (
                d.generate
              )}
            </button>
          </form>
        </div>
      )}

      {/* Reports List */}
      {reports.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
          <FileText className="w-12 h-12 text-muted mx-auto mb-4" />
          <p className="text-foreground/60">{d.no_reports}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="bg-white rounded-xl border border-gray-100 p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-heading">{report.name}</h3>
                  <p className="text-sm text-muted">
                    {d.report_types[report.type] || report.type} ·{" "}
                    {new Date(report.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => deleteReport(report.id)}
                  className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
