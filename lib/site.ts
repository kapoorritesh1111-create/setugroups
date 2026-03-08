export const siteConfig = {
  name: 'SETU Groups',
  title: 'SETU Groups — The Operating System for Global Work and Trade',
  description:
    'SETU Groups builds modern platforms that help companies run workforce operations, payroll workflows, buyer relationships, supplier coordination, and operational follow-through with greater visibility and control.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://setugroup.com',
  email: 'sales@setugroup.com',
  socialImage: '/og-image.svg',
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/company', label: 'Company' },
  { href: '/contact', label: 'Contact' },
];

export const ecosystemCards = [
  {
    eyebrow: 'Workforce operations',
    title: 'SETU Track',
    href: '/setu-track',
    description:
      'Timesheets, approvals, payroll runs, exports, and workforce operations for contractor-heavy teams.',
    bullets: ['Capture time with discipline', 'Control approvals and payroll workflows', 'Export with audit-ready clarity'],
  },
  {
    eyebrow: 'Trade workflow CRM',
    title: 'SETU CRM',
    href: '/setu-crm',
    description:
      'Lead capture, buyer and supplier workflow management, follow-up discipline, and trade relationship visibility.',
    bullets: ['Keep buyer and supplier history in one place', 'Track follow-through across teams', 'Bring order to trade operations'],
  },
];

export const proofPoints = [
  {
    title: 'Built for operational reality',
    text: 'SETU is designed around actual operating loops: work logged to payroll, lead captured to follow-up, buyer relationship to shipment execution.',
  },
  {
    title: 'Trade fluency plus software discipline',
    text: 'The parent brand bridges global trade know-how with productized SaaS systems that reduce workflow leakage and improve control.',
  },
  {
    title: 'Credible for teams that need structure',
    text: 'Clear permissions, cleaner reporting, and platform thinking make SETU suited to managers, operators, and decision-makers who need more than spreadsheets.',
  },
  {
    title: 'Ecosystem-ready architecture',
    text: 'The website and product stack are structured to grow into a broader SETU operating ecosystem without reintroducing fragmentation later.',
  },
];

export const companyMetrics = [
  { value: '25+ years', label: 'brand and operating experience shaping how the ecosystem is built' },
  { value: '2 immediate products', label: 'already positioned for workforce operations and trade relationship management' },
  { value: 'Global mindset', label: 'built for teams handling cross-border operations, suppliers, contractors, and follow-through' },
];

export const solutions = [
  {
    title: 'Agencies and contractor-heavy teams',
    text: 'Use SETU Track to standardize timesheets, approvals, payroll runs, and exports without losing operational visibility.',
  },
  {
    title: 'Distributed operations teams',
    text: 'Create cleaner handoffs between people, projects, approvers, finance, and client-facing operations.',
  },
  {
    title: 'Exporters and trade-led businesses',
    text: 'Use SETU CRM to keep buyer and supplier workflows visible, disciplined, and action-oriented.',
  },
  {
    title: 'Operators scaling across systems',
    text: 'Adopt a parent ecosystem that can grow with software products instead of patching together isolated point tools.',
  },
];

export const trackModules = [
  'Timesheets and work logging',
  'Manager approvals',
  'Payroll run preparation',
  'Exports and operational reporting',
  'Project and workforce visibility',
  'Audit-ready workflow control',
];

export const crmModules = [
  'Lead capture and trade inquiry logging',
  'Buyer and supplier relationship records',
  'Follow-up pipelines and task ownership',
  'Document coordination and meeting history',
  'Sales and sourcing visibility',
  'Operational follow-through across teams',
];
