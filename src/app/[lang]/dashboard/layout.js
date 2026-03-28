import { getDictionary } from "../dictionaries";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default async function DashboardLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/${lang}/auth/login`);
  }

  return (
    <div className="min-h-[80vh] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <DashboardSidebar dict={dict} lang={lang} user={user} />
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
