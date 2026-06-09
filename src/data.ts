import { Service, Step, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'branding',
    title: 'Branding & Identity',
    tagline: 'Establish absolute narrative authority',
    description: 'We construct iconic brand universes. From deep positioning to custom logo systems, packaging, and high-impact visual direction that wins customer loyalty.',
    items: [
      'Brand Identity',
      'Logo Systems',
      'Packaging Design',
      'Visual Direction'
    ],
    icon: 'Sparkles',
    stat: { value: '25+', label: 'Design Awards' }
  },
  {
    id: 'marketing',
    title: 'Omnichannel Marketing',
    tagline: 'Capture attention and drive conversions',
    description: 'We launch synchronized, multichanel campaigns designed to dominate modern digital channels, build highly active social loops, and generate native performance.',
    items: [
      'Social Media Engineering',
      'Direct-Response Campaigns',
      'Performance Marketing',
      'Local & Regional Marketing'
    ],
    icon: 'Megaphone',
    stat: { value: '4.5B', label: 'Cumulative Client Reach' }
  },
  {
    id: 'staffing',
    title: 'Staffing & HR Support',
    tagline: 'Empower your scaling process with elite talent',
    description: 'We handle the absolute hardest bottleneck of business growth: sourcing, vetting, recruiting, and embedding high-performing operators into your workspace.',
    items: [
      'Talent Acquisition Sourcing',
      'Rigorous Operator Vetting',
      'Quick Candidate Shortlisting',
      'Long-Term HR Support & Alignment'
    ],
    icon: 'Users',
    stat: { value: '14 Days', label: 'Avg Placement Velocity' }
  },
  {
    id: 'acquisition',
    title: 'Customer Acquisition',
    tagline: 'Predictable, highly validated systems',
    description: 'No more guessing where your next customers will come from. We build automated B2B/B2C acquisition funnels, retention loops, and high-convertible lead tools.',
    items: [
      'Qualified Lead Generation',
      'In-Depth Audience Research',
      'Customer Retention Loops',
      'Automated Growth Funnels'
    ],
    icon: 'Target',
    stat: { value: '3.2x', label: 'Average Pipeline ROI' }
  },
  {
    id: 'consulting',
    title: 'Business Consulting & Systems',
    tagline: 'Architecting long-term scalable structures',
    description: 'We operate as your strategic wingman, diagnosing hidden structural leaks, defining exact tactical planning sheets, and building real operational systems.',
    items: [
      'Macro Business Strategy',
      'Milestone Growth Planning',
      'Comprehensive Market Analysis',
      'System Scale Architecture'
    ],
    icon: 'Briefcase',
    stat: { value: '94%', label: 'Retention Success Rate' }
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    number: 1,
    title: 'Discover',
    description: 'We deeply immerse into your business, auditing operational structures, customer profiles, and existing setups to find high-impact leverage points.',
    duration: 'Week 1',
    deliverable: 'Audited Systems & Diagnostic Brief'
  },
  {
    number: 2,
    title: 'Strategize',
    description: 'We construct a bulletproof, customized growth roadmap outlining the precise milestones for branding, marketing pipelines, and team placements.',
    duration: 'Weeks 2-3',
    deliverable: 'Integrated Growth Pipeline Playbook'
  },
  {
    number: 3,
    title: 'Execute',
    description: 'Our specialized crews deploy live branding templates, launch coordinated acquisition funnels, and place elite talent in critical roles.',
    duration: 'Weeks 4-10',
    deliverable: 'Live Coordinated Acquisition Machine'
  },
  {
    number: 4,
    title: 'Scale',
    description: 'We continuously tune workflows, optimize ad performance metrics, and build modular templates for repeatable customer acquisition at scale.',
    duration: 'Ongoing',
    deliverable: 'EBITDA Optimization & Weekly Audits'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'CEO & Founder',
    company: 'Solas Apparel',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
    quote: "GBA fundamentally changed our growth trajectory. Instead of managing a marketing contractor, a separate recruiter, and an expensive branding executive, GBA handled the entire suite cohesively. Our revenue grew 4x in 90 days.",
    metric: '4X Growth',
    metricLabel: '90-day Revenue Multiple',
    highlight: 'Deterred high agency fragmentation'
  },
  {
    id: 't2',
    name: 'Marcus Ramirez',
    role: 'Managing Director',
    company: 'LogixFlow',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200',
    quote: "Their internet-native sense of customer behavior is uncanny. They modernized our visual brand, immediately filled our hiring gaps with three stellar developers, and designed in-bound funnels that convert organically.",
    metric: '+320%',
    metricLabel: 'Qualified Lead Pipelines',
    highlight: 'Hired & integrated elite personnel'
  },
  {
    id: 't3',
    name: 'Aria Chen',
    role: 'Co-Founder',
    company: 'Zetta Robotics',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    quote: "We spent months talking to disconnected consultants who gave us boring manuals. GBA actually did the building. They crafted a gorgeous system, set up automated outbound campaigns, and structured our long-term HR strategy.",
    metric: '14 Days',
    metricLabel: 'Average Staff Integration',
    highlight: 'Replaced five legacy service vendors'
  }
];

export const CASE_STUDIES = [
  {
    id: 'c1',
    category: 'Startup Growth',
    title: 'How GBA Scaled Solas Apparel From Zero to Series-A Readiness',
    metric: '+320% Leads',
    description: 'Repositioned their visual brand legacy and orchestrated high-frequency social media loops that converted into repeatable leads.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'c2',
    category: 'Local Business',
    title: 'Transforming Regional Services Into High-Profit Market Leaders',
    metric: '3X Customer Acquisition',
    description: 'Engineered target-rich local search pipelines coupled with automated response funnels to boost customer volumes directly.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'c3',
    category: 'Retail Brand',
    title: 'Crossing Borders: Omnichannel Tactics for Retail Modernization',
    metric: 'Expanded Into New Markets',
    description: 'Designed comprehensive demographic matches, streamlined logistics, and recruited on-site operators for smooth market entry.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
  }
];
