import { CheckCircle2, FileText, ClipboardCheck, PhoneCall, HelpCircle } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export default function AdmissionsPage() {
  const steps = [
    { icon: PhoneCall, title: "Counseling", desc: "Speak with our expert counselors to choose the right course." },
    { icon: FileText, title: "Form Submission", desc: "Fill out the application form with necessary documents." },
    { icon: ClipboardCheck, title: "Verification", desc: "Our team will verify your eligibility and documents." },
    { icon: CheckCircle2, title: "Admission Confirmed", desc: "Receive your admission confirmation and fee details." },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-20 text-center border-b">
        <div className="container-custom">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">Join Us Today</span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">Admissions 2026-27</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Our admission process is simple, transparent, and student-friendly. Follow these steps to secure your future.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-20 right-20 h-0.5 bg-slate-200 -z-0" />
            
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 text-center flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center mb-6 shadow-xl transition-transform hover:scale-110">
                  <step.icon size={36} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-500">{step.desc}</p>
                <div className="mt-4 text-primary font-bold">Step 0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Required Documents</h2>
              <p className="text-slate-400">Keep these documents ready for a smooth admission process:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "10th Marksheet & Certificate",
                  "12th Marksheet & Certificate",
                  "Graduation Degree (for PG)",
                  "Aadhar Card Copy",
                  "Passport Size Photographs",
                  "Character Certificate",
                  "Transfer Certificate (TC)",
                  "Migration Certificate",
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-slate-200">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/5 p-10 rounded-3xl backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <HelpCircle className="text-secondary" size={32} />
                <h3 className="text-2xl font-bold">Need Help?</h3>
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed">
                If you have any doubts regarding eligibility, fee structure, or documentation, feel free to call our counseling team.
              </p>
              <div className="space-y-4">
                <a href="tel:7048982654" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-secondary transition-colors flex items-center justify-center">
                    <PhoneCall size={20} />
                  </div>
                  <span className="text-xl font-bold">7048982654</span>
                </a>
                <a href="tel:9508659034" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-secondary transition-colors flex items-center justify-center">
                    <PhoneCall size={20} />
                  </div>
                  <span className="text-xl font-bold">9508659034</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Start Your Application</h2>
              <p className="text-slate-600">Fill out the form below and our counselor will get back to you with all the details.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
