import { CopyEmail } from './copy-email';
import { ArrowUpRight, ArrowUp, Github, Linkedin } from 'lucide-react';
import { email, links } from '@/data/portfolio';
import { ContactForm } from './contact-form';
import { ResourceLink } from './ui';
export function Contact() {return <section className="section contact-section" id="contact"><div><p className="eyebrow"><span>07</span> / LET’S CONNECT</p><h2>Have something<br/>in mind?<br/><span>Let’s build it.</span></h2><p className="contact-copy">Open to internships, meaningful collaborations, and conversations about AI and software.</p><a className="email-link" href={`mailto:${email}`}>{email}<ArrowUpRight size={16}/></a><CopyEmail/><div className="contact-social"><ResourceLink href={links.github}><Github size={16}/> GitHub</ResourceLink><ResourceLink href={links.linkedin}><Linkedin size={16}/> LinkedIn</ResourceLink></div></div><ContactForm/></section>}
export function Footer(){return <footer className="footer"><a href="/#home" className="wordmark">suryansh<span>.</span></a><p>© {new Date().getFullYear()} Suryansh Singh. Built with intention.</p><a href="/#home">Back to top <ArrowUp size={14}/></a></footer>}
