export const ENTRY_TYPES = [
  'release',
  'unsent',
] as const;

export type EntryType = typeof ENTRY_TYPES[number];