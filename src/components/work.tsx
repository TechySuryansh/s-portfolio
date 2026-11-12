import { ArrowRight, ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import { DepthCard } from './depth-card';
import { projects, type Project } from '@/data/portfolio';
import { ResourceLink, SectionHeading } from './ui';

export function Experience() {
  return <section className="section" id="experience">
    <SectionHeading number="02" label="WHERE I’VE CONTRIBUTED" title="Learning through building."/>
    <div className="experience">
      <div className="experience-date"><span className="timeline-dot"/>MAY — JUL 2025<span>Remote · Internship</span></div>
      <div className="experience-body">
        <div className="experience-title"><div><h3>Frontend Developer Intern</h3><p>Alphavima Technologies</p></div><BriefcaseBusiness size={24}/></div>
        <p>Developed Employee Portal modules covering expense, performance, and leave management. Built responsive interfaces with React.js and Tailwind CSS, managed state with Redux Toolkit, and collaborated on API integration and testing.</p>
        <ul className="experience-deliverables"><li><strong>Employee workflows</strong><span>Interfaces for three day-to-day management modules.</span></li><li><strong>Application state</strong><span>Redux Toolkit integration for frontend state management.</span></li><li><strong>Delivery collaboration</strong><span>API integration and testing ahead of deployment.</span></li></ul>
        <div className="tags">{['React.js', 'Tailwind CSS', 'Redux Toolkit', 'API Integration'].map(t=><span key={t}>{t}</span>)}</div>
      </div>
    </div>
  </section>;
}

function ProjectWorkflow({project}:{project:Project}) {
  return <div className={`project-visual workflow-visual ${project.theme}`}>
    <span className="workflow-label">{project.number} / APPLICATION WORKFLOW</span>
    <ol className="workflow-steps">{project.workflow.map((step,i)=><li key={step}><span>0{i+1}</span><strong>{step}</strong>{i<project.workflow.length-1&&<ArrowRight size={16} aria-hidden="true"/>}</li>)}</ol>
    <a className="workflow-launch" href={project.demo} target="_blank" rel="noreferrer">Explore the live application <ArrowUpRight size={18}/></a>
  </div>;
}

export function Projects() {
  return <section className="section" id="projects">
    <SectionHeading number="01" label="SELECTED WORK" title="Explore what I’ve built.">Three different applications: customer retention, wellness assessment, and conversational AI.</SectionHeading>
    <div className="projects-grid">{projects.map((project,i)=><DepthCard key={project.name} className={`project-card ${i===0?'featured':''}`}>
      <ProjectWorkflow project={project}/>
      <div className="project-content">
        <div className="project-category">{project.category}<span>{project.number}</span></div>
        <h3>{project.name}</h3><p>{project.description}</p><p className="project-detail">{project.features}</p>
        <div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
        <div className="project-links"><ResourceLink href={project.demo}>Live demo</ResourceLink><ResourceLink href={project.github}>Source code</ResourceLink>{project.caseStudy&&<a className="resource-link" href={project.caseStudy}>Case study <ArrowRight size={15}/></a>}</div>
        <p className="project-try">{project.tryIt}</p>
      </div>
    </DepthCard>)}</div>
  </section>;
}
