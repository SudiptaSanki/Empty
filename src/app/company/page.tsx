import { BidPanel } from "@/components/BidPanel";
import { CandidateGrid } from "@/components/CandidateGrid";
import { LedgerFeed } from "@/components/LedgerFeed";
import { candidates, companies, transactions } from "@/data/mock";

export default function CompanyPage() {
  const company = companies[0];
  const activeBids = candidates.flatMap((candidate) => candidate.bids);
  const hiddenGems = candidates.filter((candidate) => candidate.badges.some((badge) => badge.name === "Hidden Gem"));

  return (
    <div className="page page--compact">
      <section className="company-hero">
        <div className="panel war-room">
          <span className="eyebrow">Company War Room</span>
          <h1>{company.name}</h1>
          <p>{company.thesis}</p>
          <div className="stat-strip">
            <span>
              <strong>{company.tokenBalance.toLocaleString()}</strong>
              TT balance
            </span>
            <span>
              <strong>{company.openRoles}</strong>
              open roles
            </span>
            <span>
              <strong>{company.followedCandidates.length}</strong>
              watchlist
            </span>
          </div>
        </div>
        <div className="panel command-card">
          <span className="eyebrow">AI Recommendation</span>
          <h2>Bid before the market reprices Zara</h2>
          <p>
            Her SRE learning velocity is 95 and Cloud Reliability supply is only 33. Expected value
            increase: +12% after the next incident arena.
          </p>
          <button className="button button--primary" type="button">
            Simulate 6,400 TT Bid
          </button>
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <span className="eyebrow">Discovery Desk</span>
          <h2>AI-ranked candidates</h2>
          <p>Filter presets: Best Now, Best Future, Cheapest Hidden Gem, High Risk High Reward.</p>
        </div>
        <CandidateGrid candidates={candidates.slice(0, 4)} />
      </section>

      <section className="split-section">
        <BidPanel bids={activeBids} />
        <div className="panel">
          <div className="panel__heading">
            <span className="eyebrow">Hidden Gem Detector</span>
            <h2>Undervalued Watchlist</h2>
          </div>
          <div className="mover-list">
            {hiddenGems.map((candidate) => (
              <article className="mover" key={candidate.id}>
                <div>
                  <strong>{candidate.name}</strong>
                  <span>{candidate.signal}</span>
                </div>
                <em>+{candidate.growth.toFixed(1)}%</em>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <LedgerFeed transactions={transactions.slice(0, 3)} />
      </section>
    </div>
  );
}
