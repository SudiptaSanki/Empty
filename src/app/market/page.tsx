import { LedgerFeed } from "@/components/LedgerFeed";
import { LiveTicker } from "@/components/LiveTicker";
import { MarketChart } from "@/components/MarketChart";
import { candidates, marketIndices, tickerItems, transactions } from "@/data/mock";

export default function MarketPage() {
  const topGainers = [...candidates].sort((a, b) => b.growth - a.growth).slice(0, 4);

  return (
    <div className="page page--compact">
      <LiveTicker items={tickerItems} />
      <section className="section">
        <div className="section__heading">
          <span className="eyebrow">Trading Floor</span>
          <h1>Talent Market</h1>
          <p>Live domain scarcity, candidate repricing, and transparent simulated chain activity.</p>
        </div>
        <div className="market-grid">
          {marketIndices.map((index) => (
            <article className="index-card" key={index.id}>
              <span>{index.name}</span>
              <strong>{index.value}</strong>
              <em className={index.change >= 0 ? "positive" : "negative"}>
                {index.change >= 0 ? "+" : ""}
                {index.change}%
              </em>
              <div className="scarcity">
                <span style={{ width: `${index.demand}%` }} />
              </div>
              <small>
                Demand {index.demand} / Supply {index.supply}
              </small>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="panel">
          <div className="panel__heading">
            <span className="eyebrow">Weekly Movers</span>
            <h2>Top Gainers</h2>
          </div>
          <div className="mover-list">
            {topGainers.map((candidate) => (
              <article className="mover" key={candidate.id}>
                <div>
                  <strong>{candidate.name}</strong>
                  <span>{candidate.domain}</span>
                </div>
                <em>+{candidate.growth.toFixed(1)}%</em>
                <strong>{candidate.marketValue.toLocaleString()} TT</strong>
              </article>
            ))}
          </div>
        </div>
        <div className="panel">
          <div className="panel__heading">
            <span className="eyebrow">Index History</span>
            <h2>AI Systems Composite</h2>
          </div>
          <MarketChart values={[822, 860, 910, 944, 1010, 1088, 1170, 1260, 1344, 1412]} />
        </div>
      </section>

      <section className="section section--tight">
        <LedgerFeed transactions={transactions} />
      </section>
    </div>
  );
}
