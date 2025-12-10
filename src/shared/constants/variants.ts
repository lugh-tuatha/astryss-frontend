export const VARIANTS = [
  'legacy',
  'dev',
  'beta',
] as const;

export type Variant = typeof VARIANTS[number];

export const VARIANT_STYLES: Record<Variant, string> = {
  legacy: 'bg-yellow-300',
  dev: 'bg-purple-300',
  beta: 'bg-blue-300',
} as const;
