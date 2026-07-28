import { BidPanel } from "@/components/BidPanel";
import { CpiRadar } from "@/components/CpiRadar";
import { MarketChart } from "@/components/MarketChart";
import { TalentCard } from "@/components/TalentCard";
import { candidates } from "@/data/mock";

export default function StudentPage() {
  const candidate = candidates[0];

  return (
    <div className="page page--compact">
      <section className="dashboard-hero">
        <TalentCard candidate={candidate} />
        <div className="panel insight-panel">
          <span className="eyebrow">AI Career Oracle</span>
          <h1>{candidate.handle} is moving like a market leader</h1>
          <p>{candidate.insight}</p>
          <div className="stat-strip">
            <span>
              <strong>{candidate.demandIndex}</strong>
              demand
            </span>
            <span>
              <strong>{candidate.risk}</strong>
              risk
            </span>
            <span>
              <strong>{candidate.badges.length}</strong>
              SBT badges
            </span>
          </div>
        </div>
      </section>

      <section className="split-section">
        <div className="panel">
          <div className="panel__heading">
            <span className="eyebrow">Career Stock</span>
            <h2>Value Momentum</h2>
          </div>
          <MarketChart values={candidate.valueHistory} />
        </div>
        <CpiRadar score={candidate.cpi} />
      </section>

      <section className="split-section">
        <BidPanel bids={candidate.bids} />
        <div className="panel">
          <div className="panel__heading">
            <span className="eyebrow">SoulBound Proof</span>
            <h2>Badge Gallery</h2>
          </div>
          <div className="badge-grid">
            {candidate.badges.map((badge) => (
              <article className="badge-card" key={badge.id}>
                <span>{badge.tier}</span>
                <strong>{badge.name}</strong>
                <p>{badge.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
