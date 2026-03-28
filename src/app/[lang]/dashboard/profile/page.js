import { getDictionary } from "../../dictionaries";
import { createClient } from "@/utils/supabase/server";
import { User, Building2, Mail, Phone } from "lucide-react";

export default async function ProfilePage({ params }) {
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
  const meta = user?.user_metadata || {};
  const d = dict.dashboard;

  const fields = [
    { icon: Mail, label: dict.auth.email, value: user?.email },
    { icon: Building2, label: dict.auth.company_name, value: meta.company_name || "—" },
    { icon: User, label: dict.auth.company_size, value: meta.company_size || "—" },
    { icon: Phone, label: dict.auth.phone, value: meta.phone || "—" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-heading mb-8">{d.profile}</h1>
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <div className="space-y-6">
          {fields.map((field, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <field.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted">{field.label}</p>
                <p className="font-medium text-heading">{field.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
