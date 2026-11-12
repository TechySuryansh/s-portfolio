import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createAnimationLoop } from '../src/lib/animation-loop.ts';
function harness() {
  const queue = new Map(); let id = 0; const deltas = [];
  const loop = createAnimationLoop(fn => { queue.set(++id,fn); return id; }, id=>queue.delete(id), delta=>deltas.push(delta));
  function step(time) { const [key,fn] = queue.entries().next().value; queue.delete(key); fn(time); }
  return {loop,queue,deltas,step};
}
test('paused or offscreen loops leave no scheduled frame',()=>{
 const {loop,queue,step,deltas}=harness();
 assert.equal(queue.size,0); loop.setActive(true); loop.setActive(true); assert.equal(queue.size,1);
 step(1000); step(1016); assert.equal(deltas.length,2);
 loop.setActive(false); assert.equal(queue.size,0);
 loop.setActive(true); step(90000); assert.equal(deltas.at(-1),0);
 loop.dispose(); assert.equal(queue.size,0);
});
test('long frames are capped to avoid a large rotation jump',()=>{
 const {loop,step,deltas}=harness();loop.setActive(true);step(0);step(2000);assert.equal(deltas.at(-1),0.04);loop.dispose();
});
