import { ArrowDown, ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';
import { links } from '@/data/portfolio';
import { ResourceLink } from './ui';
import { Sculpture } from './sculpture';

export function Hero() {
  return <>
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true"/>
      <div className="hero-topline"><span>ENGINEER. EXPLORER. BUILDER.</span><span>AI & SOFTWARE / OPEN TO INTERNSHIPS</span></div>
      <Sculpture/>
      <div className="hero-side-note"><span>01 / PERSPECTIVE</span><b>+</b><span>ARTIFICIAL INTELLIGENCE<br/>HUMAN CURIOSITY</span></div>
      <div className="hero-content">
        <p className="hero-name">CURIOUS MIND. INTELLIGENT POSSIBILITIES.</p>
        <h1>Suryansh <span>Singh</span></h1>
        <p className="hero-description">AI undergraduate building conversational applications<br/>with LangGraph and responsive interfaces with React.</p>
        <p className="hero-role">Seeking AI/ML & software-development internships</p>
        <div className="hero-actions"><a className="button primary" href="#projects">Explore my work <ArrowDown size={16}/></a><a className="hero-conversation" href="#contact">Start a conversation <ArrowUpRight size={16}/></a>{links.resume && <a className="resume-link" href={links.resume} download>Resume <Download size={14}/></a>}</div>
        <div className="hero-profile-links"><ResourceLink href={links.github}><Github size={16}/> GitHub</ResourceLink><ResourceLink href={links.linkedin}><Linkedin size={16}/> LinkedIn</ResourceLink></div>
      </div>
      <div className="hero-bottom"><a href="#about"><ArrowDown size={14}/> SCROLL TO DISCOVER</a><a href="#contact" className="hero-available"><span/> OPEN TO INTERNSHIPS & COLLABORATIONS</a></div>
    </section>
    <div className="proof-strip"><div><strong>350<span>+</span></strong><p>LeetCode problems solved</p></div><div><strong>1500<span>+</span></strong><p>LeetCode rating</p></div><div><strong>03</strong><p>AI projects to explore</p></div><a href="#projects">THE IDEAS.<br/>THE WORK BEHIND THEM.<ArrowUpRight size={22}/></a></div>
  </>;
}
export function About() { return <section id="about" className="section about-section"><div><p className="eyebrow"><span>03</span> / A LITTLE ABOUT ME</p><h2>At the intersection of<br/>curiosity <span className="muted">& code.</span></h2></div><div className="about-copy"><p>I’m Suryansh, an aspiring AI/ML engineer and full-stack developer pursuing a B.Tech in Artificial Intelligence at Newton School of Technology, Rishihood University.</p><p>I’m interested in how intelligent systems become useful products. My work spans AI-powered applications and responsive web interfaces, with a growing focus on machine learning, agentic AI, and software engineering.</p><div className="about-facts"><span><b>2024–2028</b>B.Tech · Artificial Intelligence</span><span><b>8.0<span className="muted"> / 10</span></b>Current CGPA</span></div></div></section>; }
