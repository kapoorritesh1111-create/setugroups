import ProductDetail from '../../../(sections)/components/ProductDetail';

const product = {
  eyebrow: 'SETU Track',
  title: 'Workforce operations with approval and payroll closure built in.',
  description: 'SETU Track is the workforce operating system for timesheets, approvals, payroll runs, exports, and reporting. It is designed for contractor-heavy teams that need stronger operational control than generic time trackers provide.',
  outcomes: ['Work logged to payroll closure', 'Cleaner exports and auditability', 'Admin and manager visibility'],
  problems: [
    'Scattered timesheets and weak approval discipline',
    'Manual payroll preparation with poor status visibility',
    'Broken operational context across people, projects, and pay periods'
  ],
  features: [
    'Dashboard, projects, people, approvals, and exports',
    'Payroll runs and pay-period locking',
    'Reporting and analytics expansion path',
    'Role-based workforce workflow structure'
  ]
};

export const metadata = { title: 'SETU Track — SETU Groups' };

export default function Page({ params }) {
  return <ProductDetail locale={params.locale} product={product} />;
}
