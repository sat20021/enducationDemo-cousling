"use client";

import { useState } from "react";
import { COURSES } from "@/constants/data";
import CourseCard from "@/components/courses/CourseCard";
import { Search, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "After 10th", "After 12th", "Graduation", "Post Graduation", "Distance/Online"];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Courses</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Choose from a wide variety of professional courses in Regular, Distance, and Online modes. Start your journey with us today.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="-mt-10 mb-12">
        <div className="container-custom">
          <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-lg"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-100 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="pb-24">
        <div className="container-custom">
          {filteredCourses.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              <AnimatePresence>
                {filteredCourses.map((course) => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CourseCard {...course} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                <Filter size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No courses found</h3>
              <p className="text-slate-500">Try adjusting your filters or search terms.</p>
              <button 
                onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
                className="mt-6 text-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Course Highlight */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Not finding what you&apos;re looking for?</h2>
            <p className="text-slate-400 text-lg mb-12">
              We offer many more courses including BA, B.Com, B.Sc, MA, MBA, MCA, D.El.Ed, Library & Information Science, and specialized vocational programs. All courses are available in Regular, Distance & Online modes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href={`tel:${COURSES[0].eligibility}`} className="btn-secondary px-10">Call for Full Course List</a>
              <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary px-10">Enquire Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
