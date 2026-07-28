export type CpiScore = {
  technical: number;
  learningVelocity: number;
  consistency: number;
  originality: number;
  community: number;
  behavior: number;
  adaptability: number;
};

export type Badge = {
  id: string;
  name: string;
  tier: "Genesis" | "Elite" | "Market" | "Arena";
  description: string;
};

export type TalentBid = {
  id: string;
  company: string;
  candidateId: string;
  role: string;
  tokenAmount: number;
  fit: number;
  status: "active" | "countered" | "accepted" | "watching";
  createdAt: string;
};

export type Candidate = {
  id: string;
  name: string;
  handle: string;
  domain: string;
  college: string;
  rank: number;
  tier: "Diamond" | "Platinum" | "Gold";
  marketValue: number;
  growth: number;
  demandIndex: number;
  risk: number;
  cpi: CpiScore;
  skills: string[];
  signal: string;
  insight: string;
  valueHistory: number[];
  badges: Badge[];
  bids: TalentBid[];
};

export type Company = {
  id: string;
  name: string;
  focus: string;
  tokenBalance: number;
  openRoles: number;
  followedCandidates: string[];
  thesis: string;
};

export type TalentTransaction = {
  id: string;
  hash: string;
  type: "Bid" | "SBT Mint" | "Value Reprice" | "Assessment";
  from: string;
  to: string;
  amount: number;
  time: string;
  note: string;
};

export type MarketIndex = {
  id: string;
  name: string;
  value: number;
  change: number;
  demand: number;
  supply: number;
};

export type Assessment = {
  id: string;
  title: string;
  difficulty: "A-Rank" | "S-Rank" | "World Class";
  skills: string[];
  applicants: number;
  avgScore: number;
  reward: number;
};
