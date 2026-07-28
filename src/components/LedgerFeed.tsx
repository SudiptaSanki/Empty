import type { TalentTransaction } from "@/types";

type LedgerFeedProps = {
  transactions: TalentTransaction[];
};

export function LedgerFeed({ transactions }: LedgerFeedProps) {
  return (
    <div className="panel ledger">
      <div className="panel__heading">
        <span className="eyebrow">Simulated Chain</span>
        <h3>Talent Ledger</h3>
      </div>
      <div className="ledger__list">
        {transactions.map((transaction) => (
          <article className="ledger__item" key={transaction.id}>
            <div>
              <span className="hash">{transaction.hash}</span>
              <strong>{transaction.type}</strong>
              <p>{transaction.note}</p>
            </div>
            <div className="ledger__meta">
              <span>{transaction.time}</span>
              <em>{transaction.amount.toLocaleString()} TT</em>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
