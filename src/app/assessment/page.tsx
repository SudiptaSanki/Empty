import { assessments, candidates } from "@/data/mock";

export default function AssessmentPage() {
  return (
    <div className="page page--compact">
      <section className="section">
        <div className="section__heading">
          <span className="eyebrow">AI Assessment Arena</span>
          <h1>Challenge rooms that price future potential</h1>
          <p>
            Companies launch skill battles, candidates prove ability under pressure, and the market
            reprices verified outcomes.
          </p>
        </div>
        <div className="assessment-grid">
          {assessments.map((assessment) => (
            <article className="assessment-card" key={assessment.id}>
              <span className="difficulty">{assessment.difficulty}</span>
              <h2>{assessment.title}</h2>
              <div className="skill-row">
                {assessment.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="talent-card__metrics">
                <span>
                  Applicants <strong>{assessment.applicants}</strong>
                </span>
                <span>
                  Avg Score <strong>{assessment.avgScore}</strong>
                </span>
                <span>
                  Reward <strong>{assessment.reward} TT</strong>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="panel arena-panel">
          <span className="eyebrow">Live Simulation</span>
          <h2>World Class challenge report</h2>
          <p>
            Ayush completed the AI Agent Gauntlet with strong tool-recovery behavior and a verified
            evaluation harness. Market engine recommends +940 TT repricing.
          </p>
          <div className="score-bars">
            <span style={{ width: "94%" }}>Tool use 94</span>
            <span style={{ width: "89%" }}>Reliability 89</span>
            <span style={{ width: "96%" }}>Originality 96</span>
          </div>
        </div>
        <div className="panel">
          <div className="panel__heading">
            <span className="eyebrow">Arena Leaders</span>
            <h2>Current challengers</h2>
          </div>
          <div className="mover-list">
            {candidates.slice(0, 4).map((candidate) => (
              <article className="mover" key={candidate.id}>
                <div>
                  <strong>{candidate.name}</strong>
                  <span>{candidate.domain}</span>
                </div>
                <em>{candidate.cpi.originality} CPI</em>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
