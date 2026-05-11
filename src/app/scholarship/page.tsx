import Image from "next/image";
import { GraduationCap, CheckCircle2, Award, Calendar } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export default function ScholarshipPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-20 text-center border-b">
        <div className="container-custom">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Empowering Merit</span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">Scholarships & Financial Aid</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We believe that financial constraints should never hinder a student&apos;s ambition. We offer various scholarship schemes for deserving candidates.
          </p>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Merit-Based",
                desc: "For students with exceptional academic records in 10th and 12th board exams.",
                per: "Up to 50% Off",
                icon: Award,
              },
              {
                title: "Need-Based",
                desc: "Financial assistance for students from economically weaker sections.",
                per: "Up to 30% Off",
                icon: GraduationCap,
              },
              {
                title: "Special Category",
                desc: "Scholarships for defense personnel wards and specially-abled students.",
                per: "Fixed Grant",
                icon: CheckCircle2,
              }
            ].map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] shadow-lg border border-slate-100 hover:border-primary transition-all group">
                <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <s.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{s.desc}</p>
                <div className="text-primary font-bold text-xl">{s.per}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="section-padding bg-slate-900 text-white overflow-hidden relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-tight">How to Apply for <br /><span className="text-secondary">Scholarship?</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Applying for a scholarship is easy. Candidates need to submit their previous academic records and income certificates along with the application form.
              </p>
              <div className="space-y-6">
                {[
                  "Fill out the Scholarship Application Form",
                  "Attach 10th/12th Marksheets",
                  "Submit Family Income Certificate (if applicable)",
                  "Personal Interview with Scholarship Committee",
                  "Approval and Fee Waiver Notification"
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-secondary font-bold">
                      {i + 1}
                    </div>
                    <span className="text-slate-200 font-medium">{step}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 p-6 bg-white/5 rounded-2xl border border-white/10">
                <Calendar className="text-secondary" />
                <span className="text-sm">Deadline: Scholarships are awarded on a first-come-first-serve basis for each session.</span>
              </div>
            </div>
            <div className="relative h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10">
              <Image src="/images/scholarship.png" alt="Scholarship Ceremony" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Check Your Eligibility</h2>
              <p className="text-slate-600">Enter your details and our team will assess your scholarship eligibility.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
