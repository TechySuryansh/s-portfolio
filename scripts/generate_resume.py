from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.pagesizes import A4
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
styles = {
 'name': ParagraphStyle('name',fontName='Helvetica-Bold',fontSize=26,leading=30,textColor=colors.HexColor('#142444'),spaceAfter=5),
 'subtitle': ParagraphStyle('subtitle',fontName='Helvetica',fontSize=10,leading=14,textColor=colors.HexColor('#475e83'),spaceAfter=7),
 'body': ParagraphStyle('body',fontName='Helvetica',fontSize=9,leading=13,textColor=colors.HexColor('#303a4a'),spaceAfter=5),
 'section': ParagraphStyle('section',fontName='Helvetica-Bold',fontSize=10,leading=14,textColor=colors.HexColor('#3157a0'),spaceBefore=12,spaceAfter=6),
 'title': ParagraphStyle('title',fontName='Helvetica-Bold',fontSize=9.5,leading=13,textColor=colors.HexColor('#18243a'),spaceAfter=4),
}
parts=[]
def p(text,style='body'): parts.append(Paragraph(text,styles[style]))
p('SURYANSH SINGH','name')
p('Aspiring AI/ML Engineer | Full-Stack Developer | Problem Solver','subtitle')
p('suryansh.singh2024@nst.rishihood.edu.in | <link href="https://github.com/TechySuryansh" color="#3157a0">GitHub</link> | <link href="https://www.linkedin.com/in/suryansh-singh-7ba737363/" color="#3157a0">LinkedIn</link> | <link href="https://leetcode.com/u/suryanshsingh55/" color="#3157a0">LeetCode</link>')
p('PROFILE','section')
p('Artificial Intelligence undergraduate building AI-powered applications and responsive web interfaces. Interested in machine learning, agentic AI, and practical software engineering.')
p('EXPERIENCE','section')
p('Alphavima Technologies | Frontend Developer Intern','title')
p('May 2025 - July 2025 | Remote')
p('Developed Employee Portal modules for expense, performance, and leave management using React.js and Tailwind CSS. Managed state with Redux Toolkit; collaborated on API integration and testing.')
p('PROJECTS','section')
p('ChurnGuard AI | <link href="https://fomzrnb9gaaa7ivk4nmzog.streamlit.app/" color="#3157a0">Live demo</link>','title')
p('Customer churn analytics with profiling, ML visualizations, Scikit-Learn predictions, and an agentic RAG workflow using LangGraph and ChromaDB. Integrated conversational retention insights, PDF reports, and persistent session memory.')
p('<b>Tools:</b> Python, LangGraph, LangChain, Groq, Scikit-Learn, ChromaDB')
p('Mental Health Tracker | <link href="https://mental-health-tracker-eosin.vercel.app/" color="#3157a0">Live demo</link>','title')
p('Wellness assessment project with a web interface and Python prediction API. Explores student habits, sleep, social-media use, and self-reported stress to estimate a mental-health score. Educational prototype, not a clinical assessment.')
p('Chat Bot | <link href="https://chatbot-ciryx8htupviy7cm5eshqn.streamlit.app/" color="#3157a0">Live demo</link>','title')
p('Conversational AI project whose current repository implements a LangGraph agent with persistent conversation checkpoints, web and document search, configurable personas, and document-source citation instructions.')
p('<b>Tools:</b> Python, LangChain, LangGraph')
p('SKILLS','section')
p('<b>Programming:</b> Python, Java, JavaScript, TypeScript, SQL, HTML, CSS<br/><b>Frontend:</b> React, Redux Toolkit, Tailwind CSS<br/><b>Backend:</b> Node.js, Express.js, Prisma ORM<br/><b>AI/ML:</b> Machine Learning, LangChain, LangGraph, LLMs, Pandas, Matplotlib<br/><b>Databases:</b> MongoDB, MySQL<br/><b>Tools:</b> Git, GitHub, Figma, n8n, OAuth 2.0')
p('EDUCATION','section')
p('<b>Newton School of Technology, Rishihood University</b><br/>B.Tech in Artificial Intelligence | 2024-2028 | CGPA: 8.0/10')
p('<b>South City Public School</b><br/>Class XII | 2022-2023 | 84% &nbsp;&nbsp; / &nbsp;&nbsp; Class X | 2020-2021 | 90%')
p('ACHIEVEMENTS','section')
p('350+ LeetCode problems solved; rating 1500+. Participated in Smart India Hackathon. Represented cricket team at district level.')
SimpleDocTemplate(str(ROOT/'public/resume.pdf'),pagesize=A4,rightMargin=42,leftMargin=42,topMargin=35,bottomMargin=30,title='Suryansh Singh - Resume',author='Suryansh Singh').build(parts)
