import Image from "next/image";
import { Clock, GraduationCap, CheckCircle } from "lucide-react";
import Link from "next/link";

interface CourseProps {
  name: string;
  fee: string;
  eligibility: string;
  duration: string;
  category: string;
  image: string;
}

const CourseCard = ({ name, fee, eligibility, duration, category, image }: CourseProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-900">{name}</h3>
          <span className="text-secondary font-bold text-lg">{fee}</span>
        </div>
        
        <div className="space-y-3 mb-6 flex-grow">
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <Clock size={16} className="text-primary" />
            <span>Duration: {duration}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <GraduationCap size={16} className="text-primary" />
            <span>Eligibility: {eligibility}</span>
          </div>
          <div className="flex items-start gap-2 text-slate-600 text-sm">
            <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
            <span>Regular & Distance Modes Available</span>
          </div>
        </div>
        
        <Link 
          href="/contact" 
          className="w-full text-center py-3 bg-slate-50 text-primary font-bold rounded-lg group-hover:bg-primary group-hover:text-white transition-colors border border-primary/10"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
