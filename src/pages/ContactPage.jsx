import { motion } from "framer-motion";
import Button from "../components/Button";
import Card from "../components/Card";
import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";

function ContactPage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageMeta
        title="Contact | KS International Japan"
        description="Book a training consultation for cybersecurity education, SOC development, blue team growth, or enterprise security workshops."
      />
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Book a Cybersecurity Training Consultation"
            description="For organizations, partners, and teams exploring security services, audits, support, and training."
            tone="light"
          />
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="bg-white text-[#111111]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-600">Our Contact Information</p>
            <div className="mt-8 space-y-5 text-sm leading-7 text-[#232328]">
              <p>Email: info@ksinternationaljapan.com</p>
              <p>Phone (Japan): +81 804 168 4443</p>
              <p>Office Region: Tokyo, Japan</p>
              <p>Working Hours: Mon-Fri 9:00 AM - 6:00 PM JST</p>
            </div>
            <div className="mt-8 rounded-[28px] border border-black/8 bg-[#f4f6f8] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-600">Inquiry Scope</p>
              <p className="mt-3 text-sm leading-7 text-[#3f3f46]">
                We handle inquiries about: Services, Partnerships, Security Audits, Support & Training.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#3f3f46]">
                Your information is safe with us. All messages are treated confidentially.
              </p>
            </div>
          </Card>

          <Card className="bg-white text-[#111111]">
            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-[#232328]">
                  Full Name
                  <input className="form-input" type="text" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[#232328]">
                  Email
                  <input className="form-input" type="email" placeholder="you@example.com" />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-[#232328]">
                  Phone / WhatsApp
                  <input className="form-input" type="text" placeholder="+81 804 168 4443" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[#232328]">
                  Interested In
                  <select className="form-input" defaultValue="Penetration Testing">
                    <option>Penetration Testing</option>
                    <option>Vulnerability Assessment</option>
                    <option>SOC & Network Monitoring</option>
                    <option>Digital Forensics</option>
                    <option>Cybersecurity Consultancy</option>
                    <option>Employee Security Training</option>
                    <option>Cloud Security Solutions</option>
                    <option>Mobile & App Security</option>
                    <option>IoT & Embedded Device Security</option>
                  </select>
                </label>
              </div>
              <label className="grid gap-2 text-sm font-medium text-[#232328]">
                Your Message
                <textarea
                  className="form-input min-h-36 resize-y"
                  placeholder="Tell us about your service requirement, audit need, partnership inquiry, or support request."
                />
              </label>
              <div className="pt-2">
                <Button type="button" className="shadow-[0_18px_35px_rgba(217,4,41,0.24)]">
                  Send Inquiry
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="overflow-hidden rounded-[36px] border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
          <iframe
            title="Security Training Location Map"
            src="https://www.google.com/maps?q=Tokyo%2C%20Japan&z=10&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </motion.main>
  );
}

export default ContactPage;
