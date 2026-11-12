'use client';
import type { ReactNode, PointerEvent } from 'react';

export function DepthCard({children, className}: {children:ReactNode;className:string}) {
  function move(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty('--tilt-x', `${-y * 5}deg`);
    card.style.setProperty('--tilt-y', `${x * 5}deg`);
  }
  return <article className={className} onPointerMove={move} onPointerLeave={event => { event.currentTarget.style.setProperty('--tilt-x', '0deg'); event.currentTarget.style.setProperty('--tilt-y', '0deg'); }}>{children}</article>;
}
