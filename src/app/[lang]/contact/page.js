import { getDictionary } from "../dictionaries";
import { Phone, Mail, MapPin } from "lucide-react";

export default async function ContactPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.contact;

  return (
    <>
      <section className="relative py-24 bg-dark-slate text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{d.title}</h1>
          <p className="text-white/70 max-w-2xl mx-auto">{d.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-heading mb-1">{d.call}</h3>
                  <a href={`tel:${d.phone}`} className="text-foreground/70 hover:text-primary transition-colors">
                    {d.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-heading mb-1">{d.email_label}</h3>
                  <a href={`mailto:${d.email}`} className="text-foreground/70 hover:text-primary transition-colors">
                    {d.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-heading mb-1">{d.visit}</h3>
                  <p className="text-foreground/70">{d.address}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-foreground/70 mb-6">{d.form_intro}</p>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-heading mb-1.5">
                        {d.form.name}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-heading mb-1.5">
                        {d.form.company}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-heading mb-1.5">
                        {d.form.email}
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-heading mb-1.5">
                        {d.form.phone}
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-heading mb-1.5">
                      {d.form.message}
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3.5 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors"
                  >
                    {d.form.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
