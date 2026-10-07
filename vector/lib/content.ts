/**
 * Site content lives here so copy, metrics and testimonials can be
 * swapped for real data without touching any component code.
 */
import {
  BarChart3,
  Gauge,
  LayoutTemplate,
  Megaphone,
  PenTool,
  Search,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "VECTOR",
  tagline: "Digital Marketing & Growth Agency",
  url: "https://vector.digital",
  email: "hello@vector.digital",
  description:
    "VECTOR is a digital growth agency. Strategy, creative, and performance marketing engineered to help ambitious brands grow faster.",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export const services: Service[] = [
  {
    title: "Performance Marketing",
    description: "Paid media built around unit economics, not vanity metrics.",
    icon: Gauge,
    items: ["Paid search", "Paid social", "Campaign optimization", "Conversion-focused advertising"],
  },
  {
    title: "SEO & Organic Growth",
    description: "Compounding visibility that keeps working while you sleep.",
    icon: Search,
    items: ["Technical SEO", "Content strategy", "Keyword strategy", "Organic growth"],
  },
  {
    title: "Social Media",
    description: "Content and communities that earn attention, not rent it.",
    icon: Megaphone,
    items: ["Social strategy", "Content creation", "Community growth", "Paid social"],
  },
  {
    title: "Brand & Creative",
    description: "Distinctive identities and creative designed to convert.",
    icon: PenTool,
    items: ["Brand strategy", "Visual identity", "Creative campaigns", "Ad creatives"],
  },
  {
    title: "Web & Conversion",
    description: "Fast, focused experiences that turn visitors into customers.",
    icon: LayoutTemplate,
    items: ["Landing pages", "Website design", "CRO", "Analytics"],
  },
  {
    title: "Strategy & Analytics",
    description: "Clear roadmaps and measurement you can make decisions on.",
    icon: BarChart3,
    items: ["Growth strategy", "Marketing analytics", "Attribution", "Reporting"],
  },
];

/** Demo metrics — replace with verified figures before launch. */
export type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  label: string;
  /** Normalised points for the sparkline under each figure. */
  trend: number[];
};

export const stats: Stat[] = [
  { value: 3.8, decimals: 1, suffix: "x", label: "Average ROAS", trend: [2, 3, 2.6, 4, 3.8, 5, 6.2, 7] },
  { value: 147, prefix: "+", suffix: "%", label: "Organic Traffic", trend: [1, 1.4, 2, 2.2, 3.4, 4.1, 5.5, 7] },
  { value: 62, suffix: "%", label: "Lower Acquisition Cost", trend: [7, 6.4, 6.6, 5, 4.2, 3.6, 2.4, 2] },
  { value: 24, suffix: "M+", label: "Ad Impressions", trend: [1, 2, 2.4, 3.6, 4, 5.2, 6, 7] },
];

export type CaseStudy = {
  sector: string;
  title: string;
  metric: string;
  metricLabel: string;
  summary: string;
  services: string[];
  visual: "commerce" | "saas" | "organic";
};

export const caseStudies: CaseStudy[] = [
  {
    sector: "E-commerce Brand",
    title: "Rebuilding a DTC growth engine from the funnel up",
    metric: "+184%",
    metricLabel: "Revenue Growth",
    summary:
      "A full-funnel rebuild pairing new creative systems with a conversion-first storefront.",
    services: ["Performance Marketing", "CRO", "Creative"],
    visual: "commerce",
  },
  {
    sector: "SaaS Company",
    title: "Turning paid acquisition into a predictable pipeline",
    metric: "3.4x",
    metricLabel: "ROAS",
    summary: "Intent-led search, sharper paid social and landing pages built per audience.",
    services: ["Paid Search", "Paid Social", "Landing Pages"],
    visual: "saas",
  },
  {
    sector: "Consumer Brand",
    title: "Building organic demand that compounds",
    metric: "+126%",
    metricLabel: "Organic Growth",
    summary: "A content and search strategy that made the brand the answer in its category.",
    services: ["SEO", "Content", "Social"],
    visual: "organic",
  },
];

export const principles = [
  {
    title: "Strategy First",
    body: "We start with the business problem, not the marketing channel.",
  },
  {
    title: "Creative That Performs",
    body: "Creative isn't decoration. It's a growth engine.",
  },
  {
    title: "Data Driven",
    body: "Every decision is connected to measurable outcomes.",
  },
  {
    title: "Continuous Optimization",
    body: "We test, learn, improve, and scale.",
  },
];

export const processSteps = [
  { title: "Discover", body: "Understand the business, audience, market, and opportunity." },
  { title: "Strategize", body: "Build a clear growth strategy and roadmap." },
  { title: "Launch", body: "Execute campaigns, creative, content, and digital experiences." },
  { title: "Optimize", body: "Analyze performance and continuously improve." },
  { title: "Scale", body: "Double down on what works and accelerate growth." },
];

/** Placeholder testimonials — replace with real, approved client quotes. */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "VECTOR completely changed the way we approach digital growth. The results speak for themselves.",
    name: "Alex Morgan",
    role: "Head of Growth",
    company: "Example Commerce Co.",
  },
  {
    quote:
      "They think like operators. Every campaign was tied to a number we cared about, and we always knew why it was working.",
    name: "Sam Rivera",
    role: "VP Marketing",
    company: "Example SaaS Inc.",
  },
  {
    quote:
      "The creative finally looks like the brand we wanted to be — and it performs better than anything we ran before.",
    name: "Jordan Lee",
    role: "Founder & CEO",
    company: "Example Consumer Brand",
  },
];

export const capabilities = [
  "Paid Search",
  "Paid Social",
  "Technical SEO",
  "Content Strategy",
  "Brand Identity",
  "Ad Creative",
  "Landing Pages",
  "CRO",
  "Attribution",
  "Marketing Analytics",
  "Community",
  "Growth Strategy",
];

export const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
] as const;
