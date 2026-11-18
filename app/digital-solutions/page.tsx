import Link from 'next/link';
import { ArrowRight, CheckCircle2, Cpu, Database, Globe2, Layers3, ShieldCheck, Workflow } from 'lucide-react';
import EnquiryForm from '@/app/components/EnquiryForm';
import PricingEstimator from '@/app/components/PricingEstimator';
import DashboardStudio from '@/app/components/DashboardStudio';
import V2DashboardGallery from '@/app/components/V2DashboardGallery';
import HeroScene from '@/app/components/HeroScene';
import DigitalMotion from '@/app/components/DigitalMotion';
import DigitalArchitecture from '@/app/components/DigitalArchitecture';
import { digitalPlans, digitalServices } from '@/app/data/digital';

export const metadata = {
  title: 'Digital Solutions | BigBoss Corporate Consulting',
  description: 'BigBoss digital capability: software, data, dashboards, GIS, automation and responsible AI. Explore industry dashboard templates, indicative USD pricing and managed support.',
};

const orbitItems = [
  { label: 'AI & Automation', icon: Cpu }, { label: 'Data Analytics', icon: Database },
  { label: 'Cloud & Integration', icon: Layers3 }, { label: 'Governance by Design', icon: ShieldCheck },
  { label: 'Spatial Intelligence', icon: Globe2 }, { label: 'Smart Workflows', icon: Workflow },
];

const enterpriseStages = [
  { number: '01', title: 'Frame the decision', text: 'Agree the business outcome, baseline, accountable owner and measurable acceptance criteria before selecting a platform.' },
  { number: '02', title: 'Design the foundation', text: 'Map data access, quality, integrations, privacy, identity and deployment constraints into a practical architecture.' },
  { number: '03', title: 'Prove the workload', text: 'Use a bounded pilot to evaluate accuracy, latency, operating cost and human review against agreed test cases.' },
  { number: '04', title: 'Prepare for operations', text: 'Define monitoring, failure handling, ownership, documentation and support before a controlled production release.' },
];

export default function DigitalSolutionsPage() {
  return <DigitalMotion>
    <section className="v2-digital-hero">
      <div className="v2-digital-grid" aria-hidden="true"/>
      <div className="v2-digital-copy">
        <Link className="digital-parent-link" href="/">BigBoss Corporate Consulting <span>/ Digital Solutions</span></Link>
        <div className="v2-kicker light">Strategy. Data. Digital delivery.</div>
        <h1>Innovation <span>with purpose.</span></h1>
        <p>Connect strategy to systems that help your organisation see clearly, work smarter and make better decisions.</p>
        <div className="v2-actions"><a href="#services" className="v2-btn-primary">Explore digital services <ArrowRight size={16}/></a><a href="#pricing" className="v2-btn-dark">View pricing</a></div>
        <div className="v2-digital-points"><span>A BigBoss capability</span><span>Business-led architecture</span><span>Responsible AI</span></div>
      </div>
      <div className="v2-globe-stage">
        <HeroScene variant="digital" embedded/>
        <img src="/visuals/digital-globe.png" alt="Connected Africa digital globe" fetchPriority="high"/>
        <div className="v2-orbit-ring ring-a" aria-hidden="true"/><div className="v2-orbit-ring ring-b" aria-hidden="true"/><div className="v2-orbit-ring ring-c" aria-hidden="true"/>
        {orbitItems.map(({label,icon: Icon},i)=><div key={label} className={`v2-solution-chip orbit-chip-${i+1}`}><Icon size={18}/><span>{label}</span></div>)}
      </div>
    </section>

    <div className="digital-capability-strip"><span>DATA & ANALYTICS</span><span>SOFTWARE & INTEGRATION</span><span>AI & AUTOMATION</span><span>GIS & SPATIAL INTELLIGENCE</span></div>
    <nav className="digital-section-nav" aria-label="Digital Solutions sections"><span>BIGBOSS <b>DIGITAL</b></span><a href="#services">Capabilities</a><a href="#architecture">Architecture</a><a href="#enterprise">Enterprise & AI</a><a href="#showcase">Dashboards</a><a href="#pricing">Pricing</a><a href="#digital-enquiry">Let’s talk <ArrowRight size={13}/></a><div className="digital-reading-progress" aria-hidden="true"/></nav>

    <section className="v2-section digital-intro">
      <div className="v2-kicker">One organisation. Connected capabilities.</div>
      <h2>Digital delivery, backed by the BigBoss perspective.</h2>
      <p>Digital Solutions is part of BigBoss Corporate Consulting. We connect technology choices with organisational strategy, people, processes and performance — through one corporate relationship and a scope shaped around your needs.</p>
      <Link href="/services" className="digital-text-link">Explore BigBoss consulting services <ArrowRight size={16}/></Link>
    </section>

    <section id="services" className="v2-section">
      <div className="v2-section-head" data-reveal><div><div className="v2-kicker">What we build</div><h2>Practical systems.<br/>Clear business purpose.</h2></div><p>From a first website to an integrated data environment, start with the decision or workflow that needs to improve. The technology follows the problem.</p></div>
      <div className="v2-digital-service-grid">
        {digitalServices.map((service,index)=><article className="v2-digital-service-card" key={service.code} data-reveal data-reveal-delay={(index%4)*60}>
          <div className="v2-digital-service-icon"><service.icon size={23}/></div><small>{service.code}</small><h3>{service.title}</h3><p>{service.description}</p>
          <ul>{service.outcomes.map(outcome=><li key={outcome}><CheckCircle2 size={14}/>{outcome}</li>)}</ul>
          <div className="v2-digital-price"><span>Starting from · USD</span><strong>{service.fromPrice}</strong></div>
          {service.priceNote?<p className="digital-price-note">{service.priceNote}</p>:null}
        </article>)}
      </div>
    </section>

    <DigitalArchitecture/>

    <section id="enterprise" className="v2-section enterprise-section">
      <div className="v2-section-head"><div><div className="v2-kicker">Enterprise & AI readiness</div><h2>Ambition, with an architecture to match.</h2></div><p>For complex engagements, discovery establishes feasibility, delivery capacity and the specialist resources required. Advanced AI and GPU work is separately scoped; starter prices are not enterprise deployment quotations.</p></div>
      <div className="enterprise-focus-grid" data-reveal>
        <article><Database size={25}/><h3>A trusted data foundation</h3><p>Plan governed ingestion, data quality, access controls and traceability before adding AI. Agree where data may be processed and who owns it.</p></article>
        <article><Cpu size={25}/><h3>AI & GPU workload planning</h3><p>Evaluate retrieval, inference, vision and batch workloads against accuracy, latency, memory and cost requirements. Assess GPU compatibility and benchmark the target environment before committing to infrastructure.</p></article>
        <article><ShieldCheck size={25}/><h3>Controls from the start</h3><p>Define least-privilege access, evaluation datasets, human approval points and monitoring. Document failure modes and escalation paths as part of the delivery scope.</p></article>
      </div>
      <div className="enterprise-flow">{enterpriseStages.map((stage,index)=><article key={stage.number} data-reveal data-reveal-delay={index*70}><span>{stage.number}</span><h3>{stage.title}</h3><p>{stage.text}</p></article>)}</div>
      <p className="enterprise-scope-note">Engagements are subject to technical discovery and agreed resources. Infrastructure, specialist delivery resources and operating responsibilities are agreed during discovery.</p>
    </section>

    <section id="showcase" className="v2-section dashboard-library">
      <div className="v2-section-head"><div><div className="v2-kicker">Dashboard experience library</div><h2>Different decisions.<br/>Different designs.</h2></div><p>Explore seven interactive workspaces and two original V2 command-centre designs. Switch industries, filter operating views and explore the detail behind each template.</p></div>
      <DashboardStudio/>
      <V2DashboardGallery/>
    </section>

    <section id="estimator" className="v2-section v2-estimator-section"><PricingEstimator/></section>

    <section id="pricing" className="v2-section v2-pricing-section">
      <div className="v2-section-head"><div><div className="v2-kicker">Digital project pricing</div><h2>Clear starting points.<br/>Room to scale.</h2></div><p>Indicative prices in USD for defined starter scopes. Final quotations depend on complexity, integrations and data condition. Taxes, hosting, licences, cloud/GPU usage and third-party services are additional where applicable.</p></div>
      <div className="v2-price-table">{digitalServices.map(service=><div key={service.code}><span><small>{service.code}</small>{service.title}</span><strong>From {service.fromPrice}</strong></div>)}</div>
      <p className="digital-pricing-note">Websites: starter scope only; corporate and commerce builds are quoted separately. Advanced executive dashboards typically start within $500–$1,250+, depending on scope. Other corporate consulting services remain individually quoted.</p>
      <div className="v2-section-head v2-plan-head"><div><div className="v2-kicker">Managed services</div><h2>Keep your digital<br/>environment moving.</h2></div><p>Choose monthly or annual support for an agreed scope. Plans cover maintenance, monitoring and optimisation; major new builds and infrastructure consumption are separately quoted.</p></div>
      <div className="v2-plan-grid">{digitalPlans.map((plan,index)=><article className={`v2-plan-card ${plan.featured?'featured':''}`} key={plan.name} data-reveal data-reveal-delay={index*70}>
        {plan.featured?<b>Comprehensive care</b>:null}<small>{plan.name}</small><div><strong>{plan.monthly}</strong><span>/month</span></div><em>{plan.annual} / year</em><p>{plan.summary}</p><ul>{plan.features.map(feature=><li key={feature}><CheckCircle2 size={14}/>{feature}</li>)}</ul><a href="#digital-enquiry" className={plan.featured?'v2-btn-primary':'v2-btn-ghost'}>Discuss this plan</a>
      </article>)}</div>
    </section>

    <section className="v2-digital-story">
      <div className="v2-digital-story-copy"><div className="v2-kicker light">From strategy to systems</div><h2>Technology opens possibilities. People create impact.</h2><p>Bring your strategic challenge, your operational context and your ambition. BigBoss will help shape a practical digital engagement around them.</p></div>
      <img src="/visuals/digital-strategy.png" alt="Digital strategy and organisational decision-making environment" loading="lazy"/>
    </section>
    <section id="digital-enquiry" className="v2-section"><EnquiryForm service="BigBoss Digital Solutions" heading="Let’s define your next digital move."/></section>
  </DigitalMotion>;
}
