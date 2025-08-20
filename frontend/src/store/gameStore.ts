import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { SubjectKey, QuestionItem } from '../data/questions';

type Mode = 'idle' | 'playing' | 'finished';

interface RoundResult {
  qid: string;
  subject: SubjectKey;
  guessPoints?: number;
  agent: {
    points_A: number; prob_A: number;
    points_B: number; prob_B: number;
    points_C: number; prob_C: number;
    points_final: number; prob_final: number;
    decision: 'ACCEPT' | 'LHR';
    reasoning: string;
  };
}

interface GameState {
  mode: Mode;
  subject?: SubjectKey;
  current?: QuestionItem;
  roundResults: RoundResult[];
  score: number;
  start: () => void;
  chooseSubject: (s: SubjectKey) => void;
  setQuestion: (q: QuestionItem) => void;
  finishRound: (res: RoundResult) => void;
  reset: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      mode: 'idle',
      roundResults: [],
      score: 0,
      start: () => set({ mode: 'playing', roundResults: [], score: 0, subject: undefined, current: undefined }),
      chooseSubject: (s) => set({ subject: s }),
      setQuestion: (q) => set({ current: q }),
      finishRound: (res) =>
        set((st) => ({
          roundResults: [...st.roundResults, res],
          score: st.score + res.agent.points_final,
        })),
      reset: () => set({ mode: 'idle', roundResults: [], score: 0, subject: undefined, current: undefined }),
    }),
    { name: 'grading-game', storage: createJSONStorage(() => localStorage) }
  )
);