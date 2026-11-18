import { digitalPricing, supportPricing, formatUSD } from './digitalPricing';
import type { LucideIcon } from 'lucide-react';
import {
  Bot,
  BarChart3,
  Code2,
  Database,
  Globe2,
  MapPinned,
  Network,
  Workflow,
} from 'lucide-react';

export type DigitalService = {
  code: string;
  title: string;
  icon: LucideIcon;
  description: string;
  outcomes: string[];
  fromPrice: string;
  priceNote?: string;
};

export const digitalServices: DigitalService[] = [
  {
    code: 'DIG-01',
    title: 'Digital Transformation Assessment & Roadmap',
    icon: Network,
    description: 'A practical assessment of processes, systems, data, customer journeys and digital opportunities — translated into a staged transformation roadmap.',
    outcomes: ['Current-state map', 'Priority opportunities', 'Technology roadmap', 'Implementation sequence'],
    fromPrice: formatUSD(digitalPricing['DIG-01']),
  },
  {
    code: 'WEB-01',
    title: 'Websites & Digital Commerce',
    icon: Globe2,
    description: 'Modern, mobile-first websites designed around credibility, lead generation, conversion and maintainability — not decoration alone.',
    outcomes: ['Responsive experience', 'Lead capture', 'SEO-ready foundation', 'Analytics and conversion paths'],
    fromPrice: formatUSD(digitalPricing['WEB-01']),
    priceNote: 'Starter websites; corporate and e-commerce scopes are quoted separately.',
  },
  {
    code: 'DIG-02',
    title: 'Software & Enterprise Applications',
    icon: Code2,
    description: 'Custom web applications and business tools that replace fragmented manual work with controlled digital workflows.',
    outcomes: ['Requirements and architecture', 'MVP or production build', 'Testing and deployment', 'Documentation and support'],
    fromPrice: formatUSD(digitalPricing['DIG-02']),
  },
  {
    code: 'DAT-01',
    title: 'Data, Dashboards & Executive Intelligence',
    icon: BarChart3,
    description: 'Executive dashboards and analytical systems configured around the client’s own data, KPIs, preferred visual style and decision rhythm.',
    outcomes: ['KPI architecture', 'Data model', 'Interactive dashboard', 'Executive reporting experience'],
    fromPrice: formatUSD(digitalPricing['DAT-01']),
    priceNote: 'Starter dashboard; advanced executive environments are typically $500–$1,250+.',
  },
  {
    code: 'GIS-01',
    title: 'GIS & Spatial Intelligence',
    icon: MapPinned,
    description: 'Location intelligence, geocoding, spatial analysis, interactive maps and GIS dashboards that make geographic patterns visible and actionable.',
    outcomes: ['Spatial data preparation', 'Geocoding and analysis', 'Interactive map or dashboard', 'Decision-ready spatial insights'],
    fromPrice: formatUSD(digitalPricing['GIS-01']),
  },
  {
    code: 'AUT-01',
    title: 'Automation & AI-enabled Workflows',
    icon: Workflow,
    description: 'Automation, AI assistants and workflow tools that reduce repetitive work, improve response times and create consistent process control.',
    outcomes: ['Workflow mapping', 'Automation design', 'AI-assisted task support', 'Monitoring and handover'],
    fromPrice: formatUSD(digitalPricing['AUT-01']),
  },
  {
    code: 'AI-01',
    title: 'AI Consultants & Business Assistants',
    icon: Bot,
    description: 'Business-facing AI assistants configured for approved knowledge, customer support, internal information retrieval or administrative workflows.',
    outcomes: ['Use-case design', 'Knowledge configuration', 'Human oversight controls', 'Deployment and support'],
    fromPrice: formatUSD(digitalPricing['AI-01']),
  },
  {
    code: 'ERP-01',
    title: 'ERP & Enterprise Systems Advisory',
    icon: Database,
    description: 'Process, data and integration support to help organisations select, improve or connect enterprise systems without adding unnecessary complexity.',
    outcomes: ['Requirements map', 'Systems assessment', 'Integration roadmap', 'Implementation support'],
    fromPrice: formatUSD(digitalPricing['ERP-01']),
  },
];

export const digitalPlans = [
  {
    name: 'Essential Care',
    monthly: formatUSD(supportPricing.essential.monthly),
    annual: formatUSD(supportPricing.essential.annual),
    summary: 'For a small business that needs its digital presence kept healthy.',
    features: ['Website health monitoring', 'Minor content updates', 'Security and maintenance checks', 'Monthly support window', 'Basic analytics review'],
  },
  {
    name: 'Business Growth',
    monthly: formatUSD(supportPricing.growth.monthly),
    annual: formatUSD(supportPricing.growth.annual),
    summary: 'For businesses actively using digital channels to generate enquiries and operate better.',
    features: ['Everything in Essential', 'Priority website updates', 'Conversion and SEO review', 'Monthly performance summary', 'Limited dashboard/data support'],
  },
  {
    name: 'Professional Digital',
    monthly: formatUSD(supportPricing.professional.monthly),
    annual: formatUSD(supportPricing.professional.annual),
    summary: 'For organisations with websites, dashboards or automation that need recurring professional support.',
    features: ['Everything in Business Growth', 'Dashboard maintenance', 'Data-refresh support', 'Automation monitoring', 'Quarterly optimisation session', 'Faster support turnaround'],
  },
  {
    name: 'Premium Digital Partner',
    monthly: formatUSD(supportPricing.premium.monthly),
    annual: formatUSD(supportPricing.premium.annual),
    summary: 'A managed digital partnership across your existing BigBoss-built digital environment.',
    features: ['Priority support', 'Website/app maintenance', 'Dashboard and analytics care', 'Automation and AI monitoring', 'Monthly optimisation session', 'Preferential rates on new builds', 'Annual digital roadmap review'],
    featured: true,
  },
];

