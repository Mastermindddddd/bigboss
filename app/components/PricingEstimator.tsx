'use client';

import { useMemo, useState } from 'react';
import { Calculator, CheckCircle2 } from 'lucide-react';

import { digitalPricing, estimatorServices as digitalOptions, estimatorPlans as plans, estimateProject, formatUSD } from '@/app/data/digitalPricing';

export default function PricingEstimator() {
  const [service, setService] = useState<keyof typeof digitalPricing>('DAT-01');
  const [complexity, setComplexity] = useState('standard');
  const [plan, setPlan] = useState('none');
  const [billing, setBilling] = useState<'monthly'|'annual'>('monthly');

  const estimate = useMemo(() => {
    const selected = digitalOptions.find((x) => x.id === service)!;
    const project = estimateProject(service, complexity);
    const selectedPlan = plans.find((x) => x.id === plan)!;
    const recurring = billing === 'annual' ? selectedPlan.annual : selectedPlan.monthly;
    return { project, recurring, label: selected.label };
  }, [service, complexity, plan, billing]);

  return (
    <div className="v2-estimator-shell">
      <div className="v2-estimator-head">
        <div><span className="v2-kicker"><Calculator size={15}/> Project estimator</span><h2>Build an indicative digital estimate.</h2></div>
        <p>Choose a digital service, scope and support plan. This is an indicative starting point only; formal pricing follows confirmed scope.</p>
      </div>
      <div className="v2-estimator-grid">
        <label>Service<select value={service} onChange={(e)=>setService(e.target.value as keyof typeof digitalPricing)}>{digitalOptions.map(o=><option key={o.id} value={o.id}>{o.label}</option>)}</select></label>
        <label>Scope<select value={complexity} onChange={(e)=>setComplexity(e.target.value)}><option value="starter">Starter</option><option value="standard">Professional</option><option value="advanced">Advanced / Multi-system</option></select></label>
        <label>Managed plan<select value={plan} onChange={(e)=>setPlan(e.target.value)}>{plans.map(o=><option key={o.id} value={o.id}>{o.label}</option>)}</select></label>
        <label>Billing<select value={billing} onChange={(e)=>setBilling(e.target.value as 'monthly'|'annual')}><option value="monthly">Monthly</option><option value="annual">Annual</option></select></label>
      </div>
      <div className="v2-estimate-result" role="status" aria-live="polite">
        <div><small>Estimated project starting point</small><strong>{formatUSD(estimate.project)}</strong><span>{estimate.label}</span></div>
        <div><small>Selected managed service</small><strong>{estimate.recurring ? formatUSD(estimate.recurring) : '—'}</strong><span>{plan === 'none' ? 'No recurring plan selected' : billing === 'annual' ? 'per year' : 'per month'}</span></div>
        <a href="#digital-enquiry" className="v2-btn-primary">Request formal quote</a>
      </div>
      <div className="v2-estimator-note"><CheckCircle2 size={15}/> USD catalogue pricing. Taxes, hosting, licences, third-party services, travel and unusual integrations are quoted separately where applicable.</div>
    </div>
  );
}
