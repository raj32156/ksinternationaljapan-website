import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#0d0d0f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-red-300">KS International Japan</p>
          <h2 className="mt-4 max-w-sm text-2xl font-semibold leading-tight">
            Practical, defense-focused cybersecurity education for learners and organizations.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            Professional cybersecurity services and defense-focused training for companies, institutions,
            and organizations strengthening digital resilience across Japan.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/90">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <p>Email: info@ksinternationaljapan.com</p>
            <p>Phone (Japan): +81 804 168 4443</p>
            <p>Office Region: Tokyo, Japan</p>
            <p>Working Hours: Mon-Fri 9:00 AM - 6:00 PM JST</p>
            <p>Services, Partnerships, Security Audits, Support & Training</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/90">Quick Links</p>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <Link to="/services" className="transition hover:text-red-300">
              Services
            </Link>
            <Link to="/programs" className="transition hover:text-red-300">
              Programs
            </Link>
            <Link to="/stories" className="transition hover:text-red-300">
              Case Studies
            </Link>
            <Link to="/contact" className="transition hover:text-red-300">
              Book Training Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
