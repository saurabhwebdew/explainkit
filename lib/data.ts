export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#showcase" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
];

// NOTE: these are placeholder wordmarks standing in for the marquee layout.
// Swap for verified, rights-cleared logos of actual customers before this ships publicly —
// displaying real company names as trust signals without a genuine relationship is a
// false-endorsement risk, not just a design choice.
export const trustedBy = [
  "HubSpot",
  "Salesforce",
  "Slack",
  "Shopify",
  "Monday",
  "Zapier",
  "Stripe",
  "Notion",
  "Figma",
];

export const services = [
  {
    code: "EX",
    title: "Explainer Videos",
    description:
      "60 seconds that turn your onboarding call into something people watch before they ever talk to sales.",
    bullets: ["Script & storyboard included", "2D & character animation", "Whiteboard style available"],
  },
  {
    code: "PD",
    title: "Interactive Product Demos",
    description:
      "Clickable walkthroughs and demo videos that let prospects experience the product without a login.",
    bullets: ["Real UI capture", "Guided click-paths", "Embeds on any landing page"],
  },
  {
    code: "MG",
    title: "Motion Graphics",
    description:
      "Data, diagrams, and UI given enough motion to hold attention in a feed built to ignore everything.",
    bullets: ["Brand-matched design system", "Social & ad cutdowns", "Loop-ready formats"],
  },
  {
    code: "AI",
    title: "AI Content Creation",
    description:
      "AI-assisted scripting, voiceover, and iteration so revisions take hours, not another two-week cycle.",
    bullets: ["AI voiceover in 40+ languages", "Rapid concept variants", "Human-directed, not autopilot"],
  },
];

export const bento = [
  {
    title: "Faster Production",
    description: "First cut in 5 business days, not 5 weeks.",
    size: "lg",
    metric: "5 days",
  },
  {
    title: "Unlimited Revisions",
    description: "Iterate until it's right, on every plan.",
    size: "sm",
  },
  {
    title: "AI-Assisted",
    description: "AI handles the grunt work, our editors handle the craft.",
    size: "sm",
  },
  {
    title: "Dedicated Team",
    description: "The same writer, designer, and editor for every project — no re-briefing a new freelancer each time.",
    size: "md",
  },
  {
    title: "Global Delivery",
    description: "Teams across 4 time zones, so production doesn't stop when yours does.",
    size: "sm",
  },
  {
    title: "High Conversion",
    description: "Built to move a viewer to the next step, not just to look good.",
    size: "sm",
    metric: "+34%",
  },
];

export const showcaseTabs = [
  {
    label: "SaaS Demo",
    title: "A demo that plays like the product feels",
    description:
      "Real UI, real interactions, cut for the 90 seconds someone will actually give you before bouncing.",
    duration: "01:32",
  },
  {
    label: "Explainer",
    title: "Complex workflows, made obvious",
    description:
      "The kind of explainer that gets forwarded internally without you asking anyone to forward it.",
    duration: "00:58",
  },
  {
    label: "Whiteboard",
    title: "The classic, done properly",
    description:
      "Hand-drawn pacing with modern motion — familiar format, none of the dated execution.",
    duration: "01:10",
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    description: "A working session on your product, audience, and the one thing the video has to land.",
  },
  {
    step: "02",
    title: "Script",
    description: "A tight, reviewed script before anyone touches a design tool.",
  },
  {
    step: "03",
    title: "Storyboard",
    description: "The full video on paper, so surprises happen here — not in animation.",
  },
  {
    step: "04",
    title: "Animation",
    description: "Full production with checkpoints, not a black box until the final cut.",
  },
  {
    step: "05",
    title: "Delivery",
    description: "Every format you need to publish, plus a revision window after it's live.",
  },
];

export const caseStudies = [
  {
    client: "Northwind Robotics",
    industry: "Industrial SaaS",
    challenge: "A fleet-management platform prospects couldn't understand from the homepage alone.",
    solution: "A 75-second explainer paired with an interactive demo embedded above the fold.",
    results: "38% lift in demo requests within the first quarter after launch.",
  },
  {
    client: "Fintra",
    industry: "Fintech",
    challenge: "Compliance review kept killing every video before it shipped.",
    solution: "A scripting process built around legal checkpoints instead of last-minute rewrites.",
    results: "Shipped 6 compliant product videos in one quarter, zero rework cycles.",
  },
  {
    client: "Skyway Labs",
    industry: "Developer Tools",
    challenge: "A technical product that only made sense in a live demo call.",
    solution: "An interactive product walkthrough that replaced the first sales call entirely.",
    results: "Sales team recovered 9 hours a week previously spent on first-call demos.",
  },
];

export const testimonials = [
  {
    quote:
      "The storyboard step alone saved us from a version of this video that would've missed the point entirely.",
    name: "Priya Shah",
    role: "VP of Product Marketing, Northwind Robotics",
  },
  {
    quote:
      "We stopped treating video as a launch-week scramble. Now it's just part of how we ship features.",
    name: "Marcus Webb",
    role: "Head of Growth, Fintra",
  },
  {
    quote:
      "Our AE team uses the demo video more than the actual product tour. That's the whole point.",
    name: "Elena Ruiz",
    role: "Director of Sales, Skyway Labs",
  },
];

export const pricing = [
  {
    tier: "Starter",
    tagline: "One video, done right",
    priceFrom: "$2,900",
    features: ["1 explainer or demo video", "Script & storyboard", "2 revision rounds"],
    cta: "Book Consultation",
  },
  {
    tier: "Growth",
    tagline: "For teams shipping video regularly",
    priceFrom: "$6,500",
    features: ["3 videos / month", "Dedicated creative team", "Unlimited revisions", "AI voiceover included"],
    cta: "Book Consultation",
    featured: true,
  },
  {
    tier: "Enterprise",
    tagline: "Full production partner",
    priceFrom: "Custom",
    features: ["Unlimited scope", "Compliance & legal workflows", "Dedicated account lead", "SLA-backed delivery"],
    cta: "Book Consultation",
  },
];

export const faq = [
  {
    q: "How long does a typical project take?",
    a: "Most explainer and demo videos ship in 5–10 business days from a locked script. Enterprise and compliance-heavy projects run longer depending on review cycles.",
  },
  {
    q: "Do you work with our existing brand guidelines?",
    a: "Yes — every project starts by mapping your existing brand system into our motion and design language, not the other way around.",
  },
  {
    q: "What if we don't have a script yet?",
    a: "That's most clients. Scripting is part of every package, built collaboratively with your team during the Discovery and Script phases.",
  },
  {
    q: "Can you match an existing video style we've used before?",
    a: "Generally yes, if you can share references. We'll flag upfront if a specific style would work against the goal of the video.",
  },
  {
    q: "How many revisions are included?",
    a: "Starter includes 2 rounds. Growth and Enterprise include unlimited revisions within the agreed project scope.",
  },
];

export const footerNav = {
  Product: [
    { label: "Services", href: "#services" },
    { label: "Showcase", href: "#showcase" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "Case Studies", href: "#case-studies" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ],
};

export const socials = [
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];
