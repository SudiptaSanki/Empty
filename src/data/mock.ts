import type { Assessment, Badge, Candidate, Company, MarketIndex, TalentBid, TalentTransaction } from "@/types";

export const badges: Badge[] = [
  {
    id: "b1",
    name: "Blue Lock Elite",
    tier: "Arena",
    description: "Top 10 domain challenger with verified assessment wins."
  },
  {
    id: "b2",
    name: "Hidden Gem",
    tier: "Market",
    description: "Flagged by the undervalued talent detector."
  },
  {
    id: "b3",
    name: "Open Source Pioneer",
    tier: "Genesis",
    description: "Merged production-grade work into a public project."
  },
  {
    id: "b4",
    name: "Market Mover",
    tier: "Elite",
    description: "Crossed 5,000 Talent Tokens after a live skill event."
  },
  {
    id: "b5",
    name: "Streak Master",
    tier: "Arena",
    description: "Maintained a 30-day verified learning streak."
  }
];

const bids: TalentBid[] = [
  {
    id: "bid-101",
    company: "Aster Labs",
    candidateId: "ayush",
    role: "AI Platform Intern",
    tokenAmount: 8200,
    fit: 94,
    status: "active",
    createdAt: "2m ago"
  },
  {
    id: "bid-102",
    company: "NovaPay",
    candidateId: "priya",
    role: "Risk Intelligence Fellow",
    tokenAmount: 7600,
    fit: 91,
    status: "countered",
    createdAt: "8m ago"
  },
  {
    id: "bid-103",
    company: "HelioCloud",
    candidateId: "zara",
    role: "Cloud Reliability Intern",
    tokenAmount: 6100,
    fit: 88,
    status: "watching",
    createdAt: "14m ago"
  },
  {
    id: "bid-104",
    company: "VectorGrid",
    candidateId: "rohan",
    role: "Frontend Systems Builder",
    tokenAmount: 6900,
    fit: 90,
    status: "active",
    createdAt: "21m ago"
  }
];

export const candidates: Candidate[] = [
  {
    id: "ayush",
    name: "Ayush Mehta",
    handle: "ayush.ai",
    domain: "AI Systems",
    college: "IIT Roorkee",
    rank: 1,
    tier: "Diamond",
    marketValue: 11840,
    growth: 18.4,
    demandIndex: 96,
    risk: 21,
    cpi: {
      technical: 94,
      learningVelocity: 91,
      consistency: 88,
      originality: 96,
      community: 72,
      behavior: 86,
      adaptability: 92
    },
    skills: ["RAG", "Agents", "PyTorch", "Vector DB", "System Design"],
    signal: "Built a recruiter-agent that reduced resume triage time by 67%.",
    insight: "Likely to compound fastest in AI workflow automation roles.",
    valueHistory: [7200, 7600, 7900, 8450, 8900, 9300, 9750, 10200, 10880, 11840],
    badges: [badges[0], badges[2], badges[3]],
    bids: bids.filter((bid) => bid.candidateId === "ayush")
  },
  {
    id: "priya",
    name: "Priya Nair",
    handle: "priya.risk",
    domain: "FinTech AI",
    college: "BITS Pilani",
    rank: 2,
    tier: "Diamond",
    marketValue: 10320,
    growth: 14.2,
    demandIndex: 91,
    risk: 18,
    cpi: {
      technical: 90,
      learningVelocity: 88,
      consistency: 93,
      originality: 87,
      community: 76,
      behavior: 91,
      adaptability: 89
    },
    skills: ["Fraud Models", "Python", "SQL", "Explainable AI", "Dashboards"],
    signal: "Won a banking anomaly-detection challenge with 0.94 F1.",
    insight: "Best match for regulated AI teams that need careful builders.",
    valueHistory: [6800, 7100, 7350, 7800, 8200, 8500, 9000, 9400, 9700, 10320],
    badges: [badges[0], badges[4], badges[3]],
    bids: bids.filter((bid) => bid.candidateId === "priya")
  },
  {
    id: "zara",
    name: "Zara Khan",
    handle: "zara.ops",
    domain: "Cloud Reliability",
    college: "NIT Trichy",
    rank: 4,
    tier: "Platinum",
    marketValue: 8420,
    growth: 22.7,
    demandIndex: 89,
    risk: 28,
    cpi: {
      technical: 86,
      learningVelocity: 95,
      consistency: 83,
      originality: 84,
      community: 69,
      behavior: 82,
      adaptability: 94
    },
    skills: ["Kubernetes", "Docker", "SRE", "Go", "Observability"],
    signal: "Recovered a simulated outage in 11 minutes during the arena trial.",
    insight: "Undervalued SRE profile with unusually high learning velocity.",
    valueHistory: [4300, 4550, 4800, 5200, 5900, 6400, 7100, 7500, 7920, 8420],
    badges: [badges[1], badges[4]],
    bids: bids.filter((bid) => bid.candidateId === "zara")
  },
  {
    id: "rohan",
    name: "Rohan Shah",
    handle: "rohan.ui",
    domain: "Frontend Systems",
    college: "VIT Vellore",
    rank: 6,
    tier: "Platinum",
    marketValue: 7960,
    growth: 11.8,
    demandIndex: 84,
    risk: 24,
    cpi: {
      technical: 88,
      learningVelocity: 84,
      consistency: 86,
      originality: 91,
      community: 63,
      behavior: 85,
      adaptability: 83
    },
    skills: ["React", "Design Systems", "Next.js", "Animation", "Testing"],
    signal: "Shipped a component lab used by 1,200 students in 5 days.",
    insight: "Strong fit for product teams that need speed and taste.",
    valueHistory: [5900, 6100, 6250, 6500, 6820, 7040, 7310, 7550, 7750, 7960],
    badges: [badges[2], badges[3]],
    bids: bids.filter((bid) => bid.candidateId === "rohan")
  },
  {
    id: "meera",
    name: "Meera Joshi",
    handle: "meera.chain",
    domain: "Web3 Security",
    college: "IIIT Hyderabad",
    rank: 8,
    tier: "Gold",
    marketValue: 7240,
    growth: 26.1,
    demandIndex: 86,
    risk: 34,
    cpi: {
      technical: 84,
      learningVelocity: 93,
      consistency: 79,
      originality: 90,
      community: 81,
      behavior: 80,
      adaptability: 91
    },
    skills: ["Solidity", "Audits", "Foundry", "Cryptography", "Threat Models"],
    signal: "Found a critical exploit in a mock DeFi bridge assessment.",
    insight: "High-upside security talent with a fast-rising proof trail.",
    valueHistory: [3600, 3900, 4200, 4700, 5200, 5700, 6250, 6700, 7000, 7240],
    badges: [badges[1], badges[0]],
    bids: []
  },
  {
    id: "kabir",
    name: "Kabir Sen",
    handle: "kabir.data",
    domain: "Data Engineering",
    college: "SRM Institute",
    rank: 11,
    tier: "Gold",
    marketValue: 6560,
    growth: 9.7,
    demandIndex: 79,
    risk: 22,
    cpi: {
      technical: 82,
      learningVelocity: 81,
      consistency: 89,
      originality: 76,
      community: 74,
      behavior: 88,
      adaptability: 80
    },
    skills: ["Spark", "dbt", "Airflow", "Warehousing", "Python"],
    signal: "Rebuilt an analytics pipeline with 42% lower compute cost.",
    insight: "Reliable execution profile for teams needing production data muscle.",
    valueHistory: [5100, 5200, 5350, 5500, 5700, 5900, 6100, 6250, 6400, 6560],
    badges: [badges[4]],
    bids: []
  }
];

export const companies: Company[] = [
  {
    id: "aster",
    name: "Aster Labs",
    focus: "AI infrastructure",
    tokenBalance: 48200,
    openRoles: 7,
    followedCandidates: ["ayush", "meera", "zara"],
    thesis: "Bid early on builders with proof-of-work velocity and original AI systems."
  },
  {
    id: "novapay",
    name: "NovaPay",
    focus: "FinTech risk",
    tokenBalance: 36500,
    openRoles: 5,
    followedCandidates: ["priya", "kabir"],
    thesis: "Prioritize high-consistency talent for regulated financial intelligence."
  },
  {
    id: "heliocloud",
    name: "HelioCloud",
    focus: "Cloud reliability",
    tokenBalance: 29200,
    openRoles: 4,
    followedCandidates: ["zara", "rohan"],
    thesis: "Find operators who stay calm under live incident simulations."
  }
];

export const marketIndices: MarketIndex[] = [
  { id: "ai", name: "AI Systems", value: 1412, change: 8.6, demand: 94, supply: 41 },
  { id: "web3", name: "Web3 Security", value: 1188, change: 12.3, demand: 87, supply: 28 },
  { id: "sre", name: "Cloud Reliability", value: 1046, change: 6.1, demand: 82, supply: 33 },
  { id: "front", name: "Frontend Systems", value: 932, change: 3.4, demand: 76, supply: 58 },
  { id: "data", name: "Data Engineering", value: 887, change: -1.8, demand: 71, supply: 63 }
];

export const transactions: TalentTransaction[] = [
  {
    id: "tx-1",
    hash: "0x7fa9...42de",
    type: "Bid",
    from: "Aster Labs",
    to: "Ayush Mehta",
    amount: 8200,
    time: "00:02:14",
    note: "AI Platform Intern bid locked in TalentToken escrow."
  },
  {
    id: "tx-2",
    hash: "0x2c18...91ab",
    type: "SBT Mint",
    from: "Arena Oracle",
    to: "Zara Khan",
    amount: 350,
    time: "00:08:39",
    note: "Outage Recovery badge minted after S-Rank challenge."
  },
  {
    id: "tx-3",
    hash: "0x83dd...8ac0",
    type: "Value Reprice",
    from: "Market Engine",
    to: "Meera Joshi",
    amount: 740,
    time: "00:13:22",
    note: "Critical exploit proof increased scarcity multiplier."
  },
  {
    id: "tx-4",
    hash: "0x49ef...10bd",
    type: "Assessment",
    from: "NovaPay",
    to: "Priya Nair",
    amount: 500,
    time: "00:19:03",
    note: "Fraud model simulation completed with 91 fit score."
  }
];

export const assessments: Assessment[] = [
  {
    id: "a1",
    title: "AI Agent Gauntlet",
    difficulty: "World Class",
    skills: ["RAG", "Tool Use", "Evaluation"],
    applicants: 128,
    avgScore: 71,
    reward: 1400
  },
  {
    id: "a2",
    title: "Zero-Downtime Incident Room",
    difficulty: "S-Rank",
    skills: ["Kubernetes", "SRE", "Debugging"],
    applicants: 84,
    avgScore: 67,
    reward: 980
  },
  {
    id: "a3",
    title: "DeFi Exploit Hunt",
    difficulty: "S-Rank",
    skills: ["Solidity", "Threat Models", "Audits"],
    applicants: 56,
    avgScore: 63,
    reward: 1200
  },
  {
    id: "a4",
    title: "Design System Sprint",
    difficulty: "A-Rank",
    skills: ["React", "Accessibility", "Animation"],
    applicants: 112,
    avgScore: 76,
    reward: 760
  }
];

export const tickerItems = candidates.map((candidate) => ({
  symbol: candidate.handle.toUpperCase(),
  value: candidate.marketValue,
  change: candidate.growth
}));
