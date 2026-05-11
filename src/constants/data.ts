export const SITE_NAME = "Jay Shree Shyam Group of Education";
export const TAGLINE = "Your Trusted Education Partner in Patna | Admissions Open 2026-27";
export const TAGLINE_HINDI = "पटना का विश्वसनीय शिक्षा केंद्र | नामांकन प्रारंभ 2026-27";

export const CONTACT_INFO = {
  phones: ["7048982654", "9508659034", "8969938923", "7903508640"],
  email: "info@jayshreeshyam.edu.in",
  address: "Patna, Bihar, India",
  whatsapp: "7048982654",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107238263!2d85.07338870195531!3d25.60817557053531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5842f0331003%3A0x10408c74579a4c83!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1715421234567!5m2!1sen!2sin",
};

export const SLIDES = [
  {
    image: "/images/hero_1.png",
    title: "Empowering Minds, <br /><span class='text-secondary'>Enriching Futures.</span>",
    titleHindi: "सशक्त मन, <br /><span class='text-secondary'>समृद्ध भविष्य।</span>",
    subtitle: "Your Trusted Education Partner in Patna | Admissions Open 2026-27",
    subtitleHindi: "पटना में आपका विश्वसनीय शिक्षा साथी | नामांकन प्रारंभ 2026-27",
    cta: "Explore Courses",
    ctaHindi: "कोर्स देखें",
    link: "/courses"
  },
  {
    image: "/images/hero_2.png",
    title: "Shape Your Career <br /><span class='text-secondary'>With Expert Guidance</span>",
    titleHindi: "विशेषज्ञ मार्गदर्शन के साथ <br /><span class='text-secondary'>अपना करियर संवारें</span>",
    subtitle: "Get admission in top colleges for B.Ed, B.Pharma, GNM, and more.",
    subtitleHindi: "B.Ed, B.Pharma, GNM और अन्य के लिए शीर्ष कॉलेजों में प्रवेश पाएं।",
    cta: "Apply Now",
    ctaHindi: "अभी आवेदन करें",
    link: "/admissions"
  },
  {
    image: "/images/classroom.png",
    title: "Modern Learning <br /><span class='text-secondary'>For Global Success</span>",
    titleHindi: "वैश्विक सफलता के लिए <br /><span class='text-secondary'>आधुनिक शिक्षा</span>",
    subtitle: "Regular, Distance & Online modes available for all courses.",
    subtitleHindi: "सभी पाठ्यक्रमों के लिए नियमित, दूरस्थ और ऑनलाइन मोड उपलब्ध हैं।",
    cta: "Contact Us",
    ctaHindi: "संपर्क करें",
    link: "/contact"
  }
];

export const COURSES = [
  {
    id: "bed",
    name: "B.Ed",
    fee: "₹64,000",
    eligibility: "Graduation with 50%",
    duration: "2 Years",
    category: "Graduation",
    image: "/images/teacher.png",
  },
  {
    id: "bpharma",
    name: "B.Pharma",
    fee: "₹78,000",
    eligibility: "12th PCB/PCM",
    duration: "4 Years",
    category: "After 12th",
    image: "/images/pharmacy.png",
  },
  {
    id: "dpharma",
    name: "D.Pharma",
    fee: "₹28,500",
    eligibility: "12th",
    duration: "2 Years",
    category: "After 12th",
    image: "/images/pharmacy.png",
  },
  {
    id: "gnm",
    name: "GNM Nursing",
    fee: "On Request",
    eligibility: "10+2 with 40%",
    duration: "3 Years",
    category: "After 12th",
    image: "/images/nursing.png",
  },
  {
    id: "ba",
    name: "BA",
    fee: "On Request",
    eligibility: "12th",
    duration: "3 Years",
    category: "Graduation",
    image: "/images/classroom.png",
  },
  {
    id: "bcom",
    name: "B.Com",
    fee: "On Request",
    eligibility: "12th",
    duration: "3 Years",
    category: "Graduation",
    image: "/images/classroom.png",
  },
  {
    id: "bsc",
    name: "B.Sc",
    fee: "On Request",
    eligibility: "12th",
    duration: "3 Years",
    category: "Graduation",
    image: "/images/classroom.png",
  },
  {
    id: "ma",
    name: "MA",
    fee: "On Request",
    eligibility: "Graduation",
    duration: "2 Years",
    category: "Post Graduation",
    image: "/images/classroom.png",
  },
  {
    id: "mba",
    name: "MBA",
    fee: "On Request",
    eligibility: "Graduation",
    duration: "2 Years",
    category: "Post Graduation",
    image: "/images/classroom.png",
  },
  {
    id: "mca",
    name: "MCA",
    fee: "On Request",
    eligibility: "BCA/B.Sc IT",
    duration: "2 Years",
    category: "Post Graduation",
    image: "/images/classroom.png",
  },
  {
    id: "deled",
    name: "D.El.Ed",
    fee: "On Request",
    eligibility: "12th with 50%",
    duration: "2 Years",
    category: "After 12th",
    image: "/images/teacher.png",
  },
  {
    id: "libsci",
    name: "Library & Information Science",
    fee: "On Request",
    eligibility: "Graduation",
    duration: "1 Year",
    category: "Graduation",
    image: "/images/classroom.png",
  },
];

export const TESTIMONIALS = [
  {
    name: "Rahul Kumar",
    role: "B.Ed Student",
    text: "The guidance provided here is exceptional. I found the admission process very smooth and transparent.",
    rating: 5,
  },
  {
    name: "Priya Singh",
    role: "B.Pharma Student",
    text: "Excellent facilities and supportive staff. Highly recommended for students in Patna.",
    rating: 5,
  },
  {
    name: "Amit Sharma",
    role: "MBA Aspirant",
    text: "Best education consultants in Patna. They helped me choose the right course for my career.",
    rating: 4,
  },
];

export const PLACEMENTS = [
  { company: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
  { company: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { company: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Logo.svg" },
  { company: "Sun Pharma", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Sun_Pharma_logo.svg" },
  { company: "Apollo Hospitals", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Apollo_Hospitals_Logo.svg/1200px-Apollo_Hospitals_Logo.svg.png" },
];

export const FACILITIES = [
  {
    title: "Modern Library",
    desc: "Digital and physical library with 10,000+ books and research papers.",
    image: "/images/library.png",
  },
  {
    title: "Computer Lab",
    desc: "High-speed internet and latest software for technical training.",
    image: "/images/computer_lab.png",
  },
  {
    title: "Science Labs",
    desc: "Well-equipped pharmacy and nursing labs for practical experience.",
    image: "/images/pharmacy.png",
  },
  {
    title: "Hostel Facility",
    desc: "Comfortable and safe accommodation for outstation students.",
    image: "/images/classroom.png",
  },
];

export const FAQS = [
  {
    q: "How can I apply for a course?",
    a: "You can apply by visiting our office in Patna or by filling out the 'Enquire Now' form on our website. Our counselor will contact you for the next steps.",
  },
  {
    q: "Is distance education available?",
    a: "Yes, we offer many courses in Regular, Distance, and Online modes to suit your needs.",
  },
  {
    q: "What is the fee for B.Ed?",
    a: "The standard fee for B.Ed is ₹64,000. However, it may vary based on the college and admission category.",
  },
  {
    q: "Do you provide placement assistance?",
    a: "Yes, we have a dedicated placement cell that helps students prepare for interviews and connects them with top companies.",
  },
];

