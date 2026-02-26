import { ShoppingBag, Cpu, HeartPulse, Landmark, Plane, GraduationCap } from "lucide-react";

export interface Industry {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  expertise: string[];
  metric: string;
  metricLabel: string;
  icon: any;
  color: string;
}

export const industries: Industry[] = [
  {
    id: "ecommerce",
    title: "E-Commerce & D2C",
    subtitle: "Scaling Sales, Not Just Clicks",
    description: "We optimize complex product catalogs and category hierarchies to dominate high-intent shopping queries.",
    expertise: ["Inventory SEO", "Conversion Rate Optimization", "Revenue Attribution"],
    metric: "+140%",
    metricLabel: "Organic Revenue",
    icon: ShoppingBag,
    color: "from-orange-500 to-red-600"
  },
  {
    id: "saas",
    title: "SaaS & Tech",
    subtitle: "Product-Led Growth Engine",
    description: "Turning technical documentation into a lead generation machine through semantic topic clusters.",
    expertise: ["Topical Authority", "Lead Gen Funnels", "Technical SEO"],
    metric: "3.5x",
    metricLabel: "Trial Signups",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "healthcare",
    title: "Health & Wellness",
    subtitle: "E-E-A-T Driven Authority",
    description: "Navigating strict YMYL guidelines to build trust and visibility in the wellness and medical space.",
    expertise: ["Medical Review Logic", "Trust Signal Engineering", "Local Patient SEO"],
    metric: "85%",
    metricLabel: "Keyword Visibility",
    icon: HeartPulse,
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "fintech",
    title: "Fintech & Banking",
    subtitle: "Security Meets Search",
    description: "High-security digital platforms engineered for speed, compliance, and user acquisition.",
    expertise: ["Financial SEO", "App Store Optimization", "Security Audits"],
    metric: "62%",
    metricLabel: "Lower CAC",
    icon: Landmark,
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "travel",
    title: "Travel & Hospitality",
    subtitle: "Capturing Wanderlust",
    description: "Localized content strategies to capture travelers at the 'dreaming' and 'booking' stages.",
    expertise: ["Local Citations", "Visual Storytelling", "Booking Engine UX"],
    metric: "2.1M",
    metricLabel: "Annual Impressions",
    icon: Plane,
    color: "from-pink-500 to-rose-500"
  },
  {
    id: "edtech",
    title: "EdTech & Learning",
    subtitle: "Knowledge-First Scaling",
    description: "Structuring educational content to rank for long-tail queries and academic search terms.",
    expertise: ["Content Silos", "LMS Integration", "Platform Engineering"],
    metric: "+200%",
    metricLabel: "Student Enrollment",
    icon: GraduationCap,
    color: "from-yellow-500 to-orange-600"
  }
];