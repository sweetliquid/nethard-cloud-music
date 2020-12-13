export function between(
  x: number,
  range: { min: number; max: number }
): number {
  return x < range.min ? range.min : x > range.max ? range.max : x
}
