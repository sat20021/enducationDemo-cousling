import Image from "next/image";
import { PLACEMENTS } from "@/constants/data";
import { Briefcase, TrendingUp, Users, Award } from "lucide-react";

export default function PlacementPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Placements & Careers</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Our students are our pride. We ensure they get placed in top companies with lucrative packages.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, label: "Placement Rate", val: "95%" },
              { icon: TrendingUp, label: "Highest Package", val: "12 LPA" },
              { icon: Users, label: "Partner Companies", val: "100+" },
              { icon: Award, label: "Alumni Network", val: "5000+" },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} />
                </div>
                <div className="text-3xl font-bold text-slate-900">{stat.val}</div>
                <div className="text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Tie-ups */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Our Recruitment Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center">
            {PLACEMENTS.map((company, i) => (
              <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image src={company.logo} alt={company.company} width={150} height={80} className="mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/placement.png" alt="Success Students" fill className="object-cover" />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-tight">Preparing You for the <br /><span className="text-secondary">Professional World</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our training and placement cell works tirelessly to bridge the gap between academia and industry. From mock interviews to soft skills training, we cover it all.
              </p>
              <ul className="space-y-4">
                {[
                  "Personality Development Workshops",
                  "Resume Building Sessions",
                  "Industry Expert Guest Lectures",
                  "Internship Opportunities",
                  "On-campus Placement Drives"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-white text-xs font-bold">✓</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact" className="btn-secondary px-10 py-4 inline-block">Register for Placement Support</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
