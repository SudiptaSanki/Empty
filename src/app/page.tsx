import Link from "next/link";
import { CandidateGrid } from "@/components/CandidateGrid";
import { LedgerFeed } from "@/components/LedgerFeed";
import { LiveTicker } from "@/components/LiveTicker";
import { MarketChart } from "@/components/MarketChart";
import { candidates, marketIndices, tickerItems, transactions } from "@/data/mock";

export default function Home() {
  const featured = candidates[0];

  return (
    <div className="page">
      <LiveTicker items={tickerItems} />
      <section className="hero">
        <div className="hero__content">
          <span className="eyebrow">AI Recruiting x Web3 Market Mechanics</span>
          <h1>Where Talent Has a Market Value</h1>
          <p>
            ScoutRena turns hiring into a competitive talent exchange: candidates prove future
            potential, companies bid with Talent Tokens, and every move writes to a transparent
            market ledger.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" href="/company">
              Enter Company War Room
            </Link>
            <Link className="button" href="/student">
              View Talent Card
            </Link>
            <Link className="button button--ghost" href="/market">
              Open Market Floor
            </Link>
          </div>
          <div className="stat-strip">
            <span>
              <strong>18.4%</strong>
              top growth
            </span>
            <span>
              <strong>48.2K</strong>
              tokens live
            </span>
            <span>
              <strong>96</strong>
              demand index
            </span>
          </div>
        </div>
        <div className="hero__terminal" aria-label="Talent market console preview">
          <div className="terminal-header">
            <span>SCOUTRENA://MARKET</span>
            <strong>LIVE</strong>
          </div>
          <MarketChart values={featured.valueHistory} label={`${featured.handle} value curve`} />
          <div className="terminal-grid">
            {marketIndices.slice(0, 4).map((index) => (
              <div key={index.id}>
                <span>{index.name}</span>
                <strong>{index.value}</strong>
                <em className={index.change >= 0 ? "positive" : "negative"}>
                  {index.change >= 0 ? "+" : ""}
                  {index.change}%
                </em>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <span className="eyebrow">Featured Talent</span>
          <h2>Recruiting Becomes a Competitive Arena</h2>
          <p>Ranked profiles, proof-backed skill signals, and market pricing in one command center.</p>
        </div>
        <CandidateGrid candidates={candidates.slice(0, 3)} />
      </section>

      <section className="split-section">
        <div className="panel impact-panel">
          <span className="eyebrow">Judge Demo Flow</span>
          <h2>Three clicks to the wow moment</h2>
          <p>
            Start on the live market, inspect a student stock chart, then jump into the company war
            room to place a simulated TalentToken bid.
          </p>
          <div className="flow-list">
            <span>1. Discover hidden gems</span>
            <span>2. Compare CPI and scarcity</span>
            <span>3. Bid, assess, and track value</span>
          </div>
        </div>
        <LedgerFeed transactions={transactions.slice(0, 3)} />
      </section>
    </div>
  );
}
