import { Perspectives } from '@/components/perspectives';
import { Navigation } from '@/components/navigation';
import { Hero, About } from '@/components/hero';
import { Experience, Projects } from '@/components/work';
import { Skills, Achievements, Education } from '@/components/background';
import { Contact, Footer } from '@/components/contact';
export default function Home() { return <div className="container"><Navigation/><main id="main"><Hero/><Projects/><Experience/><About/><Perspectives/><Skills/><Achievements/><Education/><Contact/></main><Footer/></div>; }
