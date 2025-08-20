import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Aggregation = 'mean' | 'median' | 'weighted';

interface LabState {
  threshold: number; // 0..1
  aggregation: Aggregation;
  weights: [number, number, number]; // for A/B/C when 'weighted'
  setThreshold: (v: number) => void;
  setAggregation: (a: Aggregation) => void;
  setWeights: (w: [number, number, number]) => void;
}
export const useLabStore = create<LabState>()(
  persist(
    (set) => ({
      threshold: 0.95,
      aggregation: 'mean',
      weights: [1, 1, 1],
      setThreshold: (v) => set({ threshold: Math.max(0, Math.min(1, v)) }),
      setAggregation: (a) => set({ aggregation: a }),
      setWeights: (w) => set({ weights: w }),
    }),
    { name: 'grading-lab' }
  )
);