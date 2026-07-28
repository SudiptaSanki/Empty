import type { Candidate } from "@/types";

type TalentCardProps = {
  candidate: Candidate;
  compact?: boolean;
};

export function TalentCard({ candidate, compact = false }: TalentCardProps) {
  return (
    <article className={`talent-card ${compact ? "talent-card--compact" : ""}`}>
      <div className="talent-card__header">
        <div className="avatar" aria-hidden="true">
          {candidate.name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </div>
        <div>
          <span className="eyebrow">#{candidate.rank} Global Talent</span>
          <h3>{candidate.name}</h3>
          <p>
            {candidate.domain} at {candidate.college}
          </p>
        </div>
        <span className={`tier tier--${candidate.tier.toLowerCase()}`}>{candidate.tier}</span>
      </div>
      <div className="talent-card__value">
        <span>Market value</span>
        <strong>{candidate.marketValue.toLocaleString()} TT</strong>
        <em>+{candidate.growth.toFixed(1)}%</em>
      </div>
      <p className="signal">{candidate.signal}</p>
      <div className="skill-row">
        {candidate.skills.slice(0, compact ? 3 : 5).map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
      <div className="talent-card__metrics">
        <span>
          Demand <strong>{candidate.demandIndex}</strong>
        </span>
        <span>
          Risk <strong>{candidate.risk}</strong>
        </span>
        <span>
          Bids <strong>{candidate.bids.length || 2}</strong>
        </span>
      </div>
    </article>
  );
}
