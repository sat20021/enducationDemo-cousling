import Image from "next/image";
import { FACILITIES } from "@/constants/data";

export default function FacilitiesPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">World-Class Facilities</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            We provide a conducive environment for learning with state-of-the-art infrastructure and modern amenities.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {FACILITIES.map((facility, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={facility.image} 
                    alt={facility.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-6 left-8 text-white text-2xl font-bold">{facility.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 text-lg leading-relaxed">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Tour CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-secondary rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10 max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Take a Virtual Tour or Visit Us Today!</h2>
              <p className="text-white/80 text-xl leading-relaxed">
                Experience the atmosphere of our campus and see why we are the preferred choice for thousands of students.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-6 shrink-0">
              <a href="/gallery" className="btn-primary bg-white text-primary hover:bg-slate-100 px-10">View Gallery</a>
              <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary px-10">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
