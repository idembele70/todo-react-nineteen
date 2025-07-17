export const clsx = (names: Array<string | boolean>) => {
  return names.filter(Boolean).join(' ');
}

export const SCALE_ANIMATION_DURATION = 250;

export const MESSAGE_POPUP_DURATION = 1500;


export const clearTimeoutRef = (timeoutRef: {
  current: NodeJS.Timeout | null
}) => {
  if (!timeoutRef.current) return;
  clearTimeout(timeoutRef.current)
  timeoutRef.current = null;
}