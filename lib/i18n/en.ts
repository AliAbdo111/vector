/**
 * English copy. Every user-facing string lives in a dictionary so the site
 * can be translated (see ar.ts) and real data swapped in without touching
 * component code. Metrics, case studies and testimonials are demo content.
 */
const en = {
  meta: {
    title: "VECTOR — Digital Growth Agency",
    description:
      "VECTOR is a digital growth agency. Strategy, creative, and performance marketing engineered to help ambitious brands grow faster.",
    keywords: [
      "digital marketing agency",
      "growth agency",
      "performance marketing",
      "SEO",
      "paid social",
      "conversion rate optimization",
      "brand strategy",
    ],
    ogAlt: "VECTOR — We turn digital attention into measurable growth.",
  },

  common: {
    skipToContent: "Skip to content",
    home: "home",
    quoteOpen: "“",
    quoteClose: "”",
  },

  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "Process", href: "#process" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Let's Talk",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primaryLabel: "Primary",
    switchLanguage: "Switch language",
  },

  hero: {
    eyebrow: "Digital Growth Agency",
    /** Words animate in one by one; the last `accentCount` words get the gradient. */
    headline: ["We", "turn", "digital", "attention", "into", "measurable", "growth."],
    accentCount: 2,
    subheadline:
      "Strategy, creative, and performance marketing engineered to help ambitious brands grow faster.",
    primaryCta: "Start a Project",
    secondaryCta: "See Our Work",
    trust: "Trusted by ambitious brands, startups & growing businesses",
    capabilitiesHeading: "Capabilities",
    capabilities: [
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
    ],
    chips: {
      signal: { label: "Signal", value: "Intent ↑ 41%" },
      cpa: { label: "CPA", value: "−38% vs. target" },
      growth: { label: "Growth", value: "Scaling" },
    },
  },

  services: {
    eyebrow: "Services",
    title: "Everything you need to",
    titleAccent: "grow digitally.",
    intro:
      "One senior team across strategy, media, creative and technology — so every channel pulls in the same direction.",
    capabilitiesSuffix: "capabilities",
    items: [
      {
        title: "Performance Marketing",
        description: "Paid media built around unit economics, not vanity metrics.",
        items: ["Paid search", "Paid social", "Campaign optimization", "Conversion-focused advertising"],
      },
      {
        title: "SEO & Organic Growth",
        description: "Compounding visibility that keeps working while you sleep.",
        items: ["Technical SEO", "Content strategy", "Keyword strategy", "Organic growth"],
      },
      {
        title: "Social Media",
        description: "Content and communities that earn attention, not rent it.",
        items: ["Social strategy", "Content creation", "Community growth", "Paid social"],
      },
      {
        title: "Brand & Creative",
        description: "Distinctive identities and creative designed to convert.",
        items: ["Brand strategy", "Visual identity", "Creative campaigns", "Ad creatives"],
      },
      {
        title: "Web & Conversion",
        description: "Fast, focused experiences that turn visitors into customers.",
        items: ["Landing pages", "Website design", "CRO", "Analytics"],
      },
      {
        title: "Strategy & Analytics",
        description: "Clear roadmaps and measurement you can make decisions on.",
        items: ["Growth strategy", "Marketing analytics", "Attribution", "Reporting"],
      },
    ],
  },

  results: {
    eyebrow: "Results",
    title: "We measure growth in numbers.",
    subtitle: "Beautiful campaigns are nice. Measurable business results are better.",
    demoBadge: "Example / demo metrics for illustration",
    /** Demo metrics — replace with verified figures before launch. */
    stats: [
      { value: 3.8, decimals: 1, prefix: "", suffix: "x", label: "Average ROAS", trend: [2, 3, 2.6, 4, 3.8, 5, 6.2, 7] },
      { value: 147, decimals: 0, prefix: "+", suffix: "%", label: "Organic Traffic", trend: [1, 1.4, 2, 2.2, 3.4, 4.1, 5.5, 7] },
      { value: 62, decimals: 0, prefix: "", suffix: "%", label: "Lower Acquisition Cost", trend: [7, 6.4, 6.6, 5, 4.2, 3.6, 2.4, 2] },
      { value: 24, decimals: 0, prefix: "", suffix: "M+", label: "Ad Impressions", trend: [1, 2, 2.4, 3.6, 4, 5.2, 6, 7] },
    ],
  },

  work: {
    eyebrow: "Featured Work",
    title: "Work that moves the needle.",
    viewAll: "View All Work",
    servicesLabel: "Services:",
    illustrationLabel: "Abstract illustration of {sector} performance: {metric} {label}",
    disclaimer: "Case studies shown are illustrative examples. Client names withheld; figures are demo data.",
    mockups: {
      checkout: "Checkout CVR",
      revenue: "Revenue",
      roasByChannel: "ROAS by channel",
      channels: ["Search", "Social", "Landing", "Retarget"],
      organicSessions: "Organic sessions",
      keywords: ["category keyword", "long-tail guide", "comparison query"],
    },
    cases: [
      {
        sector: "E-commerce Brand",
        title: "Rebuilding a DTC growth engine from the funnel up",
        metric: "+184%",
        metricLabel: "Revenue Growth",
        summary: "A full-funnel rebuild pairing new creative systems with a conversion-first storefront.",
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
    ] as { sector: string; title: string; metric: string; metricLabel: string; summary: string; services: string[]; visual: "commerce" | "saas" | "organic" }[],
  },

  approach: {
    eyebrow: "Why VECTOR",
    title: "Marketing without the",
    titleAccent: "guesswork.",
    body: "A vector has two properties: magnitude and direction. We bring both — creative force, pointed precisely at the outcomes that matter to your business.",
    pillars: ["Precision", "Creativity", "Technology", "Growth"],
    principles: [
      { title: "Strategy First", body: "We start with the business problem, not the marketing channel." },
      { title: "Creative That Performs", body: "Creative isn't decoration. It's a growth engine." },
      { title: "Data Driven", body: "Every decision is connected to measurable outcomes." },
      { title: "Continuous Optimization", body: "We test, learn, improve, and scale." },
    ],
  },

  process: {
    eyebrow: "Process",
    title: "A clear path from insight to scale.",
    description: "Five deliberate stages. One compounding system.",
    steps: [
      { title: "Discover", body: "Understand the business, audience, market, and opportunity." },
      { title: "Strategize", body: "Build a clear growth strategy and roadmap." },
      { title: "Launch", body: "Execute campaigns, creative, content, and digital experiences." },
      { title: "Optimize", body: "Analyze performance and continuously improve." },
      { title: "Scale", body: "Double down on what works and accelerate growth." },
    ],
  },

  testimonials: {
    eyebrow: "Client Voices",
    title: "Partners, not vendors.",
    disclaimer: "Placeholder testimonials for demonstration — to be replaced with approved client quotes.",
    /** Placeholder testimonials — replace with real, approved client quotes. */
    items: [
      {
        quote: "VECTOR completely changed the way we approach digital growth. The results speak for themselves.",
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
    ],
  },

  cta: {
    eyebrow: "Let's build",
    title: "Ready to move your brand",
    titleAccent: "forward?",
    body: "Let's build a digital growth engine that actually delivers.",
    button: "Start a Conversation",
    emailSubject: "New project enquiry",
    replyNote: "Reply within one business day",
  },

  footer: {
    tagline: "Digital Marketing & Growth Agency",
    navigation: "Navigation",
    social: "Social",
    contact: "Contact",
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "X", href: "https://x.com" },
    ],
    newTab: "(opens in a new tab)",
    copyright: "© 2026 VECTOR. All rights reserved.",
    backToTop: "Back to top ↑",
  },
};

export type Dictionary = typeof en;
export default en;
