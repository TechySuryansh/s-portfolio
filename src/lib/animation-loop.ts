/** Schedules frames only while animation is active; safe to resume after a long pause. */
export function createAnimationLoop(
  request: (callback: (time: number) => void) => number,
  cancel: (id: number) => void,
  update: (delta: number) => void,
) {
  let active = false;
  let frame: number | null = null;
  let previous: number | null = null;
  function tick(time: number) {
    frame = null;
    if (!active) return;
    const delta = previous === null ? 0 : Math.min((time - previous) / 1000, 0.04);
    previous = time;
    update(delta);
    if (active) frame = request(tick);
  }
  function setActive(next: boolean) {
    if (active === next) return;
    active = next;
    previous = null;
    if (frame !== null) cancel(frame);
    frame = next ? request(tick) : null;
  }
  return { setActive, dispose: () => setActive(false) };
}
