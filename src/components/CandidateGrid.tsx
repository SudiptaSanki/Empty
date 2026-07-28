import type { Candidate } from "@/types";
import { TalentCard } from "@/components/TalentCard";

type CandidateGridProps = {
  candidates: Candidate[];
};

export function CandidateGrid({ candidates }: CandidateGridProps) {
  return (
    <div className="candidate-grid">
      {candidates.map((candidate) => (
        <TalentCard candidate={candidate} compact key={candidate.id} />
      ))}
    </div>
  );
}
