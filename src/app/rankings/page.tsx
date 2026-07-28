import { candidates } from "@/data/mock";

export default function RankingsPage() {
  return (
    <div className="page page--compact">
      <section className="section">
        <div className="section__heading">
          <span className="eyebrow">Competitive Leaderboard</span>
          <h1>Global Talent Rankings</h1>
          <p>Ranked by market value, CPI proof, demand scarcity, and verified challenge outcomes.</p>
        </div>
        <div className="ranking-table">
          {candidates.map((candidate) => (
            <article className="ranking-row" key={candidate.id}>
              <strong>#{candidate.rank}</strong>
              <div>
                <h2>{candidate.name}</h2>
                <span>
                  {candidate.domain} / {candidate.college}
                </span>
              </div>
              <em>{candidate.tier}</em>
              <span>{candidate.marketValue.toLocaleString()} TT</span>
              <strong className="positive">+{candidate.growth.toFixed(1)}%</strong>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
