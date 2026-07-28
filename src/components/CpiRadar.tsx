import type { CpiScore } from "@/types";

type CpiRadarProps = {
  score: CpiScore;
};

const labels: Array<[keyof CpiScore, string]> = [
  ["technical", "Tech"],
  ["learningVelocity", "Velocity"],
  ["consistency", "Consistency"],
  ["originality", "Originality"],
  ["community", "Community"],
  ["behavior", "Behavior"],
  ["adaptability", "Adapt"]
];

function point(index: number, value: number, radius = 72) {
  const angle = (Math.PI * 2 * index) / labels.length - Math.PI / 2;
  const scaled = (value / 100) * radius;
  return [100 + Math.cos(angle) * scaled, 100 + Math.sin(angle) * scaled];
}

export function CpiRadar({ score }: CpiRadarProps) {
  const points = labels
    .map(([key], index) => point(index, score[key]).map((coord) => coord.toFixed(2)).join(","))
    .join(" ");

  const rings = [25, 50, 75, 100];

  return (
    <div className="radar-card">
      <div>
        <span className="eyebrow">Candidate Potential Index</span>
        <h3>CPI Signal Radar</h3>
      </div>
      <svg className="radar" viewBox="0 0 200 200" role="img" aria-label="Candidate potential radar chart">
        {rings.map((ring) => (
          <polygon
            className="radar__ring"
            key={ring}
            points={labels
              .map((_, index) => point(index, ring).map((coord) => coord.toFixed(2)).join(","))
              .join(" ")}
          />
        ))}
        {labels.map(([key, label], index) => {
          const [x, y] = point(index, 112, 72);
          return (
            <g key={key}>
              <line className="radar__axis" x1="100" x2={x} y1="100" y2={y} />
              <text className="radar__label" x={x} y={y}>
                {label}
              </text>
            </g>
          );
        })}
        <polygon className="radar__shape" points={points} />
      </svg>
    </div>
  );
}
