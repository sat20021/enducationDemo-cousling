"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-xl text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-slate-600">Your enquiry has been received. Our counselor will call you shortly.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-primary font-bold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold mb-6">Request a Callback</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Full Name</label>
            <input
              required
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Phone Number</label>
            <input
              required
              type="tel"
              placeholder="Enter 10 digit number"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Select Course</label>
          <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none bg-white">
            <option>Choose a course</option>
            <option>B.Ed</option>
            <option>B.Pharma</option>
            <option>D.Pharma</option>
            <option>GNM Nursing</option>
            <option>MBA/MCA</option>
            <option>Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Message (Optional)</label>
          <textarea
            rows={4}
            placeholder="Tell us about your requirements..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
          ></textarea>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full btn-primary py-4 flex items-center justify-center gap-2 text-lg disabled:opacity-70"
        >
          {loading ? "Sending..." : "Submit Enquiry"}
          {!loading && <Send size={20} />}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
