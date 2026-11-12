'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const perspectives = [
  { label: 'Intelligence', number: '01', shape: 'intelligence', title: 'Give context a purpose.', description: 'Exploring how language models, persistent memory, and agentic workflows become practical applications.', tools: 'LangGraph / LangChain / Python', href: '#projects' },
  { label: 'Interfaces', number: '02', shape: 'interfaces', title: 'Make the complex usable.', description: 'Building responsive interfaces that connect people to useful software, from employee portals to conversational applications.', tools: 'React / Redux Toolkit / Tailwind CSS', href: '#experience' },
  { label: 'Engineering', number: '03', shape: 'engineering', title: 'Keep asking how it works.', description: 'Developing a foundation in software engineering through problem solving, full-stack technologies, and hands-on projects.', tools: 'Java / Node.js / SQL', href: '#skills' },
];

export function Perspectives() {
  const [active, setActive] = useState(0);
  const selected = perspectives[active];
  return <section className="perspectives" aria-label="Explore my interests">
    <div className="perspective-top"><span>THREE INTERESTS. ONE CURIOUS MIND.</span><span>{selected.number} / 03</span></div>
    <div className="perspective-layout">
      <div className={`perspective-art ${selected.shape}`} aria-hidden="true"><div className="perspective-object">{Array.from({length:6},(_,i)=><i key={i}/>)}</div><span>{selected.label.toUpperCase()}</span></div>
      <div className="perspective-copy">
        <div className="perspective-options" role="group" aria-label="Choose an interest">{perspectives.map((p,i)=><button key={p.label} onClick={()=>setActive(i)} aria-pressed={active===i}>{p.label}<ArrowUpRight size={12}/></button>)}</div>
        <div aria-live="polite" aria-atomic="true"><h3>{selected.title}</h3><p>{selected.description}</p><span className="perspective-tools">{selected.tools}</span><a href={selected.href}>Explore this perspective <ArrowUpRight size={15}/></a></div>
      </div>
    </div>
  </section>;
}
