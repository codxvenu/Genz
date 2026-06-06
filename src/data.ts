import { Service, Step, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'branding',
    title: 'Branding & Design',
    tagline: 'Luxury positioning for digital-first enterprises',
    description: 'We craft iconic brand universes. From narrative-driven positioning strategy to custom visual identities, elegant packaging, and high-convertible user interfaces that establish absolute authority.',
    items: [
      'Storytelling & Brand Strategy',
      'Minimalist Logo Systems',
      'Visual Identity & Style Guidelines',
      'Premium Packaging & Merchandising'
    ],
    icon: 'Sparkles',
    stat: { value: '42+', label: 'Design Awards & Features' }
  },
  {
    id: 'marketing',
    title: 'Omnichannel Growth Marketing',
    tagline: 'Capture minds, own the narrative',
    description: 'Full-spectrum digital dominance. We fuse high-concept modern creative strategy with programmatic media buying, viral social engineering, and precise direct-response analytics.',
    items: [
      'Multi-channel Ad Production',
      'Social Platform Engineering',
      'Creator & Influencer Alliances',
      'Premium Content Distribution'
    ],
    icon: 'Megaphone',
    stat: { value: '3.2B', label: 'Cumulative Organic Views' }
  },
  {
    id: 'staffing',
    title: 'Staffing & High-Performance Recruitment',
    tagline: 'Engineered for relentless execution teams',
    description: 'The hardest bottleneck of scaling is elite talent. We source, vet, negotiate, and integrate global operators into your core ecosystem—from principal designers to growth leads.',
    items: [
      'Curated Talent Pipeline Sourcing',
      'Rigorous Skills-Based Vetting',
      'Executive & Founder Search',
      'Organization Design & HR Setup'
    ],
    icon: 'Users',
    stat: { value: '18 Days', label: 'Average Time-to-Hire' }
  },
  {
    id: 'consulting',
    title: 'Corporate Strategy & Advisory',
    tagline: 'Modern playbooks for high-impact decisions',
    description: 'Rigorous structural audits, custom scale roadmaps, unit-economics modeling, and market mapping designed to help your leadership team move with ultimate confidence.',
    items: [
      'Operational Efficiency Audits',
      'Unit Economics Engineering',
      'Strategic Venture Advisory',
      'Quarterly Execution Models'
    ],
    icon: 'Briefcase',
    stat: { value: '3.6x', label: 'Average Client EBITDA Multiplier' }
  },
  {
    id: 'acquisition',
    title: 'Customer Acquisition Systems',
    tagline: 'Predictable, multi-source pipelines',
    description: 'We construct self-reinforcing acquisition engines, utilizing bespoke landing architecture, high-intent outbound automation, CRM pipelines, and retention loops.',
    items: [
      'Outbound B2B Campaign Engines',
      'Conversion Rate Optimization (CRO)',
      'High-Performance Retention Systems',
      'Qualified Lead-to-Close Mapping'
    ],
    icon: 'Target',
    stat: { value: '+184%', label: 'Average Conversion Boost' }
  },
  {
    id: 'expansion',
    title: 'Location & Expansion Planning',
    tagline: 'Scale from digital roots to physical footprints',
    description: 'Cross-border scale require intelligent geography, regulatory navigation, and cultural tuning. We utilize micro-level market analytics to map your expansion securely.',
    items: [
      'Geospatial Demographic Mapping',
      'Product-Market Fit Localization',
      'Physical Asset Site Selection',
      'Strategic Partnership Integration'
    ],
    icon: 'TrendingUp',
    stat: { value: '14+', label: 'Global Market Expansions' }
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    number: 1,
    title: 'Deep System Audit',
    description: 'We deeply analyze your operations, conversion funnels, brand footprint, and personnel structure to uncover latent leverage points.',
    duration: 'Week 1',
    deliverable: '360° Business System Diagnostic'
  },
  {
    number: 2,
    title: 'Establish Growth Vector',
    description: 'Based on our diagnostic audit, we draft precise growth hypothesis testing models, financial calculations, and immediate tactical priorities.',
    duration: 'Week 2',
    deliverable: '120-Day Integrated Scale Roadmap'
  },
  {
    number: 3,
    title: 'Re-Architect Brand Narrative',
    description: 'We modernize your visible visual assets, product packaging, and sales copies to command premium price points and modern appeal.',
    duration: 'Weeks 3-5',
    deliverable: 'Complete Brand Book & Asset Suite'
  },
  {
    number: 4,
    title: 'Deploy Acquisition Frameworks',
    description: 'Our growth division builds and launches multi-channel programmatic funnels, outbound campaigns, and high-converting acquisition engines.',
    duration: 'Weeks 6-8',
    deliverable: 'Live Automated Lead & Sales Machine'
  },
  {
    number: 5,
    title: 'Unlock Talent & Scale Operations',
    description: 'We recruit premier operators into your workflow, implement advanced operational systems, and tune unit economics for scale.',
    duration: 'Weeks 9-11',
    deliverable: 'Fully Vetted Recruits & Operating SOPs'
  },
  {
    number: 6,
    title: 'Accelerate Hand-in-Hand',
    description: 'Our core team transitions from builders to long-term advisory and optimizing partners. We stand, build, and grow together.',
    duration: 'Ongoing',
    deliverable: 'Weekly Metric Audits & Growth Calls'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Eleanor Vance',
    role: 'Co-Founder & CEO',
    company: 'ScribeAI',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200',
    quote: "Most agencies give you powerpoints and templates. Gen-Z Business Agency came in, rebuilt our brand positioning, placed three principal engineers in our team, and scaled our digital ad funnels. We went from $80k to $450k MRR in less than six months.",
    metric: '+460%',
    metricLabel: 'MRR Scaling',
    highlight: 'Scaled ScribeAI to Series A readiness'
  },
  {
    id: 't2',
    name: 'Julian Thorne',
    role: 'Managing Partner',
    company: 'Apex Logistics',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    quote: "Expanding internationally was a massive hurdle for us. Their team mapped geo-demographic patterns, restructured our candidate shortlists for global hubs, and modernized our visual authority. Absolute masterclass in execution capability.",
    metric: '18 Days',
    metricLabel: 'Expansion Time-to-Go-Live',
    highlight: 'Expanded into 3 new European hubs'
  },
  {
    id: 't3',
    name: 'Zoe Sterling',
    role: 'Founder',
    company: 'Rove Athletics',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    quote: "They understand the mechanics of current internet attention better than anyone. They designed our TikTok pipeline, produced ultra-premium content, and automated our checkout sequence. Complete game changer for direct-to-consumer digital models.",
    metric: '14.2M+',
    metricLabel: 'Organic Views generated',
    highlight: 'Generated over $2.2M in direct sales flow'
  }
];
