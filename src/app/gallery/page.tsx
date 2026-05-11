import Image from "next/image";

export default function GalleryPage() {
  const images = [
    { src: "/images/hero.png", title: "Graduation Ceremony" },
    { src: "/images/classroom.png", title: "Modern Classrooms" },
    { src: "/images/teacher.png", title: "Expert Faculty" },
    { src: "/images/pharmacy.png", title: "Pharmacy Lab" },
    { src: "/images/nursing.png", title: "Nursing Training" },
    { src: "/images/classroom.png", title: "Interactive Learning" },
    { src: "/images/hero.png", title: "Student Success" },
    { src: "/images/pharmacy.png", title: "Practical Sessions" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            A glimpse into life at Jay Shree Shyam Group of Education. From classrooms to labs, see how we empower students.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <div 
                key={i} 
                className="relative h-80 rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 className="text-white text-xl font-bold">{img.title}</h3>
                  <p className="text-slate-300 text-sm mt-2">Jay Shree Shyam Group of Education</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 border-t">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Experience Excellence Yourself</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">Visit our campus in Patna for a personalized counseling session and see our facilities firsthand.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact" className="btn-primary px-10">Visit Campus</a>
            <a href="/contact#enquire" className="btn-outline px-10">Request a Tour</a>
          </div>
        </div>
      </section>
    </div>
  );
}
