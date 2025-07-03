import { useMemo } from "react";

interface PatternVisualizerProps {
  pattern: any;
  currentStep: number;
  instrumentStates: Record<string, { enabled: boolean; volume: number }>;
}

export default function PatternVisualizer({ pattern, currentStep, instrumentStates }: PatternVisualizerProps) {
  const patternLength = useMemo(() => {
    const lengths = Object.values(pattern).map((p: any) => (typeof p === 'string' ? p.length : 0));
    return Math.max(...lengths, 16);
  }, [pattern]);

  const getStepState = (step: number) => {
    let hasHit = false;
    Object.keys(instrumentStates).forEach(instrument => {
      if (instrumentStates[instrument].enabled && pattern[instrument]) {
        const char = pattern[instrument][step];
        if (char && char !== ' ' && char !== '.') {
          hasHit = true;
        }
      }
    });
    return hasHit;
  };

  return (
    <div className="bg-black p-4 rounded-lg">
      <div className="grid grid-cols-16 gap-1 mb-4">
        {Array.from({ length: patternLength }, (_, i) => (
          <div
            key={i}
            className={`pattern-step ${getStepState(i) ? 'active' : ''} ${i === currentStep ? 'current' : ''}`}
            title={`Step ${i + 1}`}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        {Array.from({ length: Math.ceil(patternLength / 4) }, (_, i) => (
          <span key={i}>{i * 4 + 1}</span>
        ))}
      </div>
    </div>
  );
}
