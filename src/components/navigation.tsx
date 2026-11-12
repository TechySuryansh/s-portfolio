'use client';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
const items = [['Projects', 'projects'], ['Experience', 'experience'], ['About', 'about'], ['Skills', 'skills']];
export function Navigation() {
 const [open, setOpen] = useState(false);
 return <header className="header" onKeyDown={(event) => { if (event.key === 'Escape') { setOpen(false); event.currentTarget.querySelector<HTMLButtonElement>('.menu-toggle')?.focus(); } }}><a className="wordmark" href="#home" aria-label="Suryansh Singh home">Suryansh Singh<span>.</span></a><button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button><nav id="main-navigation" aria-label="Main navigation" className={open ? 'navigation open' : 'navigation'}>{items.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={15}/></a></nav></header>;
}
