// USD catalogue. Every amount is exactly half of the supplied V2 catalogue.
export const digitalPricing = {
  'DIG-01': 150,
  'WEB-01': 200,
  'DIG-02': 750,
  'DAT-01': 300,
  'GIS-01': 400,
  'AUT-01': 375,
  'AI-01': 375,
  'ERP-01': 750,
} as const;

export const supportPricing = {
  essential: { monthly: 24.5, annual: 245 },
  growth: { monthly: 64.5, annual: 645 },
  professional: { monthly: 124.5, annual: 1245 },
  premium: { monthly: 249.5, annual: 2495 },
} as const;

export const estimatorServices = [
  { id: 'DIG-01', label: 'Digital Transformation Roadmap' },
  { id: 'WEB-01', label: 'Business Website' },
  { id: 'DAT-01', label: 'Dashboard / Executive Intelligence' },
  { id: 'GIS-01', label: 'GIS & Spatial Intelligence' },
  { id: 'AUT-01', label: 'AI / Workflow Automation' },
  { id: 'AI-01', label: 'AI Business Assistant' },
  { id: 'DIG-02', label: 'Custom Web Application / MVP' },
  { id: 'ERP-01', label: 'ERP / Enterprise Systems Advisory' },
] as const;

export const estimatorPlans = [
  { id: 'none', label: 'No ongoing plan', monthly: 0, annual: 0 },
  { id: 'essential', label: 'Essential Care', ...supportPricing.essential },
  { id: 'growth', label: 'Business Growth', ...supportPricing.growth },
  { id: 'professional', label: 'Professional Digital', ...supportPricing.professional },
  { id: 'premium', label: 'Premium Digital Partner', ...supportPricing.premium },
] as const;

export function formatUSD(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function estimateProject(code: keyof typeof digitalPricing, scope: string) {
  const factor = scope === 'starter' ? 1 : scope === 'advanced' ? 2.2 : 1.5;
  // Retain V2's original rounding, then halve the result (e.g. $1,130 → $565).
  return Math.round(digitalPricing[code] * 2 * factor / 10) * 5;
}
