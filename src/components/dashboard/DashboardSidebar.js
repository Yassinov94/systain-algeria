"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { LayoutDashboard, FileText, User, LogOut } from "lucide-react";

export default function DashboardSidebar({ dict, lang, user }) {
  const pathname = usePathname();
  const router = useRouter();
  const d = dict.dashboard;

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push(`/${lang}`);
    router.refresh();
  };

  const links = [
    {
      href: `/${lang}/dashboard`,
      icon: LayoutDashboard,
      label: d.title,
    },
    {
      href: `/${lang}/dashboard/esg-reports`,
      icon: FileText,
      label: d.esg_reports,
    },
    {
      href: `/${lang}/dashboard/profile`,
      icon: User,
      label: d.profile,
    },
  ];

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <div className="mb-6">
          <p className="text-sm text-muted">{d.welcome},</p>
          <p className="font-medium text-heading truncate">
            {user?.user_metadata?.company_name || user?.email}
          </p>
        </div>

        <nav className="space-y-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:bg-gray-50 hover:text-heading"
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2.5 w-full rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            {d.logout}
          </button>
        </div>
      </div>
    </aside>
  );
}
