type MarketChartProps = {
  values: number[];
  label?: string;
};

function buildPath(values: number[]) {
  const width = 320;
  const height = 120;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

export function MarketChart({ values, label = "Market value history" }: MarketChartProps) {
  const path = buildPath(values);
  const area = `${path} L 320 120 L 0 120 Z`;

  return (
    <div className="chart-shell">
      <div className="chart-shell__top">
        <span>{label}</span>
        <strong>+{(((values.at(-1) ?? 0) / values[0] - 1) * 100).toFixed(1)}%</strong>
      </div>
      <svg className="market-chart" viewBox="0 0 320 120" role="img" aria-label={label}>
        <defs>
          <linearGradient id="chartGlow" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(0, 212, 255, 0.45)" />
            <stop offset="100%" stopColor="rgba(0, 212, 255, 0)" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#chartGlow)" />
        <path d={path} fill="none" stroke="#00d4ff" strokeLinecap="round" strokeWidth="4" />
        {values.map((value, index) => {
          const width = 320;
          const height = 120;
          const min = Math.min(...values);
          const max = Math.max(...values);
          const range = max - min || 1;
          const x = (index / (values.length - 1)) * width;
          const y = height - ((value - min) / range) * height;
          return <circle cx={x} cy={y} fill="#00ff88" key={`${value}-${index}`} r="3" />;
        })}
      </svg>
    </div>
  );
}
