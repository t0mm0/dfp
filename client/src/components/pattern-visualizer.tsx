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
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 p-3 md:p-6 rounded-xl shadow-2xl border border-gray-800">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="mb-6">
          {/* Beat groupings with separators */}
          <div className="flex items-center gap-1 mb-3">
            {/* Group 1 (beats 1-4) */}
            <div className="flex gap-0.5 md:gap-1">
              {row.slice(0, 4).map((stepIndex) => (
                <div
                  key={stepIndex}
                  className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                    stepIndex === currentStep
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/50 scale-110'
                      : getStepState(stepIndex)
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                  }`}
                  title={`Step ${stepIndex + 1}`}
                >
                  {((stepIndex % 4) + 1)}
                </div>
              ))}
            </div>
            
            {/* Vertical separator */}
            <div className="w-0.5 h-6 bg-yellow-400 mx-1 shadow-lg shadow-yellow-400/50"></div>
            
            {/* Group 2 (beats 5-8) */}
            <div className="flex gap-0.5 md:gap-1">
              {row.slice(4, 8).map((stepIndex) => (
                <div
                  key={stepIndex}
                  className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                    stepIndex === currentStep
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/50 scale-110'
                      : getStepState(stepIndex)
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                  }`}
                  title={`Step ${stepIndex + 1}`}
                >
                  {((stepIndex % 4) + 1)}
                </div>
              ))}
            </div>
            
            {/* Vertical separator */}
            <div className="w-0.5 h-6 bg-yellow-400 mx-1 shadow-lg shadow-yellow-400/50"></div>
            
            {/* Group 3 (beats 9-12) */}
            <div className="flex gap-0.5 md:gap-1">
              {row.slice(8, 12).map((stepIndex) => (
                <div
                  key={stepIndex}
                  className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                    stepIndex === currentStep
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/50 scale-110'
                      : getStepState(stepIndex)
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                  }`}
                  title={`Step ${stepIndex + 1}`}
                >
                  {((stepIndex % 4) + 1)}
                </div>
              ))}
            </div>
            
            {/* Vertical separator */}
            <div className="w-0.5 h-6 bg-yellow-400 mx-1 shadow-lg shadow-yellow-400/50"></div>
            
            {/* Group 4 (beats 13-16) */}
            <div className="flex gap-0.5 md:gap-1">
              {row.slice(12, 16).map((stepIndex) => (
                <div
                  key={stepIndex}
                  className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                    stepIndex === currentStep
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/50 scale-110'
                      : getStepState(stepIndex)
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                  }`}
                  title={`Step ${stepIndex + 1}`}
                >
                  {((stepIndex % 4) + 1)}
                </div>
              ))}
            </div>
          </div>
          
          {/* Beat counter labels */}
          <div className="flex items-center gap-1 text-xs text-yellow-400 font-semibold">
            <div className="text-center" style={{ width: '120px' }}>1-2-3-4</div>
            <div className="w-0.5 mx-1"></div>
            <div className="text-center" style={{ width: '120px' }}>1-2-3-4</div>
            <div className="w-0.5 mx-1"></div>
            <div className="text-center" style={{ width: '120px' }}>1-2-3-4</div>
            <div className="w-0.5 mx-1"></div>
            <div className="text-center" style={{ width: '120px' }}>1-2-3-4</div>
          </div>
        </div>
      ))}
    </div>
  );
}
