export const clsx = (names: Array<string | boolean>) => {
  return names.filter(Boolean).join(' ');
}

export const SCALE_ANIMATION_DURATION = 250;