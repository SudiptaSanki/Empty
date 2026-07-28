import type { TalentBid } from "@/types";

type BidPanelProps = {
  bids: TalentBid[];
};

export function BidPanel({ bids }: BidPanelProps) {
  return (
    <div className="panel">
      <div className="panel__heading">
        <span className="eyebrow">Live Bid Desk</span>
        <h3>TalentToken Offers</h3>
      </div>
      <div className="bid-list">
        {bids.map((bid) => (
          <article className="bid-row" key={bid.id}>
            <div>
              <strong>{bid.company}</strong>
              <span>{bid.role}</span>
            </div>
            <div className="bid-row__value">
              <strong>{bid.tokenAmount.toLocaleString()} TT</strong>
              <em>{bid.fit}% fit</em>
            </div>
            <span className={`status status--${bid.status}`}>{bid.status}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
