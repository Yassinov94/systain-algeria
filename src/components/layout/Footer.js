import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer({ dict, lang }) {
  return (
    <footer className="bg-dark-deep text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image
              src="/images/logos/logo.png"
              alt="Systain Algeria"
              width={140}
              height={40}
              className="h-9 w-auto mb-5"
            />
            <p className="text-sm leading-relaxed text-white/60">
              {dict.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-primary font-semibold text-sm uppercase tracking-wider mb-5">
              {dict.footer.contact_title}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{dict.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={`tel:${dict.footer.phone}`} className="hover:text-primary transition-colors">
                  {dict.footer.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={`mailto:${dict.footer.email}`} className="hover:text-primary transition-colors">
                  {dict.footer.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold text-sm uppercase tracking-wider mb-5">
              {dict.footer.hours_title}
            </h4>
            <div className="flex items-start gap-3 text-sm">
              <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p>{dict.footer.hours_days}</p>
                <p>{dict.footer.hours_time}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-primary font-semibold text-sm uppercase tracking-wider mb-5">
              {dict.footer.newsletter_title}
            </h4>
            <p className="text-sm text-white/60 mb-4">{dict.footer.newsletter_text}</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={dict.footer.newsletter_placeholder}
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                {dict.footer.newsletter_button}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-xs text-white/40">
            {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
