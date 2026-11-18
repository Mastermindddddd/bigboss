'use client';

import { useState } from 'react';
import { ArrowRight, Bot, Database, Layers3, ShieldCheck, Target, Workflow } from 'lucide-react';

const scenarios = [
  {
    id: 'intelligence', label: 'Executive intelligence',
    input: 'Finance, operations & sales', foundation: 'Validated KPI & data model',
    application: 'Dashboards & decision tools', outcome: 'A shared performance view',
    question: 'Which decisions need one reliable view of performance?',
    detail: 'Agree KPI definitions, reconcile source data and design the reporting experience around leadership decisions.',
  },
  {
    id: 'assistant', label: 'Knowledge & AI',
    input: 'Approved organisational knowledge', foundation: 'Permissions & retrieval index',
    application: 'AI assistant with evaluation', outcome: 'Reviewed, source-led answers',
    question: 'How can approved knowledge become easier to use?',
    detail: 'Define access boundaries, test retrieval quality and introduce human review before expanding the assistant’s role.',
  },
  {
    id: 'spatial', label: 'Spatial operations',
    input: 'Assets, routes & field records', foundation: 'Geocoded, quality-checked data',
    application: 'Spatial analysis & workflows', outcome: 'Location-led interventions',
    question: 'Where should the next operational action happen?',
    detail: 'Connect locations to service measures, identify exceptions and shape a workflow that field teams can act on.',
  },
] as const;

export default function DigitalArchitecture() {
  const [selected, setSelected] = useState(0);
  const scenario = scenarios[selected];
  const steps = [
    { label: 'Connect', icon: Layers3, content: scenario.input },
    { label: 'Structure', icon: Database, content: scenario.foundation },
    { label: 'Activate', icon: selected === 1 ? Bot : Workflow, content: scenario.application },
    { label: 'Decide', icon: Target, content: scenario.outcome },
  ];

  return <section id="architecture" className="v2-section architecture-section">
    <div className="architecture-heading" data-reveal><div><div className="v2-kicker">An architecture for value</div><h2>See how the<br/><span>pieces connect.</span></h2></div><p>A digital solution should connect information to action. Explore three solution pathways — each shaped around a different organisational need.</p></div>
    <div className="architecture-switch" role="group" aria-label="Solution architecture">
      {scenarios.map((item,index)=><button key={item.id} type="button" aria-pressed={selected===index} onClick={()=>setSelected(index)}>{item.label}<ArrowRight size={15}/></button>)}
    </div>
    <div className="architecture-blueprint" key={scenario.id}>
      <div className="blueprint-topline"><span><i/> Solution pathway / 0{selected+1}</span><small>SOLUTION BLUEPRINT</small></div>
      <div className="architecture-nodes">{steps.map(({label,icon: Icon,content},index)=><div className="architecture-node" key={label} style={{animationDelay:`${index*70}ms`}}><div className="architecture-node-index">0{index+1} / {label}</div><Icon size={28}/><h3>{content}</h3>{index<3?<div className="architecture-connector" aria-hidden="true"><span/><ArrowRight size={16}/></div>:null}</div>)}</div>
      <div className="architecture-governance"><ShieldCheck size={17}/><span>Across every layer</span><b>Access</b><i/><b>Quality</b><i/><b>Human oversight</b><i/><b>Monitoring</b></div>
    </div>
    <div className="architecture-context" aria-live="polite"><h3>{scenario.question}</h3><p>{scenario.detail} The final architecture, integrations and infrastructure are confirmed through discovery.</p></div>
  </section>;
}
