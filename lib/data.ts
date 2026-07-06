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
      "A 30–90 second explainer that turns a complicated pitch into something a prospect actually understands on the first watch.",
    bullets: ["Full script & storyboard included", "Brand-matched visuals & tone", "Voiceover in 40+ languages"],
  },
  {
    code: "PD",
    title: "Product Explainer & Demo Videos",
    description:
      "Bring your product to life on screen — real UI, guided walkthroughs, and messaging built to move a viewer toward action.",
    bullets: ["Real UI capture & animation", "Clear, benefit-first narrative", "Built for landing pages & sales calls"],
  },
  {
    code: "MG",
    title: "Motion Graphics",
    description:
      "Data, diagrams, and product moments given enough motion to hold attention on channels built to ignore everything else.",
    bullets: ["Kinetic typography", "Social & ad cutdowns", "Loop-ready formats"],
  },
  {
    code: "AI",
    title: "AI-Assisted Content Creation",
    description:
      "AI-accelerated scripting, voiceover, and iteration so revisions take hours — without losing a human hand on direction and craft.",
    bullets: ["AI voiceover in 40+ languages", "Rapid concept variants", "Human-directed, not autopilot"],
  },
];

export const bento = [
  {
    title: "Increased Clarity",
    description: "Complex ideas, explained in a way your audience gets in one watch.",
    size: "lg",
    metric: "30–90s",
  },
  {
    title: "Enhanced Engagement",
    description: "Built to hold attention, not just fill space on the page.",
    size: "sm",
    metric: "+20%",
  },
  {
    title: "Improved Conversion",
    description: "Every video is scripted around the action you want a viewer to take next.",
    size: "sm",
    metric: "6x",
  },
  {
    title: "Two Revision Rounds Included",
    description: "Every project ships with structured feedback rounds built into the timeline — no surprise costs for getting it right.",
    size: "md",
  },
  {
    title: "SEO & Multi-Platform Ready",
    description: "Delivered in formats built for your site, landing pages, and social feeds.",
    size: "sm",
  },
  {
    title: "Qualified Leads Driven",
    description: "Video built as a marketing asset, not just a creative deliverable.",
    size: "sm",
    metric: "2K+",
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
    description: "We start with your goals, your audience, and what your competitors are already getting wrong.",
  },
  {
    step: "02",
    title: "Script",
    description: "A structured, reviewed script that turns your product into a narrative before anyone touches a design tool.",
  },
  {
    step: "03",
    title: "Storyboard",
    description: "The full video visualized on paper first, so surprises happen here — not in animation.",
  },
  {
    step: "04",
    title: "Production",
    description: "Voice selection, animation, and sound design come together with checkpoints, not a black box until the final cut.",
  },
  {
    step: "05",
    title: "Delivery",
    description: "Final files in every format you need, plus two rounds of revisions built into every project.",
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
      "The storyboard step alone saved us from a version of this video that would've missed the point entirely. Communication was smooth from day one.",
    name: "Priya Shah",
    role: "VP of Product Marketing, Northwind Robotics",
  },
  {
    quote:
      "Every revision request was handled without pushback or delay. We stopped treating video as a launch-week scramble — it's just part of how we ship now.",
    name: "Marcus Webb",
    role: "Head of Growth, Fintra",
  },
  {
    quote:
      "They translated our feedback into polished animation faster than any team we've worked with. Our AE team uses the demo more than the actual product tour.",
    name: "Elena Ruiz",
    role: "Director of Sales, Skyway Labs",
  },
];

export const pricing = [
  {
    tier: "Starter",
    tagline: "One video, done right",
    priceFrom: "$2,900",
    features: ["1 explainer or demo video (MP4, Full HD)", "Full script & storyboard", "2 revision rounds included"],
    cta: "Book Consultation",
  },
  {
    tier: "Growth",
    tagline: "For teams shipping video regularly",
    priceFrom: "$6,500",
    features: ["3 videos / month", "Dedicated creative team", "Unlimited revisions", "AI voiceover in 40+ languages"],
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
    q: "How long should our explainer video be?",
    a: "Most explainer videos run 30–90 seconds, depending on how complex your message is and who you're speaking to. We'll recommend a length during Discovery rather than defaulting to one number.",
  },
  {
    q: "Do you handle scripting and concept development, or do we need one already?",
    a: "That's most clients. We handle the full process — from your requirements to a structured, reviewed script — during the Discovery and Script phases.",
  },
  {
    q: "Can the video match our brand guidelines?",
    a: "Yes. Visuals, colors, typography, and tone are aligned with your brand system from the first storyboard, not adjusted after the fact.",
  },
  {
    q: "Is voiceover included?",
    a: "Yes — voiceover is available in 40+ languages, and we'll help you pick a voice and tone that fits the brand.",
  },
  {
    q: "Where can we use the finished video?",
    a: "Anywhere your funnel needs it: website, landing pages, social, product pages, email campaigns, trade shows, and sales presentations. We deliver formats built for each.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most explainer and demo videos are completed within a few weeks, including two rounds of revisions. Projects involving 3D animation typically run 24–30 business days.",
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
