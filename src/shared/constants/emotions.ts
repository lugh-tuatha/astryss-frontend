export const EMOTIONS = [
  'sad',
  'angry',
  'inlove',
  'other',
] as const;

export type Emotion = typeof EMOTIONS[number];

export const EMOTION_STYLES: Record<Emotion, string> = {
  sad: 'bg-blue-400',
  angry: 'bg-red-400',
  inlove: 'bg-pink-400',
  other: 'bg-zinc-400',
} as const;

