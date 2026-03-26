export const featureCards = [
  {
    title: "Learn",
    description: "Watch guided attack walkthroughs and structured blue-team fundamentals from zero to pro.",
  },
  {
    title: "Practice",
    description: "Train inside browser-based labs with realistic targets, hints, and milestone checkpoints.",
  },
  {
    title: "Earn",
    description: "Follow the 30-day roadmap, build public proof of skill, and unlock beginner-friendly gigs.",
  },
];

export const testimonials = [
  {
    name: "Aarav S.",
    role: "Bug bounty beginner",
    quote: "HackLearn made labs feel addictive. I finished my first paid recon task in three weeks.",
  },
  {
    name: "Meera K.",
    role: "CS student",
    quote: "The dashboard is clear, the labs are practical, and the earning path finally feels believable.",
  },
  {
    name: "Zayan R.",
    role: "Freelance learner",
    quote: "It feels like a premium cyber bootcamp without the overwhelming mess of scattered resources.",
  },
];

export const sidebarItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Courses", path: "/course" },
  { label: "Labs", path: "/labs" },
  { label: "Community", path: "/dashboard", hash: "#community" },
];

export const labs = [
  {
    title: "Port Pulse",
    difficulty: "Easy",
    description: "Enumerate open ports and identify the exposed service stack.",
  },
  {
    title: "Token Breaker",
    difficulty: "Medium",
    description: "Inspect flawed session logic and recover a hidden admin token.",
  },
  {
    title: "Shadow Shell",
    difficulty: "Hard",
    description: "Chain misconfigurations to land an initial foothold on the target box.",
  },
];

export const modules = [
  {
    title: "Recon Essentials",
    description: "Map attack surfaces, find subdomains, and build your initial target profile.",
    progress: 92,
  },
  {
    title: "Web Exploitation Basics",
    description: "Cover injection, broken auth, and practical exploit validation techniques.",
    progress: 64,
  },
  {
    title: "Privilege Escalation",
    description: "Learn how to identify weak permissions and escalate access safely in labs.",
    progress: 28,
  },
  {
    title: "Report Writing for Payouts",
    description: "Turn findings into concise proof-backed reports that clients trust.",
    progress: 8,
  },
];
