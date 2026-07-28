type TickerItem = {
  symbol: string;
  value: number;
  change: number;
};

type LiveTickerProps = {
  items: TickerItem[];
};

export function LiveTicker({ items }: LiveTickerProps) {
  const loop = [...items, ...items];

  return (
    <div className="ticker" aria-label="Live talent market ticker">
      <div className="ticker__track">
        {loop.map((item, index) => (
          <span className="ticker__item" key={`${item.symbol}-${index}`}>
            <strong>{item.symbol}</strong>
            <span>{item.value.toLocaleString()} TT</span>
            <em className={item.change >= 0 ? "positive" : "negative"}>
              {item.change >= 0 ? "+" : ""}
              {item.change.toFixed(1)}%
            </em>
          </span>
        ))}
      </div>
    </div>
  );
}
