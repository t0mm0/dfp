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

  // Group steps into rows of 16
  const rows = [];
  for (let i = 0; i < patternLength; i += 16) {
    rows.push(Array.from({ length: Math.min(16, patternLength - i) }, (_, j) => i + j));
  }

  return (
    <div className="bg-black p-4 rounded-lg">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="mb-4">
          {/* Step indicators */}
          <div className="grid grid-cols-16 gap-1 mb-2">
            {row.map((stepIndex) => (
              <div
                key={stepIndex}
                className={`pattern-step ${getStepState(stepIndex) ? 'active' : ''} ${stepIndex === currentStep ? 'current' : ''}`}
                title={`Step ${stepIndex + 1}`}
              />
            ))}
          </div>
          {/* Step numbers 1-16 */}
          <div className="grid grid-cols-16 gap-1 text-xs text-gray-500">
            {row.map((stepIndex) => (
              <div key={stepIndex} className="text-center">
                {(stepIndex % 16) + 1}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
